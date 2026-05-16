import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
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
                  opens: "06:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "07:00",
                  closes: "12:00",
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

        <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-2xl border-b border-on-surface/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-500">
          <nav
            aria-label="Main navigation"
            className="max-w-container-max mx-auto h-24 px-margin-mobile md:px-margin-desktop flex items-center justify-between gap-8 md:gap-12"
          >
            <Link
              href="/"
              className="shrink-0 font-display-lg text-3xl md:text-4xl font-bold tracking-tight text-primary dark:text-primary-fixed-dim leading-none hover:opacity-80 transition-opacity"
            >
              SriYogalaya
            </Link>

            <div className="hidden md:flex flex-1 items-center justify-end gap-8 lg:gap-12 overflow-x-auto whitespace-nowrap pr-4">
              <Link
                className="group relative shrink-0 font-label-caps text-[11px] lg:text-[13px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors duration-300 py-2"
                href="/investment-plans"
              >
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link
                className="group relative shrink-0 font-label-caps text-[11px] lg:text-[13px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors duration-300 py-2"
                href="/success-stories"
              >
                Stories
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link
                className="group relative shrink-0 font-label-caps text-[11px] lg:text-[13px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors duration-300 py-2"
                href="/the-wellness-journal"
              >
                Journal
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link
                className="group relative shrink-0 font-label-caps text-[11px] lg:text-[13px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors duration-300 py-2"
                href="/about"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link
                className="group relative shrink-0 font-label-caps text-[11px] lg:text-[13px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors duration-300 py-2"
                href="/connect-with-us"
              >
                Connect
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </div>

            <div className="flex items-center">
              {/* Mobile Menu Input Checkbox */}
              <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

              {/* Mobile Menu Toggle Button */}
              <label
                htmlFor="mobile-menu-toggle"
                className="md:hidden cursor-pointer select-none inline-flex items-center justify-center w-12 h-12 rounded-full border border-on-surface/10 bg-surface/80 backdrop-blur hover:bg-surface transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                  menu
                </span>
              </label>

              {/* Mobile Menu Overlay */}
              <label
                htmlFor="mobile-menu-toggle"
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-all duration-500 md:hidden"
              ></label>

              {/* Mobile Menu Sidebar */}
              <div className="fixed top-0 right-0 h-[100dvh] w-full max-w-[320px] bg-surface z-[70] transform translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl flex flex-col md:hidden">
                <div className="flex justify-between items-center px-8 py-8 border-b border-on-surface/5">
                  <span className="font-display-lg text-2xl font-bold text-primary">Explore</span>
                  <label htmlFor="mobile-menu-toggle" className="cursor-pointer w-10 h-10 rounded-full bg-on-surface/5 hover:bg-on-surface/10 transition-colors inline-flex items-center justify-center active:scale-90">
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </label>
                </div>
                
                <div className="flex flex-col px-8 py-10 gap-1 overflow-y-auto flex-1">
                  <Link className="group flex items-center justify-between py-5 border-b border-on-surface/5 font-label-caps tracking-[0.2em] text-on-surface hover:text-primary transition-colors uppercase text-xs font-bold" href="/investment-plans">
                    Pricing
                    <span className="material-symbols-outlined text-[18px] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">chevron_right</span>
                  </Link>
                  <Link className="group flex items-center justify-between py-5 border-b border-on-surface/5 font-label-caps tracking-[0.2em] text-on-surface hover:text-primary transition-colors uppercase text-xs font-bold" href="/success-stories">
                    Stories
                    <span className="material-symbols-outlined text-[18px] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">chevron_right</span>
                  </Link>
                  <Link className="group flex items-center justify-between py-5 border-b border-on-surface/5 font-label-caps tracking-[0.2em] text-on-surface hover:text-primary transition-colors uppercase text-xs font-bold" href="/the-wellness-journal">
                    Journal
                    <span className="material-symbols-outlined text-[18px] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">chevron_right</span>
                  </Link>
                  <Link className="group flex items-center justify-between py-5 border-b border-on-surface/5 font-label-caps tracking-[0.2em] text-on-surface hover:text-primary transition-colors uppercase text-xs font-bold" href="/about">
                    About
                    <span className="material-symbols-outlined text-[18px] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">chevron_right</span>
                  </Link>
                </div>

                <div className="p-8 border-t border-on-surface/5 bg-on-surface/[0.02]">
                  <Link 
                    className="flex items-center justify-center gap-3 bg-primary text-on-primary w-full py-5 rounded-full font-label-caps text-[11px] font-bold tracking-[0.2em] uppercase hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95" 
                    href="/connect-with-us"
                  >
                    Start Practice
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  </Link>
                  
                  <div className="mt-8 flex justify-center gap-6 text-on-surface-variant/40">
                    <a href="https://instagram.com/sriyogalaya" target="_blank" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">camera_enhance</span></a>
                    <a href="mailto:contact@sriyogalaya.com" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">mail</span></a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div id="content" className="flex-1 pt-20">
          {children}
        </div>

        <footer className="bg-[#111] text-white/80 mt-12 md:mt-20 relative">
          {/* Top accent gradient line */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-14 pb-8 md:pt-16 md:pb-10">
            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              
              {/* Brand */}
              <div className="sm:col-span-2 lg:col-span-1">
                <Link href="/" className="inline-block font-display-lg text-xl font-bold text-white tracking-tight hover:text-primary transition-colors">
                  SriYogalaya
                </Link>
                <p className="mt-3 text-white/35 text-[13px] max-w-[220px] leading-relaxed">
                  Personalized yoga &amp; wellness experiences, online worldwide.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/25 uppercase mb-4">Navigate</h4>
                <nav className="flex flex-col gap-2.5">
                  <Link className="text-white/50 hover:text-white text-[13px] transition-colors w-fit" href="/investment-plans">Pricing</Link>
                  <Link className="text-white/50 hover:text-white text-[13px] transition-colors w-fit" href="/success-stories">Success Stories</Link>
                  <Link className="text-white/50 hover:text-white text-[13px] transition-colors w-fit" href="/the-wellness-journal">Wellness Journal</Link>
                  <Link className="text-white/50 hover:text-white text-[13px] transition-colors w-fit" href="/about">About Us</Link>
                </nav>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/25 uppercase mb-4">Reach Out</h4>
                <div className="flex flex-col gap-3">
                  <a href="https://wa.me/919491803261" className="flex items-center gap-2.5 text-white/50 hover:text-white text-[13px] transition-colors group">
                    <img src="/whatsapp.png" alt="WhatsApp" className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    +91 94918 03261
                  </a>
                  <a href="https://instagram.com/sriyogalaya" className="flex items-center gap-2.5 text-white/50 hover:text-white text-[13px] transition-colors group">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-pink-400 group-hover:scale-110 transition-transform">
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    @sriyogalaya
                  </a>
                  <Link href="/connect-with-us" className="flex items-center gap-2.5 text-white/50 hover:text-white text-[13px] transition-colors group">
                    <span className="material-symbols-outlined text-[16px] text-primary group-hover:scale-110 transition-transform">mail</span>
                    Contact Form
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/25 uppercase mb-4">Start Today</h4>
                <p className="text-white/35 text-[13px] leading-relaxed mb-5">
                  Your first step toward a calmer, stronger you.
                </p>
                <Link
                  href="/connect-with-us"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white px-5 py-2.5 text-xs font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300"
                >
                  Connect With Us
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <span className="text-white/20 text-[11px] tracking-wider">
                © {new Date().getFullYear()} SriYogalaya. All rights reserved.
              </span>
              <div className="flex gap-5">
                <Link className="text-white/20 hover:text-white/50 transition-colors text-[11px]" href="/privacy-policy">Privacy Policy</Link>
                <Link className="text-white/20 hover:text-white/50 transition-colors text-[11px]" href="/terms-of-service">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
