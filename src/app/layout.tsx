import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sriyogalaya.com"),
  title: {
    default: "SriYogalaya — Online Yoga Classes | 1-on-1 & Group Sessions with Certified Instructor Sri Devi",
    template: "%s | SriYogalaya",
  },
  description:
    "Join SriYogalaya for personalized 1-on-1 online yoga sessions & live group classes via Zoom. Certified instructor Sri Devi offers Hatha, Ashtanga, Vinyasa & Prenatal yoga tailored to your body, goals & breath. Start your transformation today.",
  keywords: [
    "online yoga classes",
    "1-on-1 yoga sessions",
    "personalized yoga",
    "yoga classes via Zoom",
    "group yoga classes online",
    "Hatha yoga online",
    "Ashtanga yoga online",
    "Vinyasa yoga",
    "Prenatal yoga online",
    "yoga for beginners",
    "yoga for stress relief",
    "yoga for weight loss",
    "certified yoga instructor",
    "Sri Devi yoga",
    "SriYogalaya",
    "online yoga India",
    "yoga classes near me",
    "best online yoga",
    "live yoga classes",
    "yoga for mental health",
    "yoga for flexibility",
    "midlife fitness yoga",
    "yoga for women over 40",
    "contemporary yoga",
    "private yoga sessions",
  ],
  authors: [{ name: "Sri Devi", url: "https://sriyogalaya.com/about" }],
  creator: "SriYogalaya",
  publisher: "SriYogalaya",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://sriyogalaya.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sriyogalaya.com",
    siteName: "SriYogalaya",
    title: "SriYogalaya — Online Yoga Classes | Personalized 1-on-1 & Group Sessions",
    description:
      "Transform your mind & body with personalized yoga. Certified instructor Sri Devi offers live 1-on-1 and group yoga classes via Zoom — Hatha, Ashtanga, Vinyasa & Prenatal yoga.",
    images: [
      {
        url: "/images/IMG_4972.jpeg",
        width: 1200,
        height: 630,
        alt: "SriYogalaya — Online Yoga Classes with Sri Devi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SriYogalaya — Online Yoga Classes | 1-on-1 & Group Sessions",
    description:
      "Personalized 1-on-1 yoga & live group classes via Zoom with certified instructor Sri Devi. Hatha, Ashtanga, Vinyasa & more.",
    images: ["/images/IMG_4972.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Health & Fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD: Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "@id": "https://sriyogalaya.com/#organization",
              name: "SriYogalaya",
              alternateName: "Sri Yogalaya",
              url: "https://sriyogalaya.com",
              logo: "https://sriyogalaya.com/images/IMG_4972.jpeg",
              image: "https://sriyogalaya.com/images/IMG_4972.jpeg",
              description:
                "SriYogalaya offers personalized 1-on-1 online yoga sessions and live group yoga classes via Zoom with certified international instructor Sri Devi. Specializing in Hatha, Ashtanga, Vinyasa, Prenatal & Contemporary yoga for all levels.",
              telephone: "+919491803261",
              email: "connect@sriyogalaya.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "17.385",
                longitude: "78.4867",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "0",
                  longitude: "0",
                },
                geoRadius: "40075000",
              },
              sameAs: [
                "https://wa.me/919491803261",
              ],
              founder: {
                "@type": "Person",
                name: "Sri Devi",
                jobTitle: "International Yoga & Lifestyle Specialist",
                description: "Certified international yoga and fitness instructor specializing in midlife transformation, Prenatal, Ashtanga, Hatha & Contemporary Yoga. Started at 42, thriving at 53.",
                url: "https://sriyogalaya.com/about",
              },
              priceRange: "₹700 - ₹5,000",
              currenciesAccepted: "INR",
              paymentAccepted: "UPI, Bank Transfer, Cash",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "06:30",
                  closes: "11:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "16:00",
                  closes: "19:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
                bestRating: "5",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Yoga Classes & Sessions",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "1-on-1 Online Yoga Session",
                      description: "Personalized private yoga session via Zoom tailored to your anatomy, goals, and breath. 45-60 minutes.",
                    },
                    price: "700",
                    priceCurrency: "INR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Group Yoga Classes (Monthly)",
                      description: "Live group yoga classes via Zoom, 20 classes per month, Monday to Friday. Small groups for real connection.",
                    },
                    price: "3000",
                    priceCurrency: "INR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Monthly 1-on-1 Yoga Package",
                      description: "20 personalized private yoga sessions per month via Zoom with Sri Devi.",
                    },
                    price: "5000",
                    priceCurrency: "INR",
                  },
                ],
              },
            }),
          }}
        />
        {/* JSON-LD: WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SriYogalaya",
              url: "https://sriyogalaya.com",
              description: "Premium online yoga classes — personalized 1-on-1 sessions and live group classes with certified instructor Sri Devi.",
              publisher: {
                "@type": "Organization",
                name: "SriYogalaya",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://sriyogalaya.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* JSON-LD: FAQPage for AEO — common yoga questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What are the benefits of online yoga classes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Online yoga classes offer personalized attention from certified instructors, flexible scheduling from the comfort of your home, real-time postural corrections via HD video, and cost-effective access to expert guidance. At SriYogalaya, Sri Devi provides 1-on-1 sessions tailored to your anatomy, goals, and breath.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much do online yoga classes cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "At SriYogalaya, a single 1-on-1 session costs ₹700 (45-60 minutes). Group yoga classes are ₹3,000/month for 20 classes (Monday-Friday). Monthly 1-on-1 packages with 20 personalized sessions are available for ₹5,000/month.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can beginners join online yoga classes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! SriYogalaya welcomes all levels — from complete beginners to advanced practitioners. Sri Devi designs every session based on your unique biomechanics, fitness level, and goals. The 1-on-1 format ensures you receive personalized attention and safe guidance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of yoga does SriYogalaya offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SriYogalaya offers Hatha yoga, Ashtanga yoga, Vinyasa Flow, Prenatal yoga, Contemporary yoga, and Restorative Yin yoga. All classes are conducted live via Zoom by certified international instructor Sri Devi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is yoga good for stress relief and mental health?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, yoga is scientifically proven to reduce cortisol levels, improve vagal tone, and enhance mental clarity. SriYogalaya's approach combines conscious breathing, restorative postures, and mindfulness techniques to help you find peace amidst the chaos of modern life. 98% of our members report significant stress reduction.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} bg-surface text-on-surface font-body-md selection:bg-primary/20 antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-surface focus:text-on-surface focus:px-4 focus:py-2 focus:rounded-full focus:shadow-lg"
        >
          Skip to content
        </a>

        <Header />

        <div id="content" className="flex-1 pt-20">
          {children}
        </div>

        <footer className="bg-[#111] text-white/80 mt-12 md:mt-20 relative">
          {/* Top accent gradient line */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-14 pb-8 md:pt-16 md:pb-10">
            {/* Grid layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 lg:gap-8">
              
              {/* Brand */}
              <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                <Link href="/" className="inline-block font-display-lg text-2xl font-bold text-white tracking-tight hover:text-primary transition-colors">
                  SriYogalaya
                </Link>
                <p className="mt-3 text-white/40 text-[13px] max-w-[240px] leading-relaxed">
                  Personalized yoga &amp; wellness experiences, online worldwide.
                </p>
              </div>

              {/* Navigation */}
              <div className="col-span-1">
                <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-5">Navigate</h4>
                <nav className="flex flex-col gap-3">
                  <Link className="text-white/60 hover:text-white text-[13px] transition-colors w-fit" href="/investment-plans">Pricing</Link>
                  <Link className="text-white/60 hover:text-white text-[13px] transition-colors w-fit" href="/success-stories">Stories</Link>
                  <Link className="text-white/60 hover:text-white text-[13px] transition-colors w-fit" href="/the-wellness-journal">Journal</Link>
                  <Link className="text-white/60 hover:text-white text-[13px] transition-colors w-fit" href="/about">About Us</Link>
                </nav>
              </div>

              {/* Contact */}
              <div className="col-span-1">
                <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-5">Reach Out</h4>
                <div className="flex flex-col gap-4">
                  <a href="https://wa.me/919491803261" className="flex items-center gap-2.5 text-white/60 hover:text-white text-[13px] transition-colors group">
                    <img src="/whatsapp.png" alt="WhatsApp" className="h-4 w-4 group-hover:scale-110 transition-transform grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100" />
                    WhatsApp
                  </a>
                  <a href="https://www.instagram.com/sri.yogini/" className="flex items-center gap-2.5 text-white/60 hover:text-white text-[13px] transition-colors group">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-white/60 group-hover:text-pink-400 group-hover:scale-110 transition-all">
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                  <Link href="/connect-with-us" className="flex items-center gap-2.5 text-white/60 hover:text-white text-[13px] transition-colors group">
                    <span className="material-symbols-outlined text-[16px] text-white/60 group-hover:text-primary group-hover:scale-110 transition-all">mail</span>
                    Email
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left mt-2 lg:mt-0 bg-white/[0.03] lg:bg-transparent p-6 rounded-2xl lg:p-0 border border-white/5 lg:border-none">
                <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-3 lg:mb-4">Start Today</h4>
                <p className="text-white/40 text-[13px] leading-relaxed mb-5 lg:mb-5">
                  Your first step toward a calmer, stronger you.
                </p>
                <Link
                  href="/connect-with-us"
                  className="inline-flex items-center justify-center w-full lg:w-auto gap-2 rounded-full bg-primary/10 border border-primary/20 text-primary px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all duration-300"
                >
                  Connect With Us
                </Link>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col gap-4 items-center sm:flex-row sm:justify-between text-center">
              <span className="text-white/30 text-[11px] tracking-wider">
                © {new Date().getFullYear()} SriYogalaya. All rights reserved.
              </span>
              <div className="flex gap-6">
                <Link className="text-white/30 hover:text-white transition-colors text-[11px]" href="/privacy-policy">Privacy</Link>
                <Link className="text-white/30 hover:text-white transition-colors text-[11px]" href="/terms-of-service">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
