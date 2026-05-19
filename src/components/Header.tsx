"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function Header() {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  }, [pathname]);

  const closeMenu = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
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
          <input type="checkbox" id="mobile-menu-toggle" ref={checkboxRef} className="peer hidden" />

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
              <Link onClick={closeMenu} className="group flex items-center justify-between py-5 border-b border-on-surface/5 font-label-caps tracking-[0.2em] text-on-surface hover:text-primary transition-colors uppercase text-xs font-bold" href="/investment-plans">
                Pricing
                <span className="material-symbols-outlined text-[18px] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">chevron_right</span>
              </Link>
              <Link onClick={closeMenu} className="group flex items-center justify-between py-5 border-b border-on-surface/5 font-label-caps tracking-[0.2em] text-on-surface hover:text-primary transition-colors uppercase text-xs font-bold" href="/success-stories">
                Stories
                <span className="material-symbols-outlined text-[18px] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">chevron_right</span>
              </Link>
              <Link onClick={closeMenu} className="group flex items-center justify-between py-5 border-b border-on-surface/5 font-label-caps tracking-[0.2em] text-on-surface hover:text-primary transition-colors uppercase text-xs font-bold" href="/the-wellness-journal">
                Journal
                <span className="material-symbols-outlined text-[18px] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">chevron_right</span>
              </Link>
              <Link onClick={closeMenu} className="group flex items-center justify-between py-5 border-b border-on-surface/5 font-label-caps tracking-[0.2em] text-on-surface hover:text-primary transition-colors uppercase text-xs font-bold" href="/about">
                About
                <span className="material-symbols-outlined text-[18px] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">chevron_right</span>
              </Link>
            </div>

            <div className="p-8 border-t border-on-surface/5 bg-on-surface/[0.02]">
              <Link 
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 bg-primary text-on-primary w-full py-5 rounded-full font-label-caps text-[11px] font-bold tracking-[0.2em] uppercase hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95" 
                href="/connect-with-us"
              >
                Start Practice
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </Link>
              
              <div className="mt-8 flex justify-center gap-6 text-on-surface-variant/40">
                <a href="https://www.instagram.com/sri.yogini/" target="_blank" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">camera_enhance</span></a>
                <a href="mailto:contact@sriyogalaya.com" className="hover:text-primary transition-colors"><span className="material-symbols-outlined">mail</span></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
