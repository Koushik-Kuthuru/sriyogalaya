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
  title: "SriYogalaya.com",
  description: "Tranquil Premium Wellness Sanctuary",
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
                className="md:hidden cursor-pointer select-none inline-flex items-center justify-center rounded-full border border-on-surface/10 bg-surface/80 backdrop-blur px-4 py-3 hover:bg-surface transition-colors"
              >
                <span className="material-symbols-outlined text-on-surface-variant">
                  menu
                </span>
              </label>

              {/* Mobile Menu Overlay */}
              <label
                htmlFor="mobile-menu-toggle"
                className="fixed inset-0 bg-black/50 z-[60] opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300 md:hidden"
              ></label>

              {/* Mobile Menu Sidebar */}
              <div className="fixed top-0 right-0 h-[100dvh] w-80 max-w-[80vw] bg-surface z-[70] transform translate-x-full peer-checked:translate-x-0 transition-transform duration-500 shadow-2xl flex flex-col md:hidden">
                <div className="flex justify-between items-center p-6 border-b border-on-surface/5">
                  <span className="font-display-lg text-2xl font-bold text-primary">Menu</span>
                  <label htmlFor="mobile-menu-toggle" className="cursor-pointer p-2 rounded-full hover:bg-on-surface/5 transition-colors inline-flex items-center justify-center">
                    <span className="material-symbols-outlined">close</span>
                  </label>
                </div>
                <div className="flex flex-col p-6 gap-2 overflow-y-auto">
                  <Link className="px-4 py-4 rounded-lg hover:bg-on-surface/5 transition-colors font-label-caps tracking-[0.18em] text-on-surface-variant uppercase text-sm" href="/investment-plans">Pricing</Link>
                  <Link className="px-4 py-4 rounded-lg hover:bg-on-surface/5 transition-colors font-label-caps tracking-[0.18em] text-on-surface-variant uppercase text-sm" href="/success-stories">Stories</Link>
                  <Link className="px-4 py-4 rounded-lg hover:bg-on-surface/5 transition-colors font-label-caps tracking-[0.18em] text-on-surface-variant uppercase text-sm" href="/the-wellness-journal">Journal</Link>
                  <Link className="px-4 py-4 rounded-lg hover:bg-on-surface/5 transition-colors font-label-caps tracking-[0.18em] text-on-surface-variant uppercase text-sm" href="/about">About</Link>
                  <Link className="px-4 py-4 rounded-lg hover:bg-on-surface/5 transition-colors font-label-caps tracking-[0.18em] text-on-surface-variant uppercase text-sm" href="/connect-with-us">Connect</Link>
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
