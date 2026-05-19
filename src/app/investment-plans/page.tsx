import Link from "next/link";

export default function InvestmentPlans() {
  return (
    <main className="pt-24 md:pt-32 pb-section-gap">
      
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-12 md:mb-20">
<span className="font-label-caps text-[10px] md:text-[11px] text-secondary uppercase tracking-[0.25em] md:tracking-[0.3em] bg-secondary/10 px-5 py-2 md:px-6 md:py-2.5 rounded-full mb-6 md:mb-8 inline-block font-bold">Elevate Your Practice</span>
<h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-on-surface mb-5 md:mb-8 tracking-tight font-semibold">Choose Your Path to Inner Peace</h1>
<p className="font-body-lg text-base md:text-lg lg:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">Select a personalized coaching plan designed to nurture your body, mind, and spirit.</p>
</section>

<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">

{/* Single Session */}
<div className="bg-surface-container-low rounded-2xl md:rounded-[1.5rem] p-6 md:p-10 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group">
<div className="mb-6 md:mb-8">
<h3 className="font-display-lg text-2xl md:text-3xl text-on-surface mb-1 md:mb-2 font-medium">Single Session</h3>
<p className="font-body-md text-on-surface-variant text-sm md:text-base">Introductory / Drop-in</p>
</div>
<div className="mb-8 pb-8 md:mb-10 md:pb-10 border-b border-on-surface/10">
<span className="font-display-lg text-4xl md:text-5xl text-primary font-bold">₹700</span>
<span className="text-on-surface-variant tracking-wider text-sm md:text-base"> / session</span>
</div>
<ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-grow">
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">45-60 minutes duration</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Personalized Introduction</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Basic Form Assessment</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Goal Setting Discussion</span></li>
</ul>
<Link href="/connect-with-us" className="w-full border border-primary text-primary py-3.5 md:py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors block">Connect With Us</Link>
</div>

{/* Group Classes */}
<div className="bg-surface-container-low rounded-2xl md:rounded-[1.5rem] p-6 md:p-10 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group">
<div className="mb-6 md:mb-8">
<h3 className="font-display-lg text-2xl md:text-3xl text-on-surface mb-1 md:mb-2 font-medium">Group Classes</h3>
<p className="font-body-md text-on-surface-variant text-sm md:text-base">Community Practice</p>
</div>
<div className="mb-8 pb-8 md:mb-10 md:pb-10 border-b border-on-surface/10">
<span className="font-display-lg text-4xl md:text-5xl text-primary font-bold">₹3,000</span>
<span className="text-on-surface-variant tracking-wider text-sm md:text-base"> / mo</span>
</div>
<ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-grow">
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">20 Classes per month</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Monday to Friday sessions</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Access to community group</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Live Zoom instruction</span></li>
</ul>
<Link href="/connect-with-us" className="w-full border border-primary text-primary py-3.5 md:py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors block">Connect With Us</Link>
</div>

{/* Personal Training - Most Popular */}
<div className="bg-[#141414] text-white rounded-2xl md:rounded-[1.5rem] p-6 md:p-10 flex flex-col shadow-2xl relative transform lg:scale-[1.03] z-10 border border-white/10 group hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-500 md:col-span-2 lg:col-span-1 mt-4 md:mt-0">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-1.5 md:px-6 md:py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] shadow-lg">Most Popular</div>
<div className="mb-6 md:mb-8">
<h3 className="font-display-lg text-2xl md:text-3xl text-white mb-1 md:mb-2 font-medium">Personal Training</h3>
<p className="font-body-md text-white/50 text-sm md:text-base">Complete Transformation</p>
</div>
<div className="mb-8 pb-8 md:mb-10 md:pb-10 border-b border-white/10">
<span className="font-display-lg text-4xl md:text-5xl font-bold">₹10,000</span>
<span className="text-white/50 tracking-wider text-sm md:text-base"> / mo</span>
</div>
<ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-grow">
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-white/90 text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-white/80 text-sm md:text-base leading-relaxed">20 Classes per month</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-white/90 text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-white/80 text-sm md:text-base leading-relaxed">Monday to Friday schedule</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-white/90 text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-white/80 text-sm md:text-base leading-relaxed">Custom designed to your needs</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-white/90 text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-white/80 text-sm md:text-base leading-relaxed">1-on-1 Dedicated Coaching</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-white/90 text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-white/80 text-sm md:text-base leading-relaxed">Direct WhatsApp Support</span></li>
</ul>
<Link href="/connect-with-us" className="w-full bg-white text-black py-3.5 md:py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase font-bold text-center hover:bg-white/90 hover:scale-[1.02] transition-all block">Connect With Us</Link>
</div>

{/* Therapy Yoga */}
<div className="bg-surface-container-low rounded-2xl md:rounded-[1.5rem] p-6 md:p-10 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group">
<div className="mb-6 md:mb-8">
<h3 className="font-display-lg text-2xl md:text-3xl text-on-surface mb-1 md:mb-2 font-medium">Therapy Yoga</h3>
<p className="font-body-md text-on-surface-variant text-sm md:text-base">Healing & Recovery</p>
</div>
<div className="mb-8 pb-8 md:mb-10 md:pb-10 border-b border-on-surface/10">
<span className="font-display-lg text-3xl md:text-4xl lg:text-5xl text-primary font-bold">₹10k-12k</span>
</div>
<ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-grow">
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">20 Specialized Classes</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Highly specialized attention</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Injury & pain management</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Custom rehabilitation flow</span></li>
</ul>
<Link href="/connect-with-us" className="w-full border border-primary text-primary py-3.5 md:py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors block">Connect With Us</Link>
</div>

{/* Couple / Family */}
<div className="bg-surface-container-low rounded-2xl md:rounded-[1.5rem] p-6 md:p-10 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group">
<div className="mb-6 md:mb-8">
<h3 className="font-display-lg text-2xl md:text-3xl text-on-surface mb-1 md:mb-2 font-medium">Couple / Family</h3>
<p className="font-body-md text-on-surface-variant text-sm md:text-base">Shared Journey</p>
</div>
<div className="mb-8 pb-8 md:mb-10 md:pb-10 border-b border-on-surface/10">
<span className="font-display-lg text-3xl md:text-4xl lg:text-5xl text-primary font-bold">₹10k-12k</span>
</div>
<ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-grow">
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">20 Shared Classes</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Practice with loved ones</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Flexible shared pacing</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Bonding & mutual growth</span></li>
</ul>
<Link href="/connect-with-us" className="w-full border border-primary text-primary py-3.5 md:py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors block">Connect With Us</Link>
</div>

{/* Prenatal Yoga */}
<div className="bg-surface-container-low rounded-2xl md:rounded-[1.5rem] p-6 md:p-10 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group md:col-span-2 lg:col-span-1">
<div className="mb-6 md:mb-8">
<h3 className="font-display-lg text-2xl md:text-3xl text-on-surface mb-1 md:mb-2 font-medium">Prenatal Yoga</h3>
<p className="font-body-md text-on-surface-variant text-sm md:text-base">Safe & Nurturing</p>
</div>
<div className="mb-8 pb-8 md:mb-10 md:pb-10 border-b border-on-surface/10">
<span className="font-display-lg text-4xl md:text-5xl text-primary font-bold">₹12,000</span>
<span className="text-on-surface-variant tracking-wider text-sm md:text-base"> / mo</span>
</div>
<ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-grow">
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">20 Classes per month</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Monday to Friday schedule</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Expert prenatal care & safety</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Birth preparation focus</span></li>
</ul>
<Link href="/connect-with-us" className="w-full border border-primary text-primary py-3.5 md:py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors block">Connect With Us</Link>
</div>

{/* Corporate Yoga - Wide Card */}
<div className="bg-surface-container-low rounded-2xl md:rounded-[1.5rem] p-6 md:p-12 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group md:col-span-2 lg:col-span-3">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center h-full">
<div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-on-surface/10 pb-6 lg:pb-0 lg:pr-8">
<div className="mb-4 md:mb-6">
<h3 className="font-display-lg text-2xl md:text-3xl text-on-surface mb-1 md:mb-2 font-medium">Corporate Yoga</h3>
<p className="font-body-md text-on-surface-variant text-sm md:text-base">Workplace Wellness</p>
</div>
<div className="mb-2">
<span className="font-display-lg text-2xl sm:text-3xl lg:text-5xl text-primary font-bold block mb-1 md:mb-2">Starting at ₹10,000</span>
<span className="text-on-surface-variant tracking-wider text-sm md:text-base">Custom packages available</span>
</div>
</div>
<div className="lg:col-span-7 lg:pl-4">
<ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">E.g., 12 Classes for ₹7,000</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Stress reduction & focus</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Posture correction for desks</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Custom team scheduling</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Team building through wellness</span></li>
<li className="flex items-start gap-3 md:gap-4"><span className="shrink-0 material-symbols-outlined text-primary text-[20px] md:text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Improved employee retention</span></li>
</ul>
<Link href="/connect-with-us" className="w-full md:w-auto border border-primary text-primary px-8 py-3.5 md:px-10 md:py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors block md:inline-block mt-2">Enquire For Your Team</Link>
</div>
</div>
</div>

</section>

<section className="mt-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="bg-surface-container-low rounded-2xl md:rounded-xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
<div className="max-w-xl text-center md:text-left">
<h2 className="font-headline-md text-2xl md:text-headline-md text-primary mb-3 md:mb-4">Your Peace of Mind is Guaranteed</h2>
<p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-6">We believe in the power of SriYogalaya. If you don't feel a profound shift in your practice within the first 30 days, we'll refund your investment in full—no questions asked.</p>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">verified_user</span>
<span className="font-body-md font-semibold text-sm md:text-base">100% Secure Checkout</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">sentiment_very_satisfied</span>
<span className="font-body-md font-semibold text-sm md:text-base">30-Day Money Back</span>
</div>
</div>
</div>
<div className="relative w-40 h-40 md:w-full md:h-auto md:flex-1 md:max-w-[33%] aspect-square rounded-full overflow-hidden border-4 md:border-8 border-white/50">
<img className="w-full h-full object-cover" title="A serene yoga instructor sitting in a meditative pose in a sun-drenched, high-end wellness studio with wooden floors and soft linen curtains. The lighting is ethereal and soft, emphasizing a sense of calm and luxury. The color palette is composed of soft beige, sage green, and warm sunlight. This visual represents the premium, peaceful atmosphere of SriYogalaya sanctuary." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMG3oWlw4iTXcgzDJPhaNORifSy1ZL3AIrT10bI5eLNxVarJ3g9tDvZ-YMLBqu1CphuWHAwvr923snaLaFL20dm_t32tZr9-f5L0Ge4GTuxy4OZ_09TSb74WfupuRGNSdUpXyeId6EhlEKwc5nwMCkKhWr9cK9paW2kfcfjP_-IU1rDEFI6G-llbWnAfyjeVBBPFoULT7Hekh4Ayzd0_gU037sg4I4OXEkeO9XcGZHGCGkvPtHO4D3NJRBW4Et_4SgmnwjdpIkow"/>
</div>
</div>
</section>

<section className="mt-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<h2 className="font-headline-md text-2xl md:text-headline-md text-center text-primary mb-8 md:mb-12">Compare All Sanctuary Plans</h2>

{/* Mobile: Stacked cards */}
<div className="md:hidden space-y-4">
{[
  { feature: "Live Zoom Sessions", group: "20 / mo", twelve: "12 / mo", personal: "20 / mo", prenatal: "20 / mo" },
  { feature: "WhatsApp Support", group: "Community", twelve: "WhatsApp", personal: "\u2713", prenatal: "\u2713" },
  { feature: "Personal Ritual Design", group: "\u2014", twelve: "\u2014", personal: "\u2713", prenatal: "\u2713" },
  { feature: "Anatomy Assessment", group: "\u2014", twelve: "\u2014", personal: "\u2713", prenatal: "\u2713" },
].map((row, i) => (
  <div key={i} className="bg-surface-container-low rounded-xl p-5">
    <h4 className="font-semibold text-on-surface text-sm mb-3">{row.feature}</h4>
    <div className="grid grid-cols-2 gap-3 text-xs">
      <div className="flex flex-col"><span className="text-on-surface-variant/60 mb-0.5">Group</span><span className="font-medium text-on-surface-variant">{row.group}</span></div>
      <div className="flex flex-col"><span className="text-on-surface-variant/60 mb-0.5">12 Classes</span><span className="font-medium text-on-surface-variant">{row.twelve}</span></div>
      <div className="flex flex-col"><span className="text-primary/60 mb-0.5">Personal</span><span className="font-bold text-primary">{row.personal}</span></div>
      <div className="flex flex-col"><span className="text-on-surface-variant/60 mb-0.5">Prenatal</span><span className="font-medium text-on-surface-variant">{row.prenatal}</span></div>
    </div>
  </div>
))}
</div>

{/* Desktop: Full table */}
<div className="hidden md:block overflow-x-auto">
<table className="w-full border-collapse">
<thead>
<tr className="border-b border-outline-variant">
<th className="p-6 text-left font-body-md font-semibold text-on-surface-variant">Features</th>
<th className="p-6 text-center font-body-md font-semibold">Group Classes</th>
<th className="p-6 text-center font-body-md font-semibold">12 Classes</th>
<th className="p-6 text-center font-body-md font-semibold text-primary">Personal</th>
<th className="p-6 text-center font-body-md font-semibold">Prenatal</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr>
<td className="p-6 font-body-md">Live Zoom Sessions</td>
<td className="p-6 text-center text-on-surface-variant">20 / mo</td>
<td className="p-6 text-center text-on-surface-variant">12 / mo</td>
<td className="p-6 text-center text-primary font-bold">20 / mo</td>
<td className="p-6 text-center text-on-surface-variant">20 / mo</td>
</tr>
<tr>
<td className="p-6 font-body-md">WhatsApp Support</td>
<td className="p-6 text-center text-on-surface-variant">Community Group</td>
<td className="p-6 text-center text-on-surface-variant">WhatsApp Support</td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
</tr>
<tr>
<td className="p-6 font-body-md">Personal Ritual Design</td>
<td className="p-6 text-center text-on-surface-variant">—</td>
<td className="p-6 text-center text-on-surface-variant">—</td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
</tr>
<tr>
<td className="p-6 font-body-md">Anatomy Assessment</td>
<td className="p-6 text-center text-on-surface-variant">—</td>
<td className="p-6 text-center text-on-surface-variant">—</td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
<td className="p-6 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="mt-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="bg-white shadow-sm border border-on-surface/5 p-6 md:p-8 rounded-xl italic text-on-surface-variant text-sm md:text-base">
<div className="flex text-secondary mb-3 md:mb-4">
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
                    "The Transformation Plan completely changed my relationship with my body. The 12 sessions per month are the perfect rhythm for consistent progress."
                    <div className="mt-4 md:mt-6 not-italic font-semibold text-on-surface text-sm">— Elena R., Creative Director</div>
</div>
<div className="bg-white shadow-sm border border-on-surface/5 p-6 md:p-8 rounded-xl italic text-on-surface-variant text-sm md:text-base">
<div className="flex text-secondary mb-3 md:mb-4">
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
                    "The Therapy Yoga plan was exactly what I needed for my lower back recovery. The instructors are incredibly knowledgeable and patient."
                    <div className="mt-4 md:mt-6 not-italic font-semibold text-on-surface text-sm">— Marcus T., Architect</div>
</div>
<div className="bg-white shadow-sm border border-on-surface/5 p-6 md:p-8 rounded-xl italic text-on-surface-variant text-sm md:text-base">
<div className="flex text-secondary mb-3 md:mb-4">
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
                    "WhatsApp support makes all the difference. I can ask questions about my form anytime and get a video response. Truly premium."
                    <div className="mt-4 md:mt-6 not-italic font-semibold text-on-surface text-sm">— Sarah J., Tech Founder</div>
</div>
</div>
</section>

<section className="mt-section-gap max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
<h2 className="font-headline-md text-2xl md:text-headline-md text-center text-primary mb-8 md:mb-12">Frequently Asked Questions</h2>
<div className="space-y-4 md:space-y-6">
<details className="group bg-surface-container-low rounded-xl p-5 md:p-6 cursor-pointer">
<summary className="list-none flex justify-between items-center font-body-lg font-semibold text-sm md:text-base">
                        Can I switch plans later?
                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[20px] md:text-[24px]">expand_more</span>
</summary>
<p className="mt-3 md:mt-4 text-on-surface-variant font-body-md text-sm md:text-base">Absolutely. You can upgrade or downgrade your sanctuary plan at any time through your dashboard. Adjustments will be reflected in your next billing cycle.</p>
</details>
<details className="group bg-surface-container-low rounded-xl p-5 md:p-6 cursor-pointer">
<summary className="list-none flex justify-between items-center font-body-lg font-semibold text-sm md:text-base">
                        How do the live Zoom sessions work?
                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[20px] md:text-[24px]">expand_more</span>
</summary>
<p className="mt-3 md:mt-4 text-on-surface-variant font-body-md text-sm md:text-base">Once you enroll, you'll gain access to our live schedule. You can book your preferred times, and you'll receive a secure Zoom link 15 minutes before the class starts.</p>
</details>
<details className="group bg-surface-container-low rounded-xl p-5 md:p-6 cursor-pointer">
<summary className="list-none flex justify-between items-center font-body-lg font-semibold text-sm md:text-base">
                        What equipment do I need?
                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[20px] md:text-[24px]">expand_more</span>
</summary>
<p className="mt-3 md:mt-4 text-on-surface-variant font-body-md text-sm md:text-base">For most classes, a quality yoga mat and a stable internet connection are all you need. For Therapy Yoga, we might suggest blocks or a strap, which we can provide guidance on purchasing.</p>
</details>
</div>
</section>

    </main>
  );
}
