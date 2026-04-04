import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Terms of Service | Fairway Logistics LLC",
  description:
    "Read the terms and conditions governing the use of Fairway Logistics LLC's website and freight services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing and using the Fairway Logistics LLC website and services, you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services.",
    ],
  },
  {
    title: "Services",
    content: [
      "Fairway Logistics LLC provides asset-based trucking, freight brokerage, drayage, heavy haul, warehousing, and import/export logistics services. All freight services are subject to separate service agreements, rate confirmations, and applicable transportation regulations.",
      "Quotes provided through our website or by our team are estimates and may be subject to change based on actual shipment details, accessorial charges, market conditions, and other factors.",
    ],
  },
  {
    title: "User Responsibilities",
    content: [
      "You agree to provide accurate and complete information when using our services, requesting quotes, or submitting forms. You are responsible for ensuring that any shipment information, including weight, dimensions, commodity description, and hazmat classifications, is truthful and accurate.",
      "You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair the website or interfere with any other party's use.",
    ],
  },
  {
    title: "Freight Liability and Insurance",
    content: [
      "Fairway Logistics LLC maintains comprehensive cargo insurance and liability coverage as required by the FMCSA and DOT. Specific liability limits and coverage details are outlined in individual service agreements and rate confirmations.",
      "Claims for lost or damaged freight must be filed in writing within the timeframe specified in the applicable service agreement and in accordance with federal regulations.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content on this website, including text, graphics, logos, images, and software, is the property of Fairway Logistics LLC and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Fairway Logistics LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or the inability to use our services. Our total liability for any claim shall not exceed the amount paid for the specific service giving rise to the claim.",
      "We do not guarantee uninterrupted or error-free website access. The website and its content are provided on an 'as is' and 'as available' basis.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms of Service are governed by and construed in accordance with the laws of the State of Alabama, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved in the courts located in Mobile County, Alabama.",
    ],
  },
  {
    title: "Changes to Terms",
    content: [
      "Fairway Logistics LLC reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after changes are posted constitutes your acceptance of the modified terms.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For questions about these Terms of Service, please contact us at info@fwllogistics.com or call (251) 725-1929. Our office is located at 456 Dauphin Street, Mobile, AL 36602.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our website or engaging our logistics services."
        breadcrumbs={[{ label: "Terms of Service" }]}
      />

      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-navy-400 text-sm mb-12">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={section.title}>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
                  {i + 1}. {section.title}
                </h2>
                {section.content.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-navy-300 leading-relaxed mb-3"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions?"
        description="If you have any questions about our terms or need clarification, our team is here to help."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
