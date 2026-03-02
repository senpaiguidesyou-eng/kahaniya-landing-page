import { LegalPageLayout } from "@/components/legal-page-layout"

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="This policy explains how Kahaania collects, uses, stores, and protects your personal information."
    >
      <p className="text-zinc-500">Last updated: March 2, 2026</p>

      <p>
        This Privacy Policy applies to the domain{" "}
        <a className="text-[#f1c60d] hover:underline" href="https://www.kahaania.com/">
          https://www.kahaania.com/
        </a>{" "}
        and related services offered by NAYANA KAMATH ("Platform Owner", "we", "our", or "us").
      </p>

      <h2 className="text-xl text-white font-serif pt-4">Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Account details such as name, email, phone number, and other contact information you provide.</li>
        <li>Content you upload or share, including photos, videos, text, and other media.</li>
        <li>Transaction and payment-related metadata required to process orders and provide services.</li>
        <li>Technical and usage data such as device details, IP address, browser information, and log data.</li>
      </ul>

      <h2 className="text-xl text-white font-serif pt-4">How We Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>To provide, operate, and improve our services.</li>
        <li>To process your requests, subscriptions, or purchases.</li>
        <li>To communicate service updates, support responses, and important notices.</li>
        <li>To comply with applicable legal and regulatory obligations.</li>
        <li>To prevent fraud, misuse, or unauthorized access to the Platform.</li>
      </ul>

      <h2 className="text-xl text-white font-serif pt-4">Data Sharing</h2>
      <p>
        We do not sell your personal data. We may share your data only with trusted service providers or partners
        where necessary for payment processing, hosting, analytics, technical operations, legal compliance, or dispute
        resolution, and only to the extent required for those purposes.
      </p>

      <h2 className="text-xl text-white font-serif pt-4">Data Storage and Security</h2>
      <p>
        We use commercially reasonable technical and organizational safeguards to protect your information against
        unauthorized access, misuse, and disclosure. While we strive to protect your data, no digital transmission or
        storage system can be guaranteed as fully secure.
      </p>

      <h2 className="text-xl text-white font-serif pt-4">Data Retention</h2>
      <p>
        We retain personal data only as long as necessary for service delivery, legal obligations, and legitimate
        business purposes. Data may be deleted or anonymized when no longer required, subject to legal retention
        requirements.
      </p>

      <h2 className="text-xl text-white font-serif pt-4">Your Rights</h2>
      <p>
        Subject to applicable law, you may request access, correction, or deletion of your personal information by
        contacting us through the contact details available on the website.
      </p>

      <h2 className="text-xl text-white font-serif pt-4">Third-Party Links</h2>
      <p>
        The Platform may contain links to third-party websites. We are not responsible for their privacy practices or
        content. You should review their policies before sharing information.
      </p>

      <h2 className="text-xl text-white font-serif pt-4">Policy Updates</h2>
      <p>
        We may update this Privacy Policy from time to time. Revised versions will be posted on this page with the
        updated effective date.
      </p>

      <h2 className="text-xl text-white font-serif pt-4">Contact</h2>
      <p>
        For questions or concerns regarding this Privacy Policy, contact us at{" "}
        <a className="text-[#f1c60d] hover:underline" href="mailto:getmykahaania@gmail.com">
          getmykahaania@gmail.com
        </a>
        .
      </p>
    </LegalPageLayout>
  )
}
