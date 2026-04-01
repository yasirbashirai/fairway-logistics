import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Privacy Policy | Fairway Logistics LLC",
  description:
    "Learn how Fairway Logistics LLC collects, uses, and protects your personal information. Read our full privacy policy.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you provide directly, such as your name, email address, phone number, and company details when you request a quote, fill out a contact form, or sign up for our newsletter.",
      "We may also automatically collect certain information when you visit our website, including your IP address, browser type, device information, pages visited, and referring URL.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to provide, maintain, and improve our logistics services, respond to your inquiries, process freight quotes and service requests, send relevant communications about our services, and comply with legal obligations.",
      "We do not sell your personal information to third parties. We may share information with trusted service providers who assist in operating our website and conducting our business, provided they agree to keep this information confidential.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit, secure storage, and access controls.",
      "While we strive to protect your personal information, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to maintaining industry-standard protections.",
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You may choose to disable cookies through your browser settings, though this may affect website functionality.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.",
      "If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA). Please contact us for more information.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically to stay informed about how we protect your information.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or our data practices, please contact us at info@fairwaylogisticsllc.com or call (251) 725-1929. Our mailing address is 456 Dauphin Street, Mobile, AL 36602.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy outlines how Fairway Logistics LLC collects, uses, and protects your information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
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
        title="Questions About Your Privacy?"
        description="Our team is happy to answer any questions about how we handle your data."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
