import type { Metadata } from "next"
import Nav from "@/components/nav"

export const metadata: Metadata = {
  title: "Terms of Service - Trust Senders",
  description: "The terms and conditions governing your use of Trust Senders services.",
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="privacy-main">
        <div className="container">
          <div className="privacy-wrap">
            <h1 className="privacy-title">Terms of Service</h1>
            <p className="privacy-updated">Last updated: May 2026</p>

            <p className="privacy-lead">
              These Terms of Service ("Terms of Service"), together with any applicable Order Form,
              collectively constitute a binding agreement (the "Agreement") between Trust Senders
              ("Trust Senders," "we," "us," or "our") and you or the legal entity you represent
              ("Customer"). Any terms not defined herein have the meaning given to them in the
              applicable Order Form.
            </p>

            <p className="privacy-body terms-caps">
              PLEASE READ THIS AGREEMENT CAREFULLY. BY CLICKING "SIGN UP," COMPLETING REGISTRATION,
              OR ACCESSING OR USING ANY OF THE SERVICES, YOU REPRESENT THAT (1) YOU HAVE READ,
              UNDERSTAND, AND AGREE TO BE BOUND BY THIS AGREEMENT, (2) YOU ARE OF LEGAL AGE TO FORM
              A BINDING CONTRACT, AND (3) YOU HAVE THE AUTHORITY TO ENTER INTO THIS AGREEMENT
              PERSONALLY OR ON BEHALF OF THE ENTITY YOU REPRESENT AND TO BIND THAT ENTITY TO THE
              AGREEMENT. THE TERM "CUSTOMER" REFERS TO THE INDIVIDUAL OR LEGAL ENTITY IDENTIFIED
              WHEN YOU REGISTERED FOR THE SERVICES. IF YOU DO NOT AGREE TO BE BOUND BY THIS
              AGREEMENT, YOU MAY NOT ACCESS OR USE THE SERVICES.
            </p>

            {/* 1 */}
            <h2 className="privacy-h2">1. Definitions</h2>
            <p className="privacy-body"><strong>1.1</strong> "Access Credentials" means login information, passwords, API keys, security protocols, and policies through which Authorized Users access the Services.</p>
            <p className="privacy-body"><strong>1.2</strong> "Additional Services" means any supplementary services, including professional or consulting services, provided by Trust Senders to Customer as described in an Order Form or statement of work mutually agreed to by the parties, including implementation, onboarding, support, maintenance, and training services.</p>
            <p className="privacy-body"><strong>1.3</strong> "Authorized User" means each of Customer's employees and independent contractors who are provided Access Credentials by Customer or Trust Senders.</p>
            <p className="privacy-body"><strong>1.4</strong> "Applicable Data Protection Laws" means the privacy, data protection, and data security laws and regulations of any jurisdiction applicable to the processing of Personal Information under the Agreement, including, without limitation, European Data Protection Laws and the CCPA.</p>
            <p className="privacy-body"><strong>1.5</strong> "CCPA" means the California Consumer Privacy Act of 2018 and any regulations promulgated thereunder.</p>
            <p className="privacy-body"><strong>1.6</strong> "Trust Senders Code" means libraries, software development kits (SDKs), scripts, or other code provided by Trust Senders for use in connection with the Services.</p>
            <p className="privacy-body"><strong>1.7</strong> "Confidential Information" means all written or oral information disclosed by one party (the "Disclosing Party") to the other (the "Recipient") related to the business, products, services, or operations of the Disclosing Party or a third party that has been identified as confidential or that by the nature of the information or the circumstances surrounding disclosure ought reasonably to be treated as confidential, including: (i) trade secrets, inventions, processes, computer source and object code, data, programs, know-how, discoveries, developments, and techniques; (ii) information regarding products, research, marketing and business plans, budgets, financial statements, contracts, prices, employees, suppliers, and agents; and (iii) information regarding the skills and compensation of the Disclosing Party's employees, contractors, and other agents.</p>
            <p className="privacy-body"><strong>1.8</strong> "Dashboard" means Trust Senders' administrative interface for accessing and managing the Services, including configuring deliverability settings, viewing analytics data, and managing account settings.</p>
            <p className="privacy-body"><strong>1.9</strong> "Services" means the Trust Senders platform, API (if applicable), Dashboard, Trust Senders Code, email deliverability consulting, infrastructure management, and any Additional Services as described in the applicable Order Form.</p>
            <p className="privacy-body"><strong>1.10</strong> "Documentation" means the documentation, user guides, help materials, and other resources describing the features, functions, and operation of the Services.</p>
            <p className="privacy-body"><strong>1.11</strong> "European Data Protection Laws" means the GDPR and other data protection laws and regulations of the European Union, together with any applicable implementing or supplementary legislation in Member States of the EEA or the United Kingdom (including the UK Data Protection Act 2018).</p>
            <p className="privacy-body"><strong>1.12</strong> "GDPR" means (i) Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016, as amended ("EU GDPR"), and (ii) the EU GDPR as it forms part of UK law by virtue of section 3 of the European Union (Withdrawal) Act 2018, including any applicable national implementing legislation and any successor, amendment, or re-enactment thereof.</p>
            <p className="privacy-body"><strong>1.13</strong> "Order Form" means any online or written form or communication provided by Trust Senders evidencing Customer's initial designation of the Services and any subsequent orders.</p>
            <p className="privacy-body"><strong>1.14</strong> "Personal Information" means any Customer Content that identifies, or is capable of identifying, any specific individual and/or constitutes "personally identifiable information," "personal data," or similar terms under applicable privacy laws.</p>
            <p className="privacy-body"><strong>1.15</strong> "Prohibited Data" shall have the meaning set out in Trust Senders' Data Processing Addendum.</p>
            <p className="privacy-body"><strong>1.16</strong> "Customer Content" means the data, email lists, domain configurations, sending infrastructure details, templates, and other content uploaded or submitted into the Services by or on behalf of Customer and/or its Authorized Users.</p>

            {/* 2 */}
            <h2 className="privacy-h2">2. Modifications to the Agreement</h2>
            <p className="privacy-body">
              Trust Senders may modify this Agreement from time to time. Unless otherwise specified,
              changes become effective for Customer at the start of Customer's next Renewal Term or
              upon entry into a new Order Form, whichever is earlier. Trust Senders will use
              reasonable efforts to notify Customer of changes via Customer's account, email, or
              other means. Continued use of the Services after an updated version of this Agreement
              takes effect constitutes Customer's acceptance of the updated terms. If Trust Senders
              specifies that changes will take effect prior to Customer's next Renewal Term and
              Customer objects, Customer may terminate the applicable Term and receive a refund of
              any pre-paid Fees for the terminated portion of the Term.
            </p>

            {/* 3 */}
            <h2 className="privacy-h2">3. Access, Rights, Restrictions, and Security</h2>
            <p className="privacy-body"><strong>3.1 Overview of Services.</strong> Trust Senders shall provide Customer with access to the Services described in the applicable Order Form, including email deliverability consulting, DNS and infrastructure configuration, sending infrastructure management, and related tooling, along with a Dashboard for managing and monitoring Service usage.</p>
            <p className="privacy-body"><strong>3.2 Access Grant.</strong> Subject to Customer's compliance with this Agreement, Trust Senders grants Customer and its Authorized Users a non-exclusive, non-transferable, non-sublicensable, revocable right to access and use the Services during the Term.</p>
            <p className="privacy-body"><strong>3.3 Beta Releases.</strong> Trust Senders may make available certain products, features, or tools that are not yet generally available, including those labeled "alpha," "pre-release," or "beta" (collectively, "Beta Features"). Beta Features are provided on an "as is" and "as available" basis without warranty, support, maintenance, or indemnity obligations. Customer acknowledges that Beta Features may be incomplete or contain bugs or errors for which Trust Senders will not be responsible.</p>
            <p className="privacy-body"><strong>3.4 Access Credentials.</strong> Customer will safeguard and ensure that all Authorized Users safeguard Access Credentials. Customer is responsible for all acts and omissions of Authorized Users and will notify Trust Senders immediately of any known or suspected unauthorized use or breach of security.</p>
            <p className="privacy-body"><strong>3.5 Customer Restrictions.</strong> During the Term and thereafter, Customer shall not, and shall not permit any employees, contractors, or Authorized Users to, directly or indirectly: (a) resell, sublicense, or otherwise make the Services available to third parties; (b) use or demonstrate the Services in a manner that competes with Trust Senders; (c) reverse engineer, disassemble, or decompile the Services or attempt to derive underlying source code or algorithms (except as permitted by applicable law); (d) export or transfer any part of the Services in violation of applicable export control laws; (e) copy, modify, translate, or create derivative works of any part of the Services; (f) interfere with or disrupt the integrity or performance of the Services or bypass any security measures; (g) use automated tools to scrape, index, or extract data from the Services in an unauthorized manner; or (h) use the Services to send unsolicited communications (spam), distribute malware, infringe third-party rights, or violate any applicable laws or regulations, including anti-spam laws such as CAN-SPAM, CASL, and GDPR.</p>
            <p className="privacy-body"><strong>3.6 Customer Obligations.</strong> Customer is responsible for obtaining and maintaining all telecommunications, hardware, software, and internet connectivity required to access the Services. Customer shall use commercially reasonable efforts to prevent unauthorized access to the Services and promptly notify Trust Senders of any known unauthorized use.</p>

            <p className="privacy-body"><strong>3.7 Proprietary Rights and Confidential Information</strong></p>
            <p className="privacy-body"><strong>(a) Confidential Information</strong></p>
            <p className="privacy-body"><strong>(i) Use and Disclosure.</strong> Each party will have access to the other's Confidential Information during this Agreement. Each Recipient agrees: (A) not to disclose the Disclosing Party's Confidential Information to anyone except employees and contractors with a need to know who are bound by equivalent confidentiality obligations ("Representatives"), and (B) not to use or reproduce Confidential Information for any purpose other than exercising rights and performing obligations under this Agreement. Each Recipient will be liable for the acts and omissions of its Representatives with respect to the other party's Confidential Information.</p>
            <p className="privacy-body"><strong>(ii) Exceptions.</strong> The obligations in Section 3.7(a)(i) do not apply to information that: (A) becomes publicly available through no fault of the Recipient; (B) is lawfully received from a third party free of confidentiality obligations; (C) was already known to the Recipient without restriction at the time of disclosure; or (D) was independently developed by the Recipient without access to the Confidential Information. Either party may disclose Confidential Information as required by law or court order, provided it gives reasonable prior written notice to the other party and cooperates in seeking a protective order.</p>
            <p className="privacy-body"><strong>(b) Customer Content</strong></p>
            <p className="privacy-body"><strong>(i)</strong> Customer is solely responsible for the accuracy, quality, and legality of Customer Content. Customer warrants it has full authority to transmit and store Customer Content through the Services and has obtained all necessary third-party licenses and consents. Customer bears sole responsibility for adequate security, protection, and backup of Customer Content on its own systems.</p>
            <p className="privacy-body"><strong>(ii)</strong> Customer specifically agrees not to use the Services to collect, store, process, or transmit any Prohibited Data.</p>
            <p className="privacy-body"><strong>(iii)</strong> Customer grants Trust Senders a non-exclusive license to use Customer Content solely as necessary to provide the Services. Trust Senders may collect, use, and analyze de-identified or aggregated data derived from Customer Content for lawful business purposes, including service improvement and product development, and may disclose such data solely in aggregate form.</p>
            <p className="privacy-body"><strong>(iv)</strong> Customer bears sole responsibility for the accuracy, quality, integrity, legality, reliability, and appropriateness of all Customer Content, including all email lists, sending domains, and contact data submitted through the Services.</p>
            <p className="privacy-body"><strong>(c) Services.</strong> Except for the limited access grant provided to Customer under this Agreement, Trust Senders reserves all right, title, and interest in its intellectual property, including the Services, Documentation, and Trust Senders trademarks. Unless expressly set forth in an Order Form, all work product developed pursuant to this Agreement and all intellectual property derived therefrom shall be the sole and exclusive property of Trust Senders.</p>
            <p className="privacy-body"><strong>(d) Continuous Development.</strong> Trust Senders may continually develop and update the Services with new features, functionality, and improvements. Trust Senders reserves the right to modify the Services at any time. Some modifications will be provided at no additional charge; others may require additional fees, provided that Customer may continue using the existing version of the Services without such features at no additional cost.</p>
            <p className="privacy-body"><strong>(e) Additional Services.</strong> Customer may request Additional Services beyond those described in the Order Form. Trust Senders has no obligation to provide such services unless agreed to in writing in an Order Form or statement of work.</p>
            <p className="privacy-body"><strong>(f) Feedback.</strong> Trust Senders may use comments and suggestions provided by Customer or its Authorized Users in connection with the Services ("Feedback"). Customer hereby grants Trust Senders a worldwide, non-exclusive, irrevocable, perpetual, royalty-free license to incorporate Feedback into its products and services.</p>

            {/* 4 */}
            <h2 className="privacy-h2">4. Data Privacy</h2>
            <p className="privacy-body">
              To the extent that Trust Senders processes Personal Information under this Agreement
              subject to Applicable Data Protection Laws, the parties shall comply with their
              respective obligations as set out in Trust Senders' Data Processing Addendum, which is
              incorporated into this Agreement by reference.
            </p>

            {/* 5 */}
            <h2 className="privacy-h2">5. Consideration</h2>
            <p className="privacy-body"><strong>5.1 Fees.</strong> In consideration for the Services, Customer will pay Trust Senders the fees set forth in Customer's account, the Dashboard, or the applicable Order Form ("Fees"). Trust Senders reserves the right to withhold performance and suspend or discontinue Services until all Fees due are paid in full.</p>
            <p className="privacy-body"><strong>5.2 Billing.</strong> Trust Senders will charge Customer Fees in advance for each billing period. All Fees are due and payable in US Dollars and are non-refundable. If Customer pays by credit card: (a) Customer irrevocably authorizes Trust Senders to charge the provided payment method for all amounts due; (b) amounts will be automatically charged; (c) if a charge is declined, Trust Senders will attempt to obtain a new payment method; and (d) if a card expires, Customer authorizes Trust Senders to submit the charge with a later expiration date. Failure to resolve payment issues may result in termination for non-payment. Billing disputes must be submitted to support@trustsenders.com within fourteen (14) days of the billing statement or invoice; disputes not raised within that period are waived. Late payments will accrue interest at 1.5% per month or the maximum rate permitted by law, whichever is lower. Trust Senders may recover all reasonable collection costs, including attorneys' fees. Invoiced amounts are due within thirty (30) days of invoice date.</p>
            <p className="privacy-body"><strong>5.3 Third-Party Payment Processor.</strong> Trust Senders may use Stripe, Inc. ("Stripe") as its third-party payment processor. By using the Services, Customer agrees to be bound by Stripe's Privacy Policy (https://www.stripe.com/privacy) and Stripe's Seller Terms (https://stripe.com/ssa), and authorizes Trust Senders and Stripe to share payment information to the minimum extent necessary to complete transactions.</p>
            <p className="privacy-body"><strong>5.4 Expenses.</strong> Customer will reimburse Trust Senders for pre-approved out-of-pocket expenses incurred in connection with the provision of Services, provided Customer has approved such expenses in writing.</p>

            {/* 6 */}
            <h2 className="privacy-h2">6. Warranties; Disclaimers; Limitations on Liability</h2>
            <p className="privacy-body"><strong>6.1 General Representations.</strong> Each party represents and warrants that: (a) it is duly organized and in good standing under the laws of its jurisdiction; (b) execution and performance of this Agreement will not conflict with any applicable law; and (c) this Agreement constitutes a valid and binding obligation enforceable against such party.</p>
            <p className="privacy-body"><strong>6.2 Customer Content.</strong> Customer represents and warrants that it has all necessary rights, consents, and permissions to collect, share, and use all Customer Content as contemplated by this Agreement, including compliance with applicable anti-spam laws, data protection laws, and email marketing regulations. Customer is fully responsible for any Customer Content submitted to the Services.</p>
            <p className="privacy-body"><strong>6.3 Compliance with Laws.</strong> Customer represents and warrants that its use of the Services and all Customer Content complies at all times with applicable laws, rules, and regulations, including anti-spam legislation (CAN-SPAM, CASL, GDPR), data protection laws, and any applicable email marketing regulations.</p>
            <p className="privacy-body terms-caps"><strong>6.4 Warranty Disclaimers.</strong> EXCEPT AS EXPRESSLY PROVIDED IN THIS AGREEMENT, NEITHER PARTY MAKES ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. TRUST SENDERS DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT ANY PARTICULAR DELIVERABILITY OUTCOME WILL BE ACHIEVED.</p>
            <p className="privacy-body terms-caps"><strong>6.5 Disclaimer of Indirect Damages.</strong> IN NO EVENT WILL EITHER PARTY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, BUSINESS INTERRUPTION, OR LOSS OF BUSINESS OPPORTUNITY, EVEN IF FORESEEABLE OR IF SUCH PARTY HAS BEEN ADVISED OF THE POSSIBILITY THEREOF.</p>
            <p className="privacy-body terms-caps"><strong>6.6 Limitation of Liability.</strong> TRUST SENDERS' MAXIMUM AGGREGATE LIABILITY UNDER THIS AGREEMENT WILL NOT EXCEED THE TOTAL FEES RECEIVED BY TRUST SENDERS IN THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING THE DATE ON WHICH THE LIABILITY AROSE.</p>
            <p className="privacy-body"><strong>6.7 Exceptions.</strong> In jurisdictions that do not allow the exclusion or limitation of certain liability, Trust Senders' liability will be limited to the maximum extent permitted by law. The provisions of this Section 6 apply regardless of the form of the claim or cause of action.</p>

            {/* 7 */}
            <h2 className="privacy-h2">7. Indemnification</h2>
            <p className="privacy-body"><strong>7.1 Trust Senders Indemnity.</strong> Trust Senders will indemnify, defend, and hold harmless Customer and its directors, officers, and employees from and against any losses, damages, liability, costs, and reasonable attorneys' fees ("Losses") arising from any third-party claim alleging that the Services infringe any U.S. patent, copyright, trademark, or trade secret.</p>
            <p className="privacy-body"><strong>7.2 Exclusions.</strong> Section 7.1 does not apply if the claim arises from: (a) Customer's or an Authorized User's breach of this Agreement or unauthorized modification of the Services; (b) use of the Services in combination with software, hardware, or technology not provided by Trust Senders where the claim would not have arisen but for such combination; or (c) Customer Content (collectively, "Customer Indemnity Responsibility").</p>
            <p className="privacy-body"><strong>7.3 Customer Indemnity.</strong> Customer will indemnify, defend, and hold harmless Trust Senders and its directors, officers, and employees from and against any Losses arising from: (a) any breach of Customer's representations or warranties under Section 6; or (b) any Customer Indemnity Responsibility.</p>
            <p className="privacy-body"><strong>7.4 Indemnification Process.</strong> Indemnification obligations are conditioned on the indemnified party: (a) providing prompt written notice of the claim; (b) reasonably cooperating in the defense; and (c) granting the indemnifying party sole control of the defense and settlement negotiations, provided that the indemnifying party may not settle any claim in a manner that admits guilt or prejudices the indemnified party without prior written consent.</p>
            <p className="privacy-body"><strong>7.5 Infringement Remedy.</strong> If the Services are or are likely to become the subject of an infringement claim, Trust Senders may, at its expense: (a) procure for Customer the right to continue using the Services; (b) modify the infringing element to make it non-infringing while remaining functionally equivalent; or (c) terminate the Agreement and refund any pre-paid unused Fees.</p>
            <p className="privacy-body"><strong>7.6</strong> This Section 7 states Trust Senders' entire liability and Customer's exclusive remedies with respect to any claim that the Services infringe a third party's intellectual property rights.</p>

            {/* 8 */}
            <h2 className="privacy-h2">8. Term and Termination</h2>
            <p className="privacy-body"><strong>8.1 Term.</strong> This Agreement commences on the Effective Date and continues for an initial term of twelve (12) months unless otherwise specified in the Order Form ("Initial Term"). Unless otherwise specified, the Agreement automatically renews for successive one (1) year terms ("Renewal Terms") unless either party provides written notice of non-renewal at least thirty (30) days prior to the expiration of the then-current term.</p>
            <p className="privacy-body"><strong>8.2 Termination for Cause.</strong> Either party may terminate this Agreement or any Order Form upon written notice if the other party materially breaches any provision (including failure to pay Fees) and does not cure such breach within thirty (30) days after written notice.</p>
            <p className="privacy-body"><strong>8.3 Suspension.</strong> Trust Senders may immediately suspend Customer's access to the Services upon notice if: (a) there is a threat to the security or integrity of the Services; (b) any amount due is not received within fifteen (15) days after the due date; or (c) Customer breaches or violates any applicable laws, rules, or regulations, including anti-spam laws.</p>
            <p className="privacy-body"><strong>8.4 Return of Customer Content.</strong> Within thirty (30) days of termination, Trust Senders will, upon Customer's written request, return all Customer Content in a mutually agreed format. Thereafter, Trust Senders reserves the right to permanently delete Customer Content.</p>
            <p className="privacy-body"><strong>8.5 Trial Period.</strong> (a) If an Order Form designates Services on a "Trial" basis, this Section applies. The Trial Period commences on the Effective Date and continues for the period specified in the Order Form. Upon conclusion, the Agreement may renew into the Initial Term upon mutual agreement. (b) Trial Period fees are invoiced at the start of the Trial Period and due within thirty (30) days of invoice. (c) Either party may terminate during the Trial Period at any time upon notice. (d) Services during a Trial Period are provided "as is" and "as available" without warranty, support, or indemnity obligations.</p>
            <p className="privacy-body"><strong>8.6 Effects of Termination.</strong> Upon termination or expiration: (a) Customer shall immediately cease use of the Services; (b) all outstanding Fees become immediately due and payable; and (c) all access rights terminate immediately. Sections 1, 2, 3.6, 3.7, 5, 6, 7, 8.4, 8.5(d), and 9 survive any expiration or termination of this Agreement.</p>

            {/* 9 */}
            <h2 className="privacy-h2">9. General</h2>
            <p className="privacy-body"><strong>9.1 Assignment.</strong> Customer may not assign this Agreement without Trust Senders' prior written consent. Any attempted assignment in violation of this section is null and void.</p>
            <p className="privacy-body"><strong>9.2 Publicity.</strong> During and after the Term, Trust Senders may identify Customer as a Trust Senders customer in marketing materials, on its website, and in social media, unless Customer requests otherwise in writing.</p>
            <p className="privacy-body"><strong>9.3 Notices.</strong> Customer is responsible for maintaining a valid email address on file with Trust Senders. Notices sent to Customer's last known email address constitute effective notice even if undeliverable. Customer may send notices to Trust Senders at: legal@trustsenders.com. Notices are deemed received on the first business day following successful transmission.</p>
            <p className="privacy-body"><strong>9.4 Governing Law; Disputes.</strong> This Agreement will be governed by the laws of the State of Delaware without reference to its conflicts of law principles. The United Nations Convention for the International Sale of Goods will not apply to this Agreement. Any dispute, controversy, or claim arising out of or relating to this Agreement will be resolved exclusively in the state or federal courts located in Delaware, and both parties submit to the jurisdiction and venue of such courts.</p>
            <p className="privacy-body"><strong>9.5 Remedies.</strong> Customer acknowledges that any actual or threatened breach of Section 3.7 will cause immediate, irreparable harm to Trust Senders for which monetary damages would be inadequate, and that injunctive relief is an appropriate remedy. The prevailing party in any legal action to enforce this Agreement will be entitled to recover reasonable attorneys' fees, court costs, and other collection expenses.</p>
            <p className="privacy-body"><strong>9.6 Waivers.</strong> All waivers must be in writing. A waiver or failure to enforce any provision on one occasion is not a waiver of that provision on any other occasion.</p>
            <p className="privacy-body"><strong>9.7 Severability.</strong> If any provision of this Agreement is unenforceable, it will be modified to accomplish its objectives to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.</p>
            <p className="privacy-body"><strong>9.8 No Third-Party Beneficiaries.</strong> This Agreement is solely for the benefit of the parties, their successors, and permitted assigns. No other person or entity has any right to enforce any provision hereof.</p>
            <p className="privacy-body"><strong>9.9 Construction.</strong> This Agreement is intended to be construed fairly and in plain English, without constructive presumptions against the drafting party. Headings are for convenience only. The word "including" means "including but not limited to."</p>
            <p className="privacy-body"><strong>9.10 Force Majeure.</strong> Delays in performance (other than payment obligations) caused by natural disasters, war, acts of terror, or other events beyond a party's reasonable control will not constitute breach. The affected party will notify the other promptly and resume performance as soon as reasonably possible.</p>
            <p className="privacy-body"><strong>9.11 Entire Agreement.</strong> This Agreement constitutes the entire agreement between the parties regarding its subject matter and supersedes all prior agreements, understandings, and communications. This Agreement may only be amended by a written document signed by both parties.</p>
          </div>
        </div>
      </main>
    </>
  )
}
