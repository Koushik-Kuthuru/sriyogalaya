import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories & Testimonials | SriYogalaya",
  description: "Discover real journeys of transformation and deep healing. Read testimonials from our global students who have found inner peace and resilience with SriYogalaya.",
  alternates: { canonical: "https://sriyogalaya.com/success-stories" },
  openGraph: {
    title: "Success Stories & Testimonials | SriYogalaya",
    description: "Discover real journeys of transformation and deep healing. Read testimonials from our global students who have found inner peace and resilience with SriYogalaya.",
    url: "https://sriyogalaya.com/success-stories",
  },
};

export default function SuccessStories() {
  return (
    <main className="pt-24 md:pt-32">

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 md:mb-24 text-center">
        <span className="inline-block px-5 py-2 md:px-6 rounded-full bg-secondary/10 text-secondary font-label-caps mb-6 md:mb-8 text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.3em] font-bold uppercase">Real Journeys</span>
        <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-5 md:mb-8 text-on-surface max-w-4xl mx-auto tracking-tight font-semibold">Voices of Transformation and Deep Healing.</h1>
        <p className="font-body-lg text-base md:text-lg lg:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">Every journey is unique. Discover how our sanctuary has helped hundreds rediscover their inner peace and resilience.</p>
      </section>

      <section className="mb-16 md:mb-32 bg-[#141414] py-14 md:py-24 text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-3 gap-4 md:gap-12 text-center md:divide-x md:divide-white/10">
          <div className="flex flex-col">
            <span className="font-display-lg text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4">98%</span>
            <span className="font-label-caps text-white/50 text-[9px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em] uppercase">Stress Reduction</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display-lg text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4">400+</span>
            <span className="font-label-caps text-white/50 text-[9px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em] uppercase">Global Students</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display-lg text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4">4.9/5</span>
            <span className="font-label-caps text-white/50 text-[9px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em] uppercase">Member Rating</span>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <h2 className="font-headline-md text-2xl md:text-headline-md mb-8 md:mb-12 text-on-surface">Experience the Shift</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-gutter h-full">

          <div className="md:col-span-8 group relative rounded-xl overflow-hidden shadow-2xl shadow-primary/10 aspect-video md:aspect-auto h-full bg-surface-container">
            <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="SriYogalaya Journey Feature" src="https://placehold.co/1200x800/f5f5f5/primary?text=SriYogalaya+Transformation" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-all duration-500">
              <button className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                <span className="material-symbols-outlined text-2xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white font-headline-sm text-base md:text-headline-sm">&quot;&quot;</h3>
              <p className="text-white/80 font-body-md text-xs md:text-sm mt-1 md:mt-2">— Elena, Tech Executive &amp; Retreat Member</p>
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 md:flex md:flex-col gap-4 md:gap-gutter">
            <div className="relative rounded-xl overflow-hidden h-40 md:h-64 group bg-surface-container">
              <img className="w-full h-full object-cover opacity-80" alt="Yoga session highlight" src="https://placehold.co/600x400/f5f5f5/primary?text=Mindful+Moment" />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 md:h-64 group bg-surface-container">
              <img className="w-full h-full object-cover opacity-80" alt="Group practice highlight" src="https://placehold.co/600x400/f5f5f5/primary?text=Community+Flow" />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-14 md:py-24 mb-section-gap overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="font-headline-md text-2xl md:text-headline-md text-on-surface mb-2 md:mb-4">Visible Balance</h2>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant">Our holistic approach creates transformations that start within and radiate outward. See the impact of dedicated practice over 90 days.</p>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="p-3 rounded-full border border-outline hover:bg-white transition-colors"><span className="material-symbols-outlined">arrow_back</span></button>
              <button className="p-3 rounded-full border border-outline hover:bg-white transition-colors"><span className="material-symbols-outlined">arrow_forward</span></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 group">
              <div className="grid grid-cols-2">
                <div className="relative bg-surface-container">
                  <img className="w-full aspect-[4/5] object-cover opacity-80" alt="Before Journey" src="https://placehold.co/400x500/f5f5f5/primary?text=Before" />
                  <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-black/50 text-white px-2.5 py-1 md:px-3 rounded-full text-[10px] md:text-xs font-label-caps uppercase">Before</span>
                </div>
                <div className="relative bg-surface-container">
                  <img className="w-full aspect-[4/5] object-cover opacity-80" alt="After 90 Days" src="https://placehold.co/400x500/f5f5f5/primary?text=After" />
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 bg-primary text-on-primary px-2.5 py-1 md:px-3 rounded-full text-[10px] md:text-xs font-label-caps uppercase">90 Days</span>
                </div>
              </div>
              <div className="p-5 md:p-8">
                <div className="flex text-secondary mb-3 md:mb-4">
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <h4 className="font-headline-sm text-lg md:text-headline-sm text-on-surface mb-2">Weight Loss &amp; Vitality</h4>
                <p className="font-body-md text-sm md:text-base text-on-surface-variant">&quot;&quot;</p>
                <p className="mt-3 md:mt-4 font-label-caps text-secondary text-[10px] md:text-xs">— MARCUS R.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 group">
              <div className="grid grid-cols-2">
                <div className="relative bg-surface-container">
                  <img className="w-full aspect-[4/5] object-cover opacity-80" alt="Before Journey" src="https://placehold.co/400x500/f5f5f5/primary?text=Before" />
                  <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-black/50 text-white px-2.5 py-1 md:px-3 rounded-full text-[10px] md:text-xs font-label-caps uppercase">Before</span>
                </div>
                <div className="relative bg-surface-container">
                  <img className="w-full aspect-[4/5] object-cover opacity-80" alt="After 120 Days" src="https://placehold.co/400x500/f5f5f5/primary?text=After" />
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 bg-primary text-on-primary px-2.5 py-1 md:px-3 rounded-full text-[10px] md:text-xs font-label-caps uppercase">120 Days</span>
                </div>
              </div>
              <div className="p-5 md:p-8">
                <div className="flex text-secondary mb-3 md:mb-4">
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <h4 className="font-headline-sm text-lg md:text-headline-sm text-on-surface mb-2">Stress Recovery</h4>
                <p className="font-body-md text-sm md:text-base text-on-surface-variant">&quot;&quot;</p>
                <p className="mt-3 md:mt-4 font-label-caps text-secondary text-[10px] md:text-xs">— SARAH L.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <h2 className="font-headline-md text-2xl md:text-headline-md text-center mb-10 md:mb-16">Loved by our Community</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">

          <div className="break-inside-avoid bg-white p-5 md:p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/30 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex text-secondary mb-3 md:mb-4">
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md italic text-on-surface-variant mb-4 md:mb-6 leading-relaxed text-sm md:text-base">&quot;I started my journey of yoga at the age of 59. Since then I started observing my body. I understood that doing work at home doesn&apos;t help the whole body. Since the day I started my journey of yoga I observed many changes. I became active physically and mentally. I started my journey with many health problems. Maximum I got relieved. I feel sorry for not doing yoga at an early stage. Thank you teacher for this beautiful journey of yoga.&quot;</p>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
              </div>
              <div>
                <p className="font-label-caps font-bold text-on-surface text-xs md:text-sm">SriYogalaya Student</p>
                <p className="text-[9px] md:text-[10px] text-primary font-bold tracking-widest uppercase">Started at 59</p>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid bg-white p-5 md:p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/30 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex text-secondary mb-3 md:mb-4">
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md italic text-on-surface-variant mb-4 md:mb-6 leading-relaxed text-sm md:text-base">&quot;Sridevi is a disciplined and dedicated yoga teacher who genuinely cares about her students&apos; growth. Her encouragement keeps us motivated, while her keen eye for progress helps us continuously improve. She strikes the perfect balance between challenging us and providing steady, supportive guidance. Practicing with her has made me stronger, more confident, and more committed to my yoga journey. Thank you!&quot;</p>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
              </div>
              <div>
                <p className="font-label-caps font-bold text-on-surface text-xs md:text-sm">SriYogalaya Student</p>
                <p className="text-[9px] md:text-[10px] text-primary font-bold tracking-widest uppercase">Dedicated Practitioner</p>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid bg-white p-5 md:p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/30 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex text-secondary mb-3 md:mb-4">
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md italic text-on-surface-variant mb-4 md:mb-6 leading-relaxed text-sm md:text-base">&quot;If you want to transform your derailed life health-wise and have realised it very late in life. Sriyogalaya is the place to bring everything back on track and make your life and journey healthier and happier.&quot;</p>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
              </div>
              <div>
                <p className="font-label-caps font-bold text-on-surface text-xs md:text-sm">SriYogalaya Student</p>
                <p className="text-[9px] md:text-[10px] text-primary font-bold tracking-widest uppercase">Health Transformation</p>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid bg-white p-5 md:p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/30 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex text-secondary mb-3 md:mb-4">
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md italic text-on-surface-variant mb-4 md:mb-6 leading-relaxed text-sm md:text-base">&quot;I really appreciate Sridevi&apos;s gentle and supportive yoga teaching style. She gives clear guidance, offers options, and never makes the practice feel pushy or intimidating, which is very different from some of my past experiences in other classes. Because of that, I feel comfortable listening to my body, progressing at my own pace, and truly started to enjoy yoga again. Her calm communication, encouragement, and non-judgmental approach create a safe and welcoming space to practice. I always leave her yoga sessions feeling relaxed, respected, and re-energized.&quot;</p>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
              </div>
              <div>
                <p className="font-label-caps font-bold text-on-surface text-xs md:text-sm">Srini Manthena</p>
                <p className="text-[9px] md:text-[10px] text-primary font-bold tracking-widest uppercase">USA</p>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid bg-white p-5 md:p-8 rounded-2xl shadow-xl shadow-primary/5 border border-outline-variant/30 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex text-secondary mb-3 md:mb-4">
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md italic text-on-surface-variant mb-4 md:mb-6 leading-relaxed text-sm md:text-base">&quot;As I reflect on the past 2.5 years of learning under your wing, my heart is filled with the deepest gratitude. Your teachings extend far beyond the physical mastery of Asanas. Thank you for the incredible dedication and boundless wisdom you share so generously. Your presence in my life has been an anchor, helping me find strength during challenges and stillness amidst chaos. You have not only taught me Yoga, but you have inspired me by the way you live your life with such grace and poise. I am truly blessed to have you as my Guru 🙏🏻&quot;</p>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
              </div>
              <div>
                <p className="font-label-caps font-bold text-on-surface text-xs md:text-sm">Swapna Kulkarni</p>
                <p className="text-[9px] md:text-[10px] text-primary font-bold tracking-widest uppercase">2.5+ Years Practitioner</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#1a1a1a] py-16 md:py-24 px-6 md:px-12 text-center text-white shadow-2xl shadow-primary/20 group border border-white/5">
          <div className="absolute top-0 right-0 w-60 md:w-96 h-60 md:h-96 bg-primary/20 rounded-full -mr-32 md:-mr-48 -mt-32 md:-mt-48 blur-3xl transition-transform duration-1000 group-hover:scale-150 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-40 md:w-64 h-40 md:h-64 bg-secondary/20 rounded-full -ml-20 md:-ml-32 -mb-20 md:-mb-32 blur-3xl transition-transform duration-1000 group-hover:scale-150 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 md:mb-8 tracking-tight font-semibold">Begin Your Own Chapter</h2>
            <p className="font-body-lg text-base md:text-lg text-white/70 mb-8 md:mb-12 leading-relaxed">Join our sanctuary today and start a journey toward the version of yourself you&apos;ve been waiting to meet.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <Link href="/connect-with-us" className="bg-white text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-label-caps uppercase tracking-[0.2em] hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all font-bold text-[11px] inline-block text-center">Connect With Us</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
