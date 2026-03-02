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
    </LegalPageLayout>
  )
}
