import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sri Devi | SriYogalaya",
  description: "Meet Sri Devi, a certified international yoga instructor specializing in midlife transformation, Prenatal, Ashtanga, Hatha & Contemporary Yoga.",
  alternates: { canonical: "https://sriyogalaya.com/about" },
  openGraph: {
    title: "About Sri Devi | SriYogalaya",
    description: "Meet Sri Devi, a certified international yoga instructor specializing in midlife transformation, Prenatal, Ashtanga, Hatha & Contemporary Yoga.",
    url: "https://sriyogalaya.com/about",
    images: [{ url: "/images/IMG_0509.jpeg" }],
  },
};

export default function AboutYourGuide() {
  return (
    <main>

      <section className="pt-12 md:pt-16 pb-12 md:pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="md:col-span-6 lg:col-span-7 order-2 md:order-1">
            <span className="font-label-caps text-secondary text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6 block">Lead Instructor</span>
            <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-4 md:mb-8 font-semibold tracking-tight leading-tight">Meet Sri Devi</h1>
            <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed font-light">
              International Yoga and Lifestyle Specialist, Empowering midlife transformation / Prenatal / Ashtanga / Hatha / Contemporary Yoga.
            </p>
            <div className="mt-8 md:mt-16 flex gap-8 md:gap-16 border-t border-on-surface/10 pt-6 md:pt-10">
              <div>
                <p className="font-display-lg text-3xl md:text-4xl text-primary font-bold">400+</p>
                <p className="font-label-caps text-[10px] md:text-xs text-on-surface-variant uppercase tracking-widest mt-1 md:mt-2">Students Guided</p>
              </div>
              <div>
                <p className="font-display-lg text-3xl md:text-4xl text-primary font-bold">12k+</p>
                <p className="font-label-caps text-[10px] md:text-xs text-on-surface-variant uppercase tracking-widest mt-1 md:mt-2">Hours Taught</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-5 order-1 md:order-2">
            <div className="relative aspect-[4/5] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border border-on-surface/5 group">
              <img alt="Sri Devi Portrait" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]" src="/images/IMG_0509.jpeg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
            <div>
              <h2 className="font-display-lg text-2xl md:text-4xl text-primary mb-4 md:mb-8 font-medium">The Journey to Stillness</h2>
              <div className="space-y-4 md:space-y-6 text-on-surface-variant text-base md:text-lg font-light leading-relaxed">
                <p>I discovered the profound transformative power of yoga in my early 40s. Now in my 50s. I’m a certified International yoga and fitness instructor dedicated to helping others realise it is never too late to begin.</p>
                <p>Started @42, Thriving @53. Redefining fitness after 40: Strength, Joy and mindfulness. Personal classes designed as per your requirement, offering World wide sessions.</p>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-10 md:p-12 lg:p-16 rounded-2xl md:rounded-[2rem] shadow-xl shadow-primary/5 border border-on-surface/5 hover:border-primary/20 transition-all duration-500">
              <h3 className="font-display-lg text-xl md:text-2xl text-secondary mb-3 md:mb-6 italic">Mission &amp; Philosophy</h3>
              <p className="font-display-lg text-xl md:text-3xl text-on-surface mb-4 md:mb-8 leading-tight">"Yoga is the practice of tolerating the consequences of being yourself."</p>
              <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed">My mission is to democratize the luxury of stillness. I believe that digital platforms can be just as sacred as a physical shala. Through intentional 1-on-1 guidance, we strip away the performance and focus on the profound shifts that happen when you finally listen to what your body is whispering.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12 md:mb-24">
          <span className="font-label-caps text-secondary text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-3 md:mb-4 block">The Digital Sanctuary</span>
          <h2 className="font-display-lg text-3xl md:text-5xl text-primary font-semibold tracking-tight">1-on-1 Online Methodology</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] bg-surface-container-low border border-on-surface/5 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-4 md:mb-8 font-light">videocam</span>
            <h4 className="font-display-lg text-xl md:text-2xl text-on-surface mb-2 md:mb-4">Real-Time Correction</h4>
            <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed">Using HD video conferencing to provide granular adjustments, ensuring your alignment is safe and effective from the comfort of your home.</p>
          </div>
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] bg-surface-container-low border border-on-surface/5 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-4 md:mb-8 font-light">analytics</span>
            <h4 className="font-display-lg text-xl md:text-2xl text-on-surface mb-2 md:mb-4">Anatomic Precision</h4>
            <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed">Every sequence is curated based on your unique biomechanics, past injuries, and daily energetic levels.</p>
          </div>
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] bg-surface-container-low border border-on-surface/5 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500">
            <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-4 md:mb-8 font-light">calendar_today</span>
            <h4 className="font-display-lg text-xl md:text-2xl text-on-surface mb-2 md:mb-4">Progressive Journaling</h4>
            <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed">We track your journey through shared digital logs, observing how subtle changes in practice manifest in your daily life.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-section-gap bg-primary-container/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 gap-4">
            <div className="md:col-span-2 md:row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden group min-h-[320px] md:min-h-0">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" title="Sri Devi practicing Mindful Hatha." src="/images/98ce7491-15f1-45c5-a3dd-e04e3bfe156c.jpeg" alt="Sri Devi Hatha Yoga" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-transparent p-6 sm:p-10 md:p-12 flex flex-col justify-end">
                <h4 className="font-display-lg text-2xl md:text-[28px] text-on-primary font-semibold">Meditation &amp; Breathwork</h4>
                <p className="text-on-primary/80 text-sm md:text-base font-light mt-2 md:mt-4">Deep pranayama and inner stillness practices to regulate the nervous system and cultivate daily presence.</p>
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden group min-h-[220px] md:min-h-0">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" title="Sri Devi practicing a fluid Vinyasa flow transition." src="/images/IMG_20260216_111122_Original.jpeg" alt="Sri Devi Vinyasa Flow" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent p-6 md:p-8 flex flex-col justify-end">
                <h4 className="font-display-lg text-xl md:text-2xl text-on-secondary font-semibold">Advanced Vinyasa Flow</h4>
                <p className="text-on-secondary/80 text-sm md:text-base font-light mt-1.5 md:mt-2">Dynamic, advanced sequences combining breath and core strength to expand physical limits.</p>
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden group min-h-[220px] md:min-h-0">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" title="Sri Devi resting in a quiet, meditative posture." src="/images/1b2b7f45-c147-44d2-bae3-9b110a0c7460.jpeg" alt="Sri Devi Restorative Yin" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-6 md:p-8 flex flex-col justify-end">
                <h4 className="font-display-lg text-xl md:text-2xl text-on-primary font-semibold">Corporate Wellness Workshops</h4>
                <p className="text-on-primary/80 text-sm md:text-base font-light mt-1.5 md:mt-2">Customized yoga, mindfulness, and stress-management sessions designed for corporate teams and institutions like ICMAI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="md:w-1/3">
            <h2 className="font-display-lg text-2xl md:text-3xl text-primary mb-3 md:mb-4">Credentials &amp; Expertise</h2>
            <p className="text-on-surface-variant text-sm md:text-base">Continuous learning is at the heart of my practice. I combine ancient lineage with modern science.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full">
            <div className="border-l-2 border-primary-container pl-4 py-1.5 md:pl-6 md:py-2">
              <h5 className="font-bold text-primary mb-1 text-sm md:text-base">RYT-500 Advanced Teacher</h5>
              <p className="text-xs text-secondary uppercase font-label-caps tracking-wider">Yoga Alliance Certified</p>
            </div>
            <div className="border-l-2 border-primary-container pl-4 py-1.5 md:pl-6 md:py-2">
              <h5 className="font-bold text-primary mb-1 text-sm md:text-base">Yoga body Specialist</h5>
              <p className="text-xs text-secondary uppercase font-label-caps tracking-wider">Oxford Wellness Institute</p>
            </div>
            <div className="border-l-2 border-primary-container pl-4 py-1.5 md:pl-6 md:py-2">
              <h5 className="font-bold text-primary mb-1 text-sm md:text-base">Trauma-Informed Yoga</h5>
              <p className="text-xs text-secondary uppercase font-label-caps tracking-wider">Mind-Body Research Center</p>
            </div>
            <div className="border-l-2 border-primary-container pl-4 py-1.5 md:pl-6 md:py-2">
              <h5 className="font-bold text-primary mb-1 text-sm md:text-base">8+ Years Teaching</h5>
              <p className="text-xs text-secondary uppercase font-label-caps tracking-wider">Global Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-section-gap overflow-hidden">
        <div className="flex overflow-x-auto gap-4 px-margin-mobile md:px-0 h-[280px] md:h-[400px] scrollbar-hide -mx-margin-mobile md:mx-0">
          <div className="flex-shrink-0 w-[75vw] md:w-auto md:flex-1 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
            <img className="w-full h-full object-cover" title="Sri Devi guiding a gentle posture adjustment in a sunny, warm yoga shala." src="/images/IMG_0542.jpeg" alt="Sri Devi Yoga Practice" />
          </div>
          <div className="flex-shrink-0 w-[80vw] md:w-auto md:flex-[1.5] rounded-2xl overflow-hidden shadow-lg transform translate-y-0 md:translate-y-8 hover:translate-y-0 md:hover:translate-y-6 transition-transform duration-500">
            <img className="w-full h-full object-cover" title="Sri Devi practicing high-focus breathing control outdoor." src="/images/IMG_1181.jpeg" alt="Sri Devi Pranayama Practice" />
          </div>
          <div className="flex-shrink-0 w-[75vw] md:w-auto md:flex-1 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
            <img className="w-full h-full object-cover" title="A peaceful outdoor yoga session in nature." src="/images/IMG_20250709_103014_Original.jpeg" alt="SriYogalaya Outdoor Session" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-display-lg text-2xl md:text-3xl text-primary font-semibold">Voices of the Sanctuary</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-surface-container-low p-6 sm:p-10 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-on-surface/5 shadow-sm relative">
            <span className="material-symbols-outlined text-secondary/20 text-6xl md:text-8xl absolute top-4 right-6 md:top-6 md:right-8">format_quote</span>
            <p className="font-body-lg text-sm md:text-lg text-on-surface mb-6 md:mb-8 relative z-10 font-light leading-relaxed">"Training with Sri Devi online feels more personal than any studio class I've attended. Her attention to detail and her ability to read my energy through a screen is uncanny. My practice has reached heights I never thought possible."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-container"></div>
              <div>
                <p className="font-bold text-primary text-sm md:text-base">Sarah J.</p>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">Executive &amp; Mother</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 sm:p-10 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-on-surface/5 shadow-sm relative">
            <span className="material-symbols-outlined text-secondary/20 text-6xl md:text-8xl absolute top-4 right-6 md:top-6 md:right-8">format_quote</span>
            <p className="font-body-lg text-sm md:text-lg text-on-surface mb-6 md:mb-8 relative z-10 font-light leading-relaxed">"Her methodology is grounded in science yet honors the spirit of yoga perfectly. As someone with old sporting injuries, I felt completely safe and supported. She is a true master of her craft."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-container"></div>
              <div>
                <p className="font-bold text-primary text-sm md:text-base">David M.</p>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">Architect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-12 md:pt-16 md:pb-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-[#1a1a1a] rounded-2xl md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full -mr-32 md:-mr-48 -mt-32 md:-mt-48 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-secondary/20 rounded-full -ml-24 md:-ml-32 -mb-24 md:-mb-32 blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 font-semibold tracking-tight leading-tight">Begin Your Conscious Journey</h2>
            <p className="text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-lg font-body-lg font-light leading-relaxed">Reach out to discuss your wellness goals and experience Sri Devi's teaching style first-hand.</p>
            <Link href="/connect-with-us" className="inline-block bg-white text-black px-8 py-4 md:px-12 md:py-5 rounded-full font-label-caps text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all">
              Connect With Sri Devi
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}