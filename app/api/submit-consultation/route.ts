import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase/server"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { full_name, work_email, company_website, situation, monthly_send_volume, deliverability_issue } = body

    if (!full_name || !work_email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!EMAIL_RE.test(work_email)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { error } = await supabaseAdmin.from("consultation_requests").insert({
      full_name,
      work_email,
      company_website: company_website || null,
      situation: situation || null,
      monthly_send_volume: monthly_send_volume || null,
      deliverability_issue: deliverability_issue || null,
    })

    if (error) {
      return NextResponse.json({ error: "Failed to save request" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: "Failed to save request" }, { status: 500 })
  }
}
