import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SriYogalaya",
  description: "Privacy policy and data protection guidelines for SriYogalaya users.",
  alternates: { canonical: "https://sriyogalaya.com/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="animate-in fade-in duration-1000">
      <section className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="font-label-caps text-secondary text-[11px] font-bold tracking-[0.3em] uppercase mb-6 block">Legal</span>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-primary mb-6 font-semibold tracking-tight">Privacy Policy</h1>
          <p className="text-on-surface-variant text-sm tracking-wider uppercase font-label-caps">Last Updated: May 2026</p>
        </div>

        <div className="prose prose-neutral prose-lg max-w-none prose-headings:font-display-lg prose-headings:text-primary prose-headings:font-medium prose-p:text-on-surface-variant prose-p:font-light prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:text-secondary prose-strong:text-on-surface prose-strong:font-medium">
          <p>
            At SriYogalaya, we take your privacy and digital well-being seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from sriyogalaya.com.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
          </p>
          <p>
            Additionally, when you book a session or attempt to make a booking through the Site, we collect certain information from you, including your name, billing address, payment information, email address, and phone number. We refer to this information as &quot;Booking Information.&quot;
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the Booking Information that we collect generally to fulfill any sessions booked through the Site (including processing your payment information, arranging for scheduling, and providing you with invoices and/or booking confirmations).
          </p>
          <p>
            Additionally, we use this Booking Information to:
          </p>
          <ul>
            <li>Communicate with you regarding your sessions;</li>
            <li>Screen our bookings for potential risk or fraud; and</li>
            <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
          </ul>

          <h2>3. Sharing Your Personal Information</h2>
          <p>
            We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use scheduling platforms and payment processors to power our online studio. We also use Google Analytics to help us understand how our customers use the Site.
          </p>
          <p>
            Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            When you place an order or book a session through the Site, we will maintain your Booking Information for our records unless and until you ask us to delete this information.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
          </p>

          <h2>6. Changes</h2>
          <p>
            We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail or via our <Link href="/connect-with-us">Contact Page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
