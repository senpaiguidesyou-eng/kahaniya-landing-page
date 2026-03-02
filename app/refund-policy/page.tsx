import { LegalPageLayout } from "@/components/legal-page-layout"

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund Policy"
      subtitle="Kahaania is a service-based platform. Please review this policy before making a payment."
    >
      <p className="text-zinc-500">Last updated: March 2, 2026</p>

      <p>
        Kahaania provides personalized, service-based digital offerings. Due to the nature of these services,{" "}
        <span className="text-white font-semibold">no refunds are entertained</span> once a payment has been made.
      </p>

      <p>
        By purchasing any service from the Platform, you acknowledge and agree to this no-refund policy. Users are
        requested to review service details, scope, timelines, and pricing before completing payment.
      </p>

      <p>
        If you experience a payment issue such as duplicate charge, failed transaction with debit, or technical
        billing error, contact us at{" "}
        <a className="text-[#f1c60d] hover:underline" href="mailto:getmykahaania@gmail.com">
          getmykahaania@gmail.com
        </a>{" "}
        with transaction details. Verified billing errors will be reviewed and resolved in accordance with applicable
        laws and payment partner policies.
      </p>
    </LegalPageLayout>
  )
}
