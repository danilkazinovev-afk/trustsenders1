// Run: node app/api/submit-consultation/message.test.ts
import assert from "node:assert"
import { buildMessage } from "./message.ts"

// every field present
const full = buildMessage({
  full_name: "Ada Lovelace", work_email: "ada@example.com",
  company_website: "analytical.co", situation: "Agency or Consultancy",
  monthly_send_volume: "10K - 100K / month", deliverability_issue: "spam folder",
})
assert.match(full, /^<b>New deliverability review request<\/b>\n\n/)
assert.match(full, /<b>Name:<\/b> Ada Lovelace/)
assert.match(full, /<b>Deliverability issue:<\/b> spam folder/)
assert.strictEqual(full.split("\n").length, 8) // title + blank + 6 rows

// optional fields omitted entirely, never rendered as "null"/"undefined"
const minimal = buildMessage({ full_name: "Bob", work_email: "b@x.io" })
assert.strictEqual(minimal.split("\n").length, 4)
assert.doesNotMatch(minimal, /null|undefined|Company/)

// HTML injection cannot break out of the message or forge markup
const nasty = buildMessage({
  full_name: "<b>fake</b> & <script>alert(1)</script>",
  work_email: "a@b.co", deliverability_issue: "5 > 3 && 2 < 4",
})
assert.doesNotMatch(nasty.replace("<b>New deliverability review request</b>", ""), /<script>|<\/b>fake/)
assert.match(nasty, /&lt;b&gt;fake&lt;\/b&gt; &amp; &lt;script&gt;/)
assert.match(nasty, /5 &gt; 3 &amp;&amp; 2 &lt; 4/)

// the label markup itself must survive escaping of values
assert.strictEqual((nasty.match(/<b>/g) ?? []).length, 4) // title + 3 labels

console.log("message.test.ts: all assertions passed")
