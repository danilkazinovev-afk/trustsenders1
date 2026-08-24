/** Telegram's HTML parse mode needs exactly these three escaped. */
const esc = (v: unknown) =>
  String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

export type Submission = {
  full_name: string
  work_email: string
  company_website?: string | null
  situation?: string | null
  monthly_send_volume?: string | null
  deliverability_issue?: string | null
}

export function buildMessage(s: Submission): string {
  const rows: [string, unknown][] = [
    ["Name", s.full_name],
    ["Email", s.work_email],
    ["Company / Website", s.company_website],
    ["Describes them", s.situation],
    ["Monthly volume", s.monthly_send_volume],
    ["Deliverability issue", s.deliverability_issue],
  ]
  return [
    "<b>New deliverability review request</b>",
    "",
    ...rows.filter(([, v]) => v).map(([k, v]) => `<b>${k}:</b> ${esc(v)}`),
  ].join("\n")
}
