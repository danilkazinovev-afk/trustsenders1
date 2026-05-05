import type { Metadata } from "next"
import Nav from "@/components/nav"

export const metadata: Metadata = {
  title: "Privacy Policy — Trust Senders",
  description: "How Trust Senders collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="privacy-main">
        <div className="container">
          <div className="privacy-wrap">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-updated">Last updated: May 2026</p>

            <p className="privacy-lead">
              At Trust Senders, we value your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, and safeguard your data
              when you use our services. By using Trust Senders, you agree to the terms outlined in
              this policy.
            </p>

            <p className="privacy-body">
              This "Privacy Policy" describes the privacy practices of Trust Senders and our
              subsidiaries and affiliates (collectively, "Trust Senders", "we", "us", or "our") in
              connection with the https://trustsenders.com website or any other website that we own
              or control and which posts or links to this Privacy Policy (collectively, the
              "Service"), and our direct marketing communications. This Privacy Policy does not apply
              to personal information or other information that we handle on behalf of our business
              customers. Our use of that information is restricted by our agreements with those
              customers. If you have questions about personal information that our customers share
              with us, we encourage you to contact the relevant customer. Our websites, products, and
              services are designed for businesses and their representatives. We do not target
              consumers seeking to use our services for personal or household purposes. Accordingly,
              we treat all personal data we collect as pertaining to individuals in their business
              capacity.
            </p>

            {/* A */}
            <h2 className="privacy-h2">A. Personal Information We Collect</h2>
            <p className="privacy-body">
              <strong>Information you provide to us.</strong> Personal information you may provide
              through the Service includes:
            </p>
            <ul className="privacy-list">
              <li>Business and personal contact information, such as your first and last name, email and mailing addresses, phone number, professional title, and company name.</li>
              <li>Content you choose to submit, such as email templates, domain and DNS configuration details, sending infrastructure data, and associated metadata.</li>
              <li>Registration information, such as information related to onboarding, consultations, webinars, or other educational opportunities for which you register.</li>
              <li>Feedback or correspondence, such as information you provide when you contact us with questions, feedback, or deliverability issues.</li>
              <li>Demographic information, such as your city, state, country of residence, and postal code.</li>
              <li>Usage information, such as how you interact with the Service, including content you submit and your use of any interactive features.</li>
              <li>Marketing information, including your preferences for receiving communications about our activities, events, and publications, and how you engage with our communications.</li>
              <li>Other information we may collect that is not specifically listed here, used in accordance with this Privacy Policy or as disclosed at the time of collection.</li>
            </ul>

            <p className="privacy-body">
              <strong>Information from social media platforms.</strong> We may maintain pages on
              platforms such as LinkedIn and others. When you interact with our pages there, the
              platform's own privacy policy applies. Any information provided to us through those
              platforms will be treated in accordance with this Privacy Policy.
            </p>

            <p className="privacy-body">
              <strong>Cookies and automated data collection.</strong> We, our service providers, and
              business partners may automatically collect information about you, your device, and
              your activity on the Service. This may include device type and operating system,
              browser type, screen resolution, IP address, referring URLs, general location, and
              behavioral data such as pages viewed, time spent, and navigation paths. We use cookies,
              browser web storage (LSOs), web beacons, and pixel tags to collect this information
              and to measure the effectiveness of our marketing and improve our content. For
              information on managing cookies, visit allaboutcookies.org.
            </p>

            {/* B */}
            <h2 className="privacy-h2">B. How We Use Your Personal Information</h2>
            <p className="privacy-body">
              We use your personal information for the following purposes:
            </p>
            <p className="privacy-body"><strong>To operate the Service:</strong></p>
            <ul className="privacy-list">
              <li>Provide, operate, and improve our email deliverability consulting and infrastructure services.</li>
              <li>Communicate with you about the Service, including announcements, updates, security alerts, and support messages.</li>
              <li>Understand your needs and personalize your experience with the Service and our communications.</li>
              <li>Provide technical support and maintenance for the Service.</li>
              <li>Respond to your requests, questions, and feedback.</li>
            </ul>
            <p className="privacy-body">
              <strong>For research and development.</strong> We analyze usage of the Service to
              improve our offerings and develop new consulting methodologies and infrastructure
              solutions.
            </p>
            <p className="privacy-body">
              <strong>To send marketing and promotional communications.</strong> We may send
              marketing communications as permitted by law. You may opt out at any time as described
              below.
            </p>
            <p className="privacy-body">
              <strong>To comply with law.</strong> We use your personal information as necessary to
              comply with applicable laws, lawful requests, and legal processes, including responses
              to government authorities.
            </p>
            <p className="privacy-body">
              <strong>For compliance, fraud prevention, and safety.</strong> We may use and disclose
              your personal information to protect the rights, privacy, safety, or property of Trust
              Senders, our customers, or others; to enforce our terms; and to investigate or deter
              fraudulent, harmful, or unauthorized activity.
            </p>
            <p className="privacy-body">
              <strong>With your consent.</strong> In some cases we may specifically ask for your
              consent to collect, use, or share your personal information.
            </p>
            <p className="privacy-body">
              <strong>To create anonymized or aggregated data.</strong> We may create anonymized,
              aggregated, or de-identified data from your personal information for lawful business
              purposes, including service improvement and business analytics.
            </p>

            {/* C */}
            <h2 className="privacy-h2">C. How We Share Your Personal Information</h2>
            <p className="privacy-body">
              <strong>Affiliates.</strong> We may share your personal information with our parent
              company, subsidiaries, and affiliates for purposes consistent with this Privacy Policy.
            </p>
            <p className="privacy-body">
              <strong>Service providers.</strong> We may share your personal information with
              third-party vendors that provide services on our behalf, such as hosting, analytics,
              email delivery infrastructure, customer support, and database management. These parties
              may only use your information as directed by us and in accordance with this Privacy
              Policy.
            </p>
            <p className="privacy-body">
              <strong>Professional advisors.</strong> We may disclose your personal information to
              lawyers, accountants, auditors, and insurers where necessary in the course of
              professional services they render to us.
            </p>
            <p className="privacy-body">
              <strong>Business partners.</strong> We may share information with integration and
              joint marketing partners whose products or services may be relevant to you. You may
              opt out of this sharing as described below.
            </p>
            <p className="privacy-body">
              <strong>For compliance, fraud prevention, and safety.</strong> As described in Section
              B above.
            </p>
            <p className="privacy-body">
              <strong>Business transfers.</strong> In connection with a merger, acquisition,
              reorganization, sale of assets, or similar transaction, your personal information may
              be transferred. We will make reasonable efforts to require the recipient to honor this
              Privacy Policy.
            </p>

            {/* D */}
            <h2 className="privacy-h2">D. Your Choices</h2>
            <p className="privacy-body">
              <strong>Access or update your information.</strong> You may request to review or
              update your personal information by contacting us at privacy [at] trustsenders [dot]
              com.
            </p>
            <p className="privacy-body">
              <strong>Opt out of marketing communications.</strong> You may opt out of marketing
              emails by using the unsubscribe link at the bottom of any such email or by contacting
              us at privacy [at] trustsenders [dot] com. You will continue to receive
              service-related communications.
            </p>
            <p className="privacy-body">
              <strong>Cookies and similar technologies.</strong> Most browsers allow you to remove
              or reject cookies via browser settings. Disabling cookies may affect Service
              functionality. You may also opt out of targeted advertising through the Network
              Advertising Initiative or the Digital Advertising Alliance.
            </p>
            <p className="privacy-body">
              <strong>Opt out of information sharing.</strong> To opt out of sharing your
              information with business partners, email us at privacy [at] trustsenders [dot] com
              with the subject line "Opt Out of Sharing".
            </p>
            <p className="privacy-body">
              <strong>Do Not Track.</strong> We currently do not respond to "Do Not Track" signals.
              For more information, visit allaboutdnt.com.
            </p>

            {/* E */}
            <h2 className="privacy-h2">E. Third-Party Sites and Services</h2>
            <p className="privacy-body">
              The Service may contain links to third-party websites and services. These links are
              not endorsements, and we are not responsible for the privacy practices of those third
              parties. We encourage you to review the privacy policies of any external services you
              use.
            </p>

            {/* F */}
            <h2 className="privacy-h2">F. Security Practices</h2>
            <p className="privacy-body">
              We employ organizational, technical, and physical safeguards to protect your personal
              information. However, no internet technology is entirely secure, and we cannot
              guarantee absolute security of your data.
            </p>

            {/* G */}
            <h2 className="privacy-h2">G. International Data Transfers</h2>
            <p className="privacy-body">
              We may have service providers in multiple countries. Your personal information may be
              transferred to and processed in locations where privacy laws differ from those in your
              jurisdiction.
            </p>

            {/* H */}
            <h2 className="privacy-h2">H. Children</h2>
            <p className="privacy-body">
              The Service is not directed to individuals under the age of 16. If you believe a minor
              has provided us with personal information without parental consent, please contact us
              and we will delete such information promptly.
            </p>

            {/* I */}
            <h2 className="privacy-h2">I. Changes to This Privacy Policy</h2>
            <p className="privacy-body">
              We reserve the right to modify this Privacy Policy at any time. Material changes will
              be communicated by updating the date of this policy and posting it on the Service, and
              where required by law, by additional notice such as email. Your continued use of the
              Service after any modification constitutes acceptance of the updated Privacy Policy.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
