import Link from "next/link";

export default function AboutYourGuide() {
  return (
    <main>

      <section className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="md:col-span-6 lg:col-span-7 order-2 md:order-1">
            <span className="font-label-caps text-secondary text-[11px] font-bold tracking-[0.3em] uppercase mb-6 block">Lead Instructor</span>
            <h1 className="font-display-lg text-5xl md:text-6xl lg:text-7xl text-primary mb-8 font-semibold tracking-tight">Meet Sri Davi</h1>
            <p className="font-body-lg text-lg text-on-surface-variant max-w-xl leading-relaxed font-light">
              International Yoga and Lifestyle Specialist, Empowering midlife transformation / Prenatal / Ashtanga / Hatha / Contemporary Yoga.
            </p>
            <div className="mt-16 flex gap-16 border-t border-on-surface/10 pt-10">
              <div>
                <p className="font-display-lg text-4xl text-primary font-bold">500+</p>
                <p className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest mt-2">Students Guided</p>
              </div>
              <div>
                <p className="font-display-lg text-4xl text-primary font-bold">12k+</p>
                <p className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest mt-2">Hours Taught</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-5 order-1 md:order-2">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border border-on-surface/5 group">
              <img alt="Sri Davi Portrait" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]" title="A professional and welcoming portrait of a yoga instructor in a bright, sun-drenched studio. She is sitting in a relaxed, cross-legged position on a sage green mat, wearing high-quality minimalist athletic wear in sand colors. The background features soft bokeh of indoor plants and white linen curtains, creating a serene, high-end editorial atmosphere with soft, warm lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZwMYai0sjSq2EK7eG0KTCtm6h7_Jw6oaIsKphvxOFdCmNC9lwVtWbm5c8q5V6MWKznCyxSkZ6EXCRaHOkm8lFPtKq3pnjCUN5TBuI7z4FcJ2QaUb_rZqdxqKF-rpjYRaslFlvfGFS1D0aCpXYm53IbPkzugxzqRn5f2BLQ73PWo7RPvitl3W9qug-OnZA5wBOAbZvHpb33HgQTvIszX0FWZcCwdZcrlmOY7xArS8CZeISwyVL3IiM0Hv5qUyshqtsSQNPPYIRZQ" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="font-display-lg text-4xl text-primary mb-8 font-medium">The Journey to Stillness</h2>
              <div className="space-y-6 text-on-surface-variant text-lg font-light leading-relaxed">
                <p>I discovered the profound transformative power of yoga in my early 40s. Now in my 50s. I’m a certified International yoga and fitness instructor dedicated to helping others realise it is never too late to begin.</p>
                <p>Started @42, Thriving @53. Redefining fitness after 40: Strength, Joy and mindfulness. Personal classes designed as per your requirement, offering World wide sessions.</p>
              </div>
            </div>
            <div className="bg-white p-12 lg:p-16 rounded-[2rem] shadow-xl shadow-primary/5 border border-on-surface/5 hover:border-primary/20 transition-all duration-500">
              <h3 className="font-display-lg text-2xl text-secondary mb-6 italic">Mission &amp; Philosophy</h3>
              <p className="font-display-lg text-3xl text-on-surface mb-8 leading-tight">"Yoga is the practice of tolerating the consequences of being yourself."</p>
              <p className="text-on-surface-variant text-base font-light leading-relaxed">My mission is to democratize the luxury of stillness. I believe that digital platforms can be just as sacred as a physical shala. Through intentional 1-on-1 guidance, we strip away the performance and focus on the profound shifts that happen when you finally listen to what your body is whispering.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-24">
          <span className="font-label-caps text-secondary text-[11px] font-bold tracking-[0.3em] uppercase mb-4 block">The Digital Sanctuary</span>
          <h2 className="font-display-lg text-4xl md:text-5xl text-primary font-semibold tracking-tight">1-on-1 Online Methodology</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[2rem] bg-surface-container-low border border-on-surface/5 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-5xl mb-8 font-light">videocam</span>
            <h4 className="font-display-lg text-2xl text-on-surface mb-4">Real-Time Correction</h4>
            <p className="text-on-surface-variant font-light leading-relaxed">Using HD video conferencing to provide granular adjustments, ensuring your alignment is safe and effective from the comfort of your home.</p>
          </div>
          <div className="p-10 rounded-[2rem] bg-surface-container-low border border-on-surface/5 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-5xl mb-8 font-light">analytics</span>
            <h4 className="font-display-lg text-2xl text-on-surface mb-4">Anatomic Precision</h4>
            <p className="text-on-surface-variant font-light leading-relaxed">Every sequence is curated based on your unique biomechanics, past injuries, and daily energetic levels.</p>
          </div>
          <div className="p-10 rounded-[2rem] bg-surface-container-low border border-on-surface/5 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-5xl mb-8 font-light">calendar_today</span>
            <h4 className="font-display-lg text-2xl text-on-surface mb-4">Progressive Journaling</h4>
            <p className="text-on-surface-variant font-light leading-relaxed">We track your journey through shared digital logs, observing how subtle changes in practice manifest in your daily life.</p>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-primary-container/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" title="A serene woman practicing Hatha yoga in a sunlit room with pale wood floors. The aesthetic is clean and minimalist, with soft shadows and a palette of sage green and warm beige. The image captures a sense of balance and foundational strength in a high-end wellness setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLg-cBYYFrZX8s3Yg5sHFTI_xDSQQdGIP5plqQDeHefoHisAHevaPWt-WlgSCFhhoaOPCcrkhp1umsqfxetDjr6Pvo9yccAaC2h4xghyZ_NdCK3SivuUVNFcqrNsYy3qlNlMQ80-rl_4B6mWBu4rPyJ2P5OSPzTXHSxan5_qV-P-EmpgjsMV_yENiNW0BFtV7t5R153F392csH4q2vUfN3J9W9FXPO9LB1NFe8w_hbG1JY0A-f0H8z-EnBwA6pSdsdLyKpM2s1kA" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-12 flex flex-col justify-end">
                <h4 className="font-display-lg text-headline-md text-on-primary">Mindful Hatha</h4>
                <p className="text-on-primary/80 font-body-md mt-4">Focusing on physical alignment and breath control to bring peace to the mind and body.</p>
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" title="A dynamic Vinyasa yoga sequence being performed by a graceful instructor. The scene is bright and airy, emphasizing fluid movement and energy. Soft morning light streams through large windows, highlighting the subtle textures of the sand-colored yoga mat and the sage-colored leggings." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNL62SFr55mMpj1_upzZBcb6S7XVrlYjlRFi85uy2TksUGuEbw9BL9QD7FlGFwa-A1xj4sa4Z68UHXGi3aBgeMxvj0g8Lc0mCc6lagXL_mQ-NDRaiqBL-NalUMvjPLw5KBGop8FbXTvjoMd7hRBegM42WkEImaEHK6XYwXCqKDEdSYTh5E6_QAb_Ym9q3aOuR5MTxUvDLEMcuNhMUNSFr4s9iFXBF4xyCYyEUDPeyf1fFHgDCMZtpqfFD456oICTuMXGY0h4MQtw" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent p-8 flex flex-col justify-end">
                <h4 className="font-display-lg text-headline-sm text-on-secondary">Vinyasa Flow</h4>
                <p className="text-on-secondary/80 font-body-md mt-2">Fluid transitions linked with breath for a meditative, moving practice.</p>
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" title="A restorative Yin yoga setup with premium bolsters, blankets, and blocks in a warm, dimly lit room. The atmosphere is profoundly calm and luxurious, focusing on stillness and deep relaxation. The color palette is composed of muted terracotta, warm beige, and cream tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgjx1lXUtj9JYrnAuolmk6MEfZf-TDQrHhu3yWYMOcDFOxp6zyUzMsFe6PJl7k5OLfta9ofaecOhW0ECUtaEGKrYOF3WDhAJdSRWDr_nRldmSd8gZTKg-VAU6VKJ2pdRS1XHitLOhhzN52_KvyZ9xlbRxFJexlO24D4ai_qANkxVQs9TSI_TsfNBavKDVq5xbl65RhKvwEHnb4ztzVNzIKoGC43H3NGzcPf8wFlWswQXbATQMAI3WIf8G1fY1GFdis-pXtWqY-Pw" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-8 flex flex-col justify-end">
                <h4 className="font-display-lg text-headline-sm text-on-primary">Restorative Yin</h4>
                <p className="text-on-primary/80 font-body-md mt-2">Deep, passive stretches designed to target connective tissues and release tension.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-1/3">
            <h2 className="font-display-lg text-headline-md text-primary mb-4">Credentials &amp; Expertise</h2>
            <p className="text-on-surface-variant">Continuous learning is at the heart of my practice. I combine ancient lineage with modern science.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <div className="border-l-2 border-primary-container pl-6 py-2">
              <h5 className="font-bold text-primary mb-1">RYT-500 Advanced Teacher</h5>
              <p className="text-sm text-secondary uppercase font-label-caps">Yoga Alliance Certified</p>
            </div>
            <div className="border-l-2 border-primary-container pl-6 py-2">
              <h5 className="font-bold text-primary mb-1">Yoga Anatomy Specialist</h5>
              <p className="text-sm text-secondary uppercase font-label-caps">Oxford Wellness Institute</p>
            </div>
            <div className="border-l-2 border-primary-container pl-6 py-2">
              <h5 className="font-bold text-primary mb-1">Trauma-Informed Yoga</h5>
              <p className="text-sm text-secondary uppercase font-label-caps">Mind-Body Research Center</p>
            </div>
            <div className="border-l-2 border-primary-container pl-6 py-2">
              <h5 className="font-bold text-primary mb-1">8+ Years Teaching</h5>
              <p className="text-sm text-secondary uppercase font-label-caps">Global Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap overflow-hidden">
        <div className="flex gap-4 px-4 h-[400px]">
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
            <img className="w-full h-full object-cover" title="A minimalist overhead shot of a sage green yoga mat, a glass of water with lemon, and a small white ceramic bowl of burning palo santo. The scene is set on light sand-colored stones, radiating a vibe of pure, high-end wellness and morning rituals in a serene environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGgb16N0Da7qDyZ_yjkzgDqfAppM8XGzQ_uYGK-ttkXnJsmeK64CqXdJRD9j5YECEgEjMIDew2y5a0izT4zGknPHws4YONintI4nUyYBvAf0OfJMI3zEBT_fBUCKmFQiPck-03bjYLeypV9xZOiXVCmCSmKrvciECrURqqbKERqRiL5LLfa1KT7chyjEyFnxFZ0l4sFs-xEpWkB1a7JCTVk3j5jTe1m9Qt3tunOi7HnKzVKQW6IdddyQ5xV1y-Z4IjiApMMnnuBA" />
          </div>
          <div className="flex-[1.5] rounded-2xl overflow-hidden shadow-lg transform translate-y-8 hover:translate-y-6 transition-transform duration-500">
            <img className="w-full h-full object-cover" title="A peaceful balcony view overlooking a misty forest at sunrise, featuring a small wooden table with a steaming cup of herbal tea and a leather-bound journal. The atmosphere is quiet and reflective, using a palette of deep greens, soft greys, and warm wood tones to evoke serenity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxTnIF4zEtxTjqMvW4dHvNTMVFbcW3GbKlfQ9_gVoWGii52aFmtt0OTpJ8q0wf7PEw-NLQf9kAhhgv0P6yCr7lqufvf0NIE8J52_rRec8oURhFAS1R0e5RUdqglxCdwd8sQ3YJ3vM7hFIKrtozrPFxWuRoIrpKOdAtxnOuAvI49VMzDkLnDdICV4wQiB4VmDn1GL_9Zs6z93zBraE14qWHGx2rR64-lPbW-T8jQ8FLHxrunxgVsvwvO-1kh4dKUhINz8aIp4PE_g" />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
            <img className="w-full h-full object-cover" title="Detailed macro shot of hands resting in a meditative dhyana mudra, wearing subtle gold jewelry. The skin is softly lit, and the background is a blur of warm beige linen. This editorial-style image captures the essence of mindfulness and high-end personal practice." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG4aS5t_gDNyDOuv78oewgfUVqI5SubJ3xAHr3Qr54xQ_pGlv6xTc-Y_q1OE1OzAogHDfMpjik_3kJFXFtWS4zmK2v9jdBmr5CmgkVcA-CEasxmcDm-7HvpKiEQRWK2AVhqx7lLZQDTADl_wvHBmdnhbcACyKMfUGAp78wcEgZEjm0C1lR7JmbFK8jibgSiGj-fYMyJaUHpjNPFmjQ8RDGlXOMVeJPlJjT015GPsfz0vjATPDDWrCCa8rD-cO5-Cgk0RHUK-xiEg" />
          </div>
        </div>
      </section>

      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-md text-primary">Voices of the Sanctuary</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface-container-low p-12 rounded-[2.5rem] relative">
            <span className="material-symbols-outlined text-secondary/20 text-8xl absolute top-6 right-8">format_quote</span>
            <p className="font-body-lg text-on-surface mb-8 relative z-10">"Training with Sri Davi online feels more personal than any studio class I've attended. Her attention to detail and her ability to read my energy through a screen is uncanny. My practice has reached heights I never thought possible."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container"></div>
              <div>
                <p className="font-bold text-primary">Sarah J.</p>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest">Executive &amp; Mother</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-container p-12 rounded-[2.5rem] relative">
            <span className="material-symbols-outlined text-secondary/20 text-8xl absolute top-6 right-8">format_quote</span>
            <p className="font-body-lg text-on-surface mb-8 relative z-10">"Her methodology is grounded in science yet honors the spirit of yoga perfectly. As someone with old sporting injuries, I felt completely safe and supported. She is a true master of her craft."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container"></div>
              <div>
                <p className="font-bold text-primary">David M.</p>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest">Architect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-[#1a1a1a] rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-semibold tracking-tight">Begin Your Conscious Journey</h2>
            <p className="text-white/70 mb-12 max-w-2xl mx-auto font-body-lg font-light leading-relaxed">Reach out to discuss your wellness goals and experience Sri Davi's teaching style first-hand.</p>
            <Link href="/connect-with-us" className="inline-block bg-white text-black px-12 py-5 rounded-full font-label-caps text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all">
              Connect With Sri Davi
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
