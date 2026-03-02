import { LegalPageLayout } from "@/components/legal-page-layout"

const pricingRows = [
  {
    service: "Kahaania Memory Curation",
    price: "Custom quote",
    details: "Pricing depends on content volume, editing depth, and delivery scope.",
  },
  {
    service: "Add-on Services",
    price: "As applicable",
    details: "Additional requests are charged separately after confirmation.",
  },
  {
    service: "Taxes",
    price: "Extra",
    details: "Applicable GST or statutory taxes are charged as per law.",
  },
]

export default function PricingPage() {
  return (
    <LegalPageLayout
      title="Pricing"
      subtitle="Kahaania provides personalized, high-touch services. Pricing is shared transparently before payment."
    >
      <p className="text-zinc-500">Last updated: March 2, 2026</p>

      <p>
        Kahaania services are custom and quote-based. Final charges are communicated and approved by you before any
        payment is collected.
      </p>

      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <table className="w-full text-left">
          <thead className="bg-zinc-900/70 text-zinc-100">
            <tr>
              <th className="px-4 py-3 font-medium">Service</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Details</th>
            </tr>
          </thead>
          <tbody>
            {pricingRows.map((row) => (
              <tr key={row.service} className="border-t border-zinc-800">
                <td className="px-4 py-3 text-zinc-200">{row.service}</td>
                <td className="px-4 py-3 text-white font-medium">{row.price}</td>
                <td className="px-4 py-3 text-zinc-400">{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Payment is collected only after scope and pricing are confirmed. If you need a detailed quote, contact us at{" "}
        <a className="text-[#f1c60d] hover:underline" href="mailto:getmykahaania@gmail.com">
          getmykahaania@gmail.com
        </a>
        .
      </p>
    </LegalPageLayout>
  )
}
