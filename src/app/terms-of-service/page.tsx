import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="animate-in fade-in duration-1000">
      <section className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="font-label-caps text-secondary text-[11px] font-bold tracking-[0.3em] uppercase mb-6 block">Legal</span>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-primary mb-6 font-semibold tracking-tight">Terms of Service</h1>
          <p className="text-on-surface-variant text-sm tracking-wider uppercase font-label-caps">Last Updated: May 2026</p>
        </div>

        <div className="prose prose-neutral prose-lg max-w-none prose-headings:font-display-lg prose-headings:text-primary prose-headings:font-medium prose-p:text-on-surface-variant prose-p:font-light prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:text-secondary prose-strong:text-on-surface prose-strong:font-medium">
          <p>
            Welcome to SriYogalaya. By accessing our website and booking our services, you agree to be bound by the following Terms of Service. Please read them carefully.
          </p>

          <h2>1. Services</h2>
          <p>
            SriYogalaya provides online, private 1-on-1 and group yoga sessions via video conferencing. The specific details, duration, and pricing of these sessions are outlined on our investment plans page and during the booking process.
          </p>

          <h2>2. Medical Disclaimer</h2>
          <p>
            Yoga involves physical exertion and movement. It is your responsibility to consult with a physician prior to participating in our sessions. By booking a session, you represent and warrant that you are physically fit and have no medical condition that would prevent your full participation.
          </p>
          <p>
            <strong>SriYogalaya and its instructors are not medical professionals and cannot provide medical advice or diagnoses.</strong> If you experience any pain or discomfort during a session, you must stop immediately and inform the instructor.
          </p>

          <h2>3. Bookings, Cancellations, and Refunds</h2>
          <p>
            All sessions must be booked and paid for in advance. We understand that life happens, but to respect the instructor's time, we require at least 24 hours notice for any cancellations or rescheduling.
          </p>
          <ul>
            <li>Cancellations made more than 24 hours in advance will receive a full refund or can be rescheduled.</li>
            <li>Cancellations made less than 24 hours in advance will not be refunded.</li>
            <li>"No-shows" will be charged the full session rate.</li>
          </ul>

          <h2>4. Technical Requirements</h2>
          <p>
            As our sessions are conducted online, you are responsible for ensuring you have a stable internet connection, a functional webcam, and audio capabilities. We are not responsible for sessions interrupted or degraded due to poor internet connectivity on your end.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on the SriYogalaya website, including text, graphics, logos, images, and session structures, is the property of SriYogalaya and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>

          <h2>6. Code of Conduct</h2>
          <p>
            We strive to create a safe, respectful, and inclusive environment. We reserve the right to refuse service or terminate a session immediately if a client behaves inappropriately, aggressively, or disrespectfully toward the instructor.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, SriYogalaya and its instructors shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your participation in our sessions or use of our website.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of our operating jurisdiction.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            Questions about the Terms of Service should be sent to us via our <Link href="/connect-with-us">Contact Page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
