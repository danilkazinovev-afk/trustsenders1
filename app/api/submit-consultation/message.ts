/** Telegram rejects a sendMessage body over 4096 chars with "message is too long". */
export const TELEGRAM_LIMIT = 4096

/** Telegram's HTML parse mode needs exactly these three escaped. */
const esc = (v: unknown) =>
  String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

/**
 * Truncate an ALREADY-ESCAPED value. Trailing partial entities ("&a", "&lt")
 * are stripped, or Telegram would reject the malformed markup.
 */
const cap = (s: string, n: number) =>
  s.length <= n ? s : s.slice(0, n).replace(/&[a-z]{0,4}$/, "") + "…"

export type Submission = {
  full_name: string
  work_email: string
  company_website?: string | null
  situation?: string | null
  monthly_send_volume?: string | null
  deliverability_issue?: string | null
}

// Caps are per field so one long answer cannot push the message over the limit:
// 5 × 250 + 2400 + labels ≈ 3.8k, comfortably inside 4096.
const FIELDS: [label: string, key: keyof Submission, max: number][] = [
  ["Name", "full_name", 250],
  ["Email", "work_email", 250],
  ["Company / Website", "company_website", 250],
  ["Describes them", "situation", 250],
  ["Monthly volume", "monthly_send_volume", 250],
  ["Deliverability issue", "deliverability_issue", 2400],
]

export function buildMessage(s: Submission): string {
  return [
    "<b>New deliverability review request</b>",
    "",
    ...FIELDS
      .filter(([, k]) => s[k] != null && String(s[k]).trim() !== "")
      .map(([label, k, max]) => `<b>${label}:</b> ${cap(esc(String(s[k]).trim()), max)}`),
  ].join("\n")
}
