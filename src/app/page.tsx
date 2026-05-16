import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <main className="animate-in fade-in duration-1000">

        <section className="relative h-[90vh] flex items-center overflow-hidden">
          {/* Authentic Background image with Ken Burns */}
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-out_infinite_alternate]" alt="SriYogalaya authentic outdoor group yoga session" src="/images/IMG_4972.jpeg" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-surface/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">

              {/* Left: Content */}
              <div className="max-w-xl">
                {/* Badge */}
                <div className="animate-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
                  <span className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary px-4 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Live Online Sessions
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-display-lg text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4rem] mt-8 mb-6 leading-[1.08] tracking-tight animate-in slide-in-from-bottom-8 duration-700 delay-400 fill-mode-both">
                  Transform Your
                  <span className="block text-primary">Mind &amp; Body</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-600 fill-mode-both max-w-md">
                  Experience curated 1-on-1 yoga sessions via Zoom, tailored precisely to your anatomy, goals, and breath.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 animate-in slide-in-from-bottom-8 duration-700 delay-800 fill-mode-both">
                  <Link className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-caps text-[11px] tracking-[0.2em] hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 inline-flex items-center justify-center gap-2 uppercase font-bold" href="/connect-with-us">
                    Start Your Journey
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                  <Link className="border border-on-surface/15 text-on-surface px-8 py-4 rounded-full font-label-caps text-[11px] tracking-[0.2em] hover:bg-on-surface/5 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center uppercase backdrop-blur-sm" href="/success-stories">Explore Stories</Link>
                </div>

                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap gap-6 animate-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-both">
                  <div className="flex items-center gap-2 text-on-surface-variant/70">
                    <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="text-xs font-medium tracking-wide">Certified Instructor</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant/70">
                    <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
                    <span className="text-xs font-medium tracking-wide">Online Worldwide</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant/70">
                    <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                    <span className="text-xs font-medium tracking-wide">50+ Students</span>
                  </div>
                </div>
              </div>

              {/* Right: Floating image card (visible on lg+) */}
              <div className="hidden lg:flex justify-end animate-in slide-in-from-right-12 duration-1000 delay-500 fill-mode-both">
                <div className="relative">
                  {/* Main image card */}
                  <div className="w-[380px] h-[480px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20 border border-white/20 rotate-2 hover:rotate-0 transition-transform duration-700 bg-white">
                    <img src="/images/IMG_20240601_093126_Original.jpeg" alt="Sri Devi — Yoga Instructor" className="w-full h-full object-cover object-center" />
                  </div>

                  {/* Logo badge overlay */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-surface rounded-2xl shadow-xl border border-on-surface/5 flex items-center justify-center p-3 animate-in zoom-in duration-500 delay-1000 fill-mode-both">
                    <img src="/images/sriyogalaya-logo.png" alt="SriYogalaya Logo" className="w-full h-full object-contain" />
                  </div>

                  {/* Floating stat card */}
                  <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg px-5 py-4 border border-on-surface/5 animate-in zoom-in duration-500 delay-1200 fill-mode-both">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-on-surface leading-tight">4.9 ★</div>
                        <div className="text-[11px] text-on-surface-variant">Student Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[1400ms] fill-mode-both">
            <div className="flex flex-col items-center gap-2 text-on-surface-variant/40">
              <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
              <div className="w-5 h-8 border-2 border-on-surface-variant/20 rounded-full flex justify-center pt-1.5">
                <div className="w-1 h-2 bg-on-surface-variant/40 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>


        <ScrollReveal>
          <section className="py-section-gap">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <div className="text-center mb-20">
                <h2 className="font-display-lg text-headline-md mb-4">Why Personalized Practice?</h2>
                <p className="text-on-surface-variant">Beyond the studio, into your soul.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-12">
                <div className="p-12 bg-surface-container rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="self_improvement">self_improvement</span>
                  <h3 className="font-display-lg text-headline-sm mb-4">Mental Clarity</h3>
                  <p className="text-on-surface-variant">Reduce cortisol levels and find a peaceful center amidst the chaos of modern life.</p>
                </div>
                <div className="p-12 bg-primary-container/20 rounded-xl flex flex-col items-center text-center shadow-sm border border-primary/10 hover:shadow-xl hover:-translate-y-2 hover:bg-primary-container/30 transition-all duration-500">
                  <span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="flexibility">flex_direction</span>
                  <h3 className="font-display-lg text-headline-sm mb-4">Functional Mobility</h3>
                  <p className="text-on-surface-variant">Develop strength and flexibility that supports your daily movements and long-term health.</p>
                </div>
                <div className="p-12 bg-surface-container rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <span className="material-symbols-outlined text-4xl text-primary mb-6" data-icon="monitor_heart">monitor_heart</span>
                  <h3 className="font-display-lg text-headline-sm mb-4">Vagal Tone</h3>
                  <p className="text-on-surface-variant">Optimize your nervous system through conscious breathing and restorative postures.</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section className="py-section-gap bg-surface-container-lowest overflow-hidden">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-on-surface/5">
                    <img className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" alt="Sri Devi performing an advanced balance yoga pose, demonstrating strength and mindfulness." src="/images/98ce7491-15f1-45c5-a3dd-e04e3bfe156c.jpeg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                      <p className="text-white font-label-caps tracking-widest text-sm">Practicing what we preach.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <span className="w-8 h-[1px] bg-secondary"></span>
                    <span className="font-label-caps text-secondary text-sm tracking-[0.2em] font-bold">YOUR GUIDE</span>
                  </div>
                  <h2 className="font-display-lg text-5xl md:text-6xl mb-8 font-semibold tracking-tight text-on-surface">Meet Sri Devi</h2>
                  <div className="relative p-8 rounded-2xl bg-surface shadow-sm border border-on-surface/5 mb-8">
                    <span className="material-symbols-outlined text-4xl text-primary/20 absolute top-4 right-4" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                    <p className="font-display-lg text-2xl text-primary mb-2 leading-tight">
                      "Started at 42. Thriving at 53."
                    </p>
                    <p className="text-on-surface-variant font-light">
                      Redefining fitness after 40: Strength, Joy, and Mindfulness.
                    </p>
                  </div>
                  <p className="font-body-lg text-lg text-on-surface-variant mb-10 leading-relaxed font-light">
                    I discovered the profound transformative power of yoga in my early 40s. Now in my 50s, I am a certified International Yoga and Fitness Instructor dedicated to helping others realize it is never too late to begin. My personalized classes are designed precisely for your unique requirements, focusing on empowering midlife transformations.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-12 border-t border-on-surface/10 pt-8">
                    <div>
                      <h4 className="font-display-lg text-2xl text-on-surface mb-1">Global Reach</h4>
                      <p className="text-label-caps text-primary text-xs font-bold tracking-widest uppercase">Worldwide Sessions</p>
                    </div>
                    <div>
                      <h4 className="font-display-lg text-2xl text-on-surface mb-1">Specialist</h4>
                      <p className="text-label-caps text-primary text-xs font-bold tracking-widest uppercase">Midlife Empowerment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section id="one-on-one" className="py-section-gap bg-surface overflow-hidden">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <span className="w-8 h-[1px] bg-secondary"></span>
                    <span className="font-label-caps text-secondary text-sm tracking-[0.2em] font-bold uppercase">Personalized Mastery</span>
                  </div>
                  <h2 className="font-display-lg text-5xl md:text-7xl mb-8 font-semibold tracking-tight text-on-surface leading-[1.1]">1-on-1 Yoga Sessions</h2>
                  <p className="font-body-lg text-lg text-on-surface-variant mb-8 leading-relaxed font-light">
                    Experience curated yoga sessions via Zoom, tailored precisely to your anatomy, goals, and breath. Our 1-on-1 sessions aren't about judgment—they're about focused support to help you move safely and celebrate every small win.
                  </p>
                  <div className="space-y-4 mb-10">
                    {[
                      "Tailored to your specific body type & health goals",
                      "Real-time postural corrections & expert guidance",
                      "Flexible scheduling that fits your unique lifestyle",
                      "A safe, private space to ask questions freely"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-on-surface-variant font-light">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[14px]">done</span>
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <a href="#connect" className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group">
                    1-on-1 Zoom Session
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                  <div className="absolute -inset-10 bg-gradient-to-br from-primary/10 to-transparent rounded-[3rem] blur-3xl opacity-50"></div>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-on-surface/5 group">
                    <img src="/images/IMG_20250718_103924_Original.jpeg" alt="Private Yoga Session focus on precision and personalized alignment" className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-5 py-2.5 rounded-full shadow-lg border border-black/5 flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-[11px] font-bold tracking-[0.2em] text-on-surface uppercase">Live via Zoom</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section id="group-classes" className="py-section-gap bg-surface-container-lowest overflow-hidden border-t border-on-surface/5">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
              <div className="max-w-4xl mx-auto mb-16">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-secondary"></span>
                  <span className="font-label-caps text-secondary text-sm tracking-[0.2em] font-bold uppercase">Collective Vitality</span>
                  <span className="w-8 h-[1px] bg-secondary"></span>
                </div>
                <h2 className="font-display-lg text-5xl md:text-7xl mb-8 font-semibold tracking-tight text-on-surface leading-[1.1]">Group Yoga Classes</h2>
                <p className="font-body-lg text-xl text-on-surface-variant/80 mb-10 leading-relaxed font-light">
                  Practice in classes with other members of the community, live via zoom
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {[
                    "Classes for every health goal",
                    "70+ live classes every day",
                    "Small groups for real connection",
                    "Motivation and accountability"
                  ].map((pill, i) => (
                    <span key={i} className="px-5 py-2.5 rounded-full text-[13px] md:text-sm font-medium text-[#d37051] bg-[#fef7f5] border border-[#fae2da] shadow-sm">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop mb-16">
                <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-on-surface/10 group/img">
                  <img src="/images/group-session.png" alt="Group Zoom Yoga Class — Community practicing together live" className="w-full object-cover transition-transform duration-1000 group-hover/img:scale-105" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-black/5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-[11px] font-bold tracking-widest text-on-surface uppercase">Live via Zoom</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a href="#pricing" className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group">
                  Group Zoom Session
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <p className="mt-6 text-sm text-on-surface-variant font-light">
                  See all of our <span className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 cursor-pointer">70+ daily group classes</span>
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>





        <ScrollReveal delay={0.1}>
          <section className="py-section-gap bg-surface-container-low">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <div className="text-center mb-16">
                <h2 className="font-display-lg text-headline-md mb-4">Investment in Yourself</h2>
                <p className="text-on-surface-variant">Choose a package that aligns with your commitment.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                <div className="p-8 bg-surface rounded-xl flex flex-col h-full border border-on-surface/5 hover:border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <h3 className="font-display-lg text-headline-sm mb-2">Single Session</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">₹700</span>
                    <span className="text-on-surface-variant">/session</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-sm" data-icon="done">done</span> 45-60 minutes</li>
                    <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-sm" data-icon="done">done</span> Introductory / Drop-in</li>
                  </ul>
                </div>

                <div className="p-8 bg-surface rounded-xl flex flex-col h-full border border-on-surface/5 hover:border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <h3 className="font-display-lg text-headline-sm mb-2">Group Classes</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">₹3,000</span>
                    <span className="text-on-surface-variant">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-sm" data-icon="done">done</span> 20 Classes in a month</li>
                    <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-sm" data-icon="done">done</span> Monday to Friday</li>
                  </ul>
                </div>

                <div className="p-8 bg-primary text-on-primary rounded-xl flex flex-col h-full shadow-2xl md:scale-105 relative z-10 hover:scale-[1.02] md:hover:scale-[1.07] transition-transform duration-500">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-[10px] tracking-widest font-bold shadow-lg">MOST POPULAR</div>
                  <h3 className="font-display-lg text-headline-sm mb-2">Personal Training</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹10,000</span>
                    <span className="opacity-70">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-center gap-3 opacity-90"><span className="material-symbols-outlined text-sm" data-icon="done">done</span> 20 Classes in a month</li>
                    <li className="flex items-center gap-3 opacity-90"><span className="material-symbols-outlined text-sm" data-icon="done">done</span> Monday to Friday</li>
                    <li className="flex items-center gap-3 opacity-90"><span className="material-symbols-outlined text-sm" data-icon="done">done</span> Designed as per requirement</li>
                    <li className="flex items-center gap-3 opacity-90"><span className="material-symbols-outlined text-sm" data-icon="done">done</span> 1-on-1 Dedicated Coaching</li>
                  </ul>
                </div>

              </div>

              <div className="mt-16 text-center">
                <Link href="/investment-plans" className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-full font-label-caps text-xs tracking-widest hover:bg-primary hover:text-white transition-all uppercase font-bold">
                  Explore All Plans
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>

            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section className="py-section-gap overflow-hidden">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 flex justify-between items-end">
              <div>
                <h2 className="font-display-lg text-headline-sm">Life at SriYogalaya</h2>
                <p className="text-on-surface-variant">@SriYogalaya</p>
              </div>
              <Link className="text-primary font-label-caps border-b border-primary hover:text-primary/80 transition-colors" href="/the-wellness-journal">Follow Our Journey</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
              <div className="relative aspect-square rounded-xl shadow-md overflow-hidden group">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Close up of a yoga practitioner's hands in mudra pose, warm sunrise light filtering through, SriYogalaya aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFEyZaf0uk91EJjqf9Md-LlGLQdXtzzQURsFLE7LXWOjFTkZV-8t0oJE4BfgvEEDI6oInJVBVZewEJEdw_ydfFTmRX1M0sp8nwl8WuTrT1iyCA4YvZLSgX8oA6yvwViSRWHZD_uuNZyYr3eKTkXv3ExOdaN3ucD7PdsNKd15dPqGNspCTE3Tye-Lp54P8xV77vXyWcoFXFZQZSfkQBky3FB1XT45sFR2gh_9laKnCRL0E8X9R4c4YV6Bt5qlBbGB8uWw5XD8tpyg" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-3xl">camera</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-xl shadow-md overflow-hidden group">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="A beautiful overhead shot of a yoga mat and a ceramic bowl of incense on a light wood floor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEIVT5L_D97F4MHoj1Fsu2O6JIiYVXOGzjdGr01-u2r861vYwQvp3bGhv0Tox61pjK2ukuA2-vPa_nZnwWuPgptU73GkV_498Jq1fkKHkai-HjFdga8YcW8MDE755Gmsmi1H2nQKEkq69ne40sczAYLXCeNd06zWjzhPqG5Z4syZlFBkzPPLeAMz223MqfVa-UNiCwcGipHRCvzdzGQ2WjMbdipcAViVDk0JkKh-bzNAEvgOuagSYunJLyk5s1XQF2grE7MZLEEg" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-3xl">camera</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-xl shadow-md overflow-hidden group">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="A minimalist meditation space with a single green plant and a warm beige cushion against a cream wall." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR6qwkukPlbODf-zcuGtcpGFhAdHaJwdX64S19srfmqsEEwCrNMT61fdGR36bp9740ujReX_VE4ol20pZvFOlXCke-uY2ZwnG8wurvMTF1sKughOvlmbb4GSqx54evzmyfERato5duf5YLfadya3v8Z3sgy2sGS_7nLzJ1zMWbNWhNiBATYmiY1xhERGIsVTSnSZYgPsp1waOPb78IIf7xQ58CIDEvS7bmOPoa7gMBJt82NCFpXny1csEJZ8m2shs50MJANPVrRg" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-3xl">camera</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-xl shadow-md overflow-hidden group">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="A serene landscape of misty mountains during sunrise, representing the peace found in yoga practice." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCopdQQvMYvHTV8ql5iBj5s7EDFdNoKeFdfGC2RDVzDbbcApJtCFvIKTAEEOLU6zRcESawaGudVtbgeKDTuurRtIha_IqnUACFCO9KTX3p5nomnZKUzWcbxbUmxkQOFwxoLRxoOziMUqVMRMJT5L0t_c5w5_rckz09JnCzlebV2_6A600nkervmP4w4K3D6LCa4ocDmNN-fhrRmJJHiJ9r6wJpN3nJlAGCkAkiR-6tzWKSV-_1_qnH0N891hrw7STijRDEEjlsi5A" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-3xl">camera</span>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
            <div className="max-w-container-max mx-auto bg-[#1a1a1a] rounded-[2rem] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden group shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-on-surface/5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -mr-48 -mt-48 blur-3xl transition-transform duration-1000 group-hover:scale-150"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl transition-transform duration-1000 group-hover:scale-150"></div>
              <div className="relative z-10">
                <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-8 tracking-tight">Ready to rediscover your peace?</h2>
                <p className="text-white/70 font-body-lg mb-12 max-w-xl mx-auto text-lg leading-relaxed">Join a community of mindful souls and start your transformation today with a personalized session.</p>
                <Link className="bg-white text-black px-10 py-5 rounded-full font-label-caps text-xs tracking-[0.2em] hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 inline-flex items-center justify-center uppercase font-bold" href="/connect-with-us">Connect With Us</Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <a
        href="https://wa.me/919491803261"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 cursor-pointer animate-bounce-slow group hover:scale-110 transition-all z-50"
      >
        <img src="/whatsapp.png" alt="WhatsApp Support" className="h-16 w-16 drop-shadow-lg" />

        <div className="absolute right-20 bottom-2 bg-surface shadow-xl p-4 rounded-xl w-48 opacity-0 group-hover:opacity-100 pointer-events-none transition-all border border-on-surface/5">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-label-caps text-[10px] text-on-surface-variant">WE ARE ONLINE</span>
          </div>
          <p className="font-body-md text-xs font-semibold text-on-surface">WhatsApp Support</p>
        </div>
      </a>
    </>
  );
}
