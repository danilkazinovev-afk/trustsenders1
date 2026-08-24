import { NextRequest, NextResponse } from "next/server"
import { buildMessage, type Submission } from "./message"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    const { full_name, work_email } = body as Record<string, unknown>

    // Non-strings would stringify to junk like "[object Object]".
    if (typeof full_name !== "string" || typeof work_email !== "string") {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    if (!full_name.trim() || !EMAIL_RE.test(work_email.trim())) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Read at request time, not module load: a missing var must not break the build.
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID
    if (!token || !chatId) {
      console.error("[submit-consultation] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not set")
      return NextResponse.json({ error: "Failed to send request" }, { status: 500 })
    }

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: buildMessage(body as Submission),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    })

    if (!res.ok) {
      console.error("[submit-consultation] Telegram error:", res.status, await res.text())
      return NextResponse.json({ error: "Failed to send request" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("[submit-consultation] Unexpected error:", err)
    return NextResponse.json({ error: "Failed to send request" }, { status: 500 })
  }
}
