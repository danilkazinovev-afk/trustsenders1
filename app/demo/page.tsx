import type { Metadata } from "next"
import Nav from "@/components/nav"
import DemoForm from "./DemoForm"

export const metadata: Metadata = {
  title: "Book a Free Deliverability Review — Trust Senders",
  description:
    "Tell us about your sending setup. We'll identify the real issues and show you exactly what needs to be fixed — no commitment required.",
}

export default function DemoPage() {
  return (
    <>
      <Nav />
      <main className="demo-main">
        <div className="container">
          <DemoForm />
        </div>
      </main>
    </>
  )
}
