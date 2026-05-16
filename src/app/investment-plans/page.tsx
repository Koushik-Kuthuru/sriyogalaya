import Link from "next/link";

export default function InvestmentPlans() {
  return (
    <main className="pt-32 pb-section-gap">
      
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-20">
<span className="font-label-caps text-[11px] text-secondary uppercase tracking-[0.3em] bg-secondary/10 px-6 py-2.5 rounded-full mb-8 inline-block font-bold">Elevate Your Practice</span>
<h1 className="font-display-lg text-5xl md:text-6xl lg:text-7xl text-on-surface mb-8 tracking-tight font-semibold">Choose Your Path to Inner Peace</h1>
<p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">Select a personalized coaching plan designed to nurture your body, mind, and spirit. From beginner basics to intensive one-on-one transformation.</p>
</section>

<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

{/* Single Session */}
<div className="bg-surface-container-low rounded-[1.5rem] p-8 md:p-10 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group">
<div className="mb-8">
<h3 className="font-display-lg text-3xl text-on-surface mb-2 font-medium">Single Session</h3>
<p className="font-body-md text-on-surface-variant">Introductory / Drop-in</p>
</div>
<div className="mb-10 pb-10 border-b border-on-surface/10">
<span className="font-display-lg text-5xl text-primary font-bold">₹700</span>
<span className="text-on-surface-variant tracking-wider"> / session</span>
</div>
<ul className="space-y-5 mb-10 flex-grow">
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">45-60 minutes duration</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Personalized Introduction</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Basic Form Assessment</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Goal Setting Discussion</span></li>
</ul>
<Link href="/connect-with-us" className="w-full border border-primary text-primary py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors block">Connect With Us</Link>
</div>

{/* Group Classes */}
<div className="bg-surface-container-low rounded-[1.5rem] p-8 md:p-10 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group">
<div className="mb-8">
<h3 className="font-display-lg text-3xl text-on-surface mb-2 font-medium">Group Classes</h3>
<p className="font-body-md text-on-surface-variant">Community Practice</p>
</div>
<div className="mb-10 pb-10 border-b border-on-surface/10">
<span className="font-display-lg text-5xl text-primary font-bold">₹3,000</span>
<span className="text-on-surface-variant tracking-wider"> / mo</span>
</div>
<ul className="space-y-5 mb-10 flex-grow">
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">20 Classes per month</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Monday to Friday sessions</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Access to community group</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Live Zoom instruction</span></li>
</ul>
<Link href="/connect-with-us" className="w-full border border-primary text-primary py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors block">Connect With Us</Link>
</div>

{/* Personal Training - Most Popular */}
<div className="bg-[#141414] text-white rounded-[1.5rem] p-8 md:p-10 flex flex-col shadow-2xl relative transform lg:scale-[1.03] z-10 border border-white/10 group hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-500 md:col-span-2 lg:col-span-1">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-lg">Most Popular</div>
<div className="mb-8">
<h3 className="font-display-lg text-3xl text-white mb-2 font-medium">Personal Training</h3>
<p className="font-body-md text-white/50">Complete Transformation</p>
</div>
<div className="mb-10 pb-10 border-b border-white/10">
<span className="font-display-lg text-5xl font-bold">₹10,000</span>
<span className="text-white/50 tracking-wider"> / mo</span>
</div>
<ul className="space-y-5 mb-10 flex-grow">
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-white/90 text-[22px] mt-0.5">check_circle</span> <span className="text-white/80 text-sm md:text-base leading-relaxed">20 Classes per month</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-white/90 text-[22px] mt-0.5">check_circle</span> <span className="text-white/80 text-sm md:text-base leading-relaxed">Monday to Friday schedule</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-white/90 text-[22px] mt-0.5">check_circle</span> <span className="text-white/80 text-sm md:text-base leading-relaxed">Custom designed to your needs</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-white/90 text-[22px] mt-0.5">check_circle</span> <span className="text-white/80 text-sm md:text-base leading-relaxed">1-on-1 Dedicated Coaching</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-white/90 text-[22px] mt-0.5">check_circle</span> <span className="text-white/80 text-sm md:text-base leading-relaxed">Direct WhatsApp Support</span></li>
</ul>
<Link href="/connect-with-us" className="w-full bg-white text-black py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase font-bold text-center hover:bg-white/90 hover:scale-[1.02] transition-all block">Connect With Us</Link>
</div>

{/* Therapy Yoga */}
<div className="bg-surface-container-low rounded-[1.5rem] p-8 md:p-10 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group">
<div className="mb-8">
<h3 className="font-display-lg text-3xl text-on-surface mb-2 font-medium">Therapy Yoga</h3>
<p className="font-body-md text-on-surface-variant">Healing & Recovery</p>
</div>
<div className="mb-10 pb-10 border-b border-on-surface/10">
<span className="font-display-lg text-4xl lg:text-5xl text-primary font-bold">₹10k-12k</span>
</div>
<ul className="space-y-5 mb-10 flex-grow">
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">20 Specialized Classes</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Highly specialized attention</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Injury & pain management</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Custom rehabilitation flow</span></li>
</ul>
<Link href="/connect-with-us" className="w-full border border-primary text-primary py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors block">Connect With Us</Link>
</div>

{/* Couple / Family */}
<div className="bg-surface-container-low rounded-[1.5rem] p-8 md:p-10 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group">
<div className="mb-8">
<h3 className="font-display-lg text-3xl text-on-surface mb-2 font-medium">Couple / Family</h3>
<p className="font-body-md text-on-surface-variant">Shared Journey</p>
</div>
<div className="mb-10 pb-10 border-b border-on-surface/10">
<span className="font-display-lg text-4xl lg:text-5xl text-primary font-bold">₹10k-12k</span>
</div>
<ul className="space-y-5 mb-10 flex-grow">
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">20 Shared Classes</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Practice with loved ones</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Flexible shared pacing</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Bonding & mutual growth</span></li>
</ul>
<Link href="/connect-with-us" className="w-full border border-primary text-primary py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors block">Connect With Us</Link>
</div>

{/* Prenatal Yoga */}
<div className="bg-surface-container-low rounded-[1.5rem] p-8 md:p-10 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group md:col-span-2 lg:col-span-1">
<div className="mb-8">
<h3 className="font-display-lg text-3xl text-on-surface mb-2 font-medium">Prenatal Yoga</h3>
<p className="font-body-md text-on-surface-variant">Safe & Nurturing</p>
</div>
<div className="mb-10 pb-10 border-b border-on-surface/10">
<span className="font-display-lg text-5xl text-primary font-bold">₹12,000</span>
<span className="text-on-surface-variant tracking-wider"> / mo</span>
</div>
<ul className="space-y-5 mb-10 flex-grow">
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">20 Classes per month</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Monday to Friday schedule</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Expert prenatal care & safety</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Birth preparation focus</span></li>
</ul>
<Link href="/connect-with-us" className="w-full border border-primary text-primary py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors block">Connect With Us</Link>
</div>

{/* Corporate Yoga - Wide Card */}
<div className="bg-surface-container-low rounded-[1.5rem] p-8 md:p-12 flex flex-col border border-on-surface/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 group md:col-span-2 lg:col-span-3">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
<div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-on-surface/10 pb-8 lg:pb-0 lg:pr-8">
<div className="mb-6">
<h3 className="font-display-lg text-3xl text-on-surface mb-2 font-medium">Corporate Yoga</h3>
<p className="font-body-md text-on-surface-variant">Workplace Wellness</p>
</div>
<div className="mb-2">
<span className="font-display-lg text-4xl lg:text-5xl text-primary font-bold block mb-2">Starting at ₹10,000</span>
<span className="text-on-surface-variant tracking-wider">Custom packages available</span>
</div>
</div>
<div className="lg:col-span-7 lg:pl-4">
<ul className="space-y-4 mb-8 flex-grow grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">E.g., 12 Classes for ₹7,000</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Stress reduction & focus</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Posture correction for desks</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Custom team scheduling</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Team building through wellness</span></li>
<li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-[22px] mt-0.5">check_circle</span> <span className="text-on-surface-variant text-sm md:text-base leading-relaxed">Improved employee retention</span></li>
</ul>
<Link href="/connect-with-us" className="w-full md:w-auto border border-primary text-primary px-10 py-4 rounded-xl font-label-caps tracking-[0.2em] text-[11px] uppercase text-center hover:bg-primary hover:text-white transition-colors inline-block mt-2">Enquire For Your Team</Link>
</div>
</div>
</div>

</section>

<section className="mt-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="bg-surface-container-low rounded-xl p-12 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-xl">
<h2 className="font-headline-md text-headline-md text-primary mb-4">Your Peace of Mind is Guaranteed</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">We believe in the power of SriYogalaya. If you don't feel a profound shift in your practice within the first 30 days, we'll refund your investment in full—no questions asked.</p>
<div className="flex gap-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
<span className="font-body-md font-semibold">100% Secure Checkout</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-3xl">sentiment_very_satisfied</span>
<span className="font-body-md font-semibold">30-Day Money Back</span>
</div>
</div>
</div>
<div className="relative w-full md:w-1/3 aspect-square rounded-full overflow-hidden border-8 border-white/50">
<img className="w-full h-full object-cover" title="A serene yoga instructor sitting in a meditative pose in a sun-drenched, high-end wellness studio with wooden floors and soft linen curtains. The lighting is ethereal and soft, emphasizing a sense of calm and luxury. The color palette is composed of soft beige, sage green, and warm sunlight. This visual represents the premium, peaceful atmosphere of SriYogalaya sanctuary." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMG3oWlw4iTXcgzDJPhaNORifSy1ZL3AIrT10bI5eLNxVarJ3g9tDvZ-YMLBqu1CphuWHAwvr923snaLaFL20dm_t32tZr9-f5L0Ge4GTuxy4OZ_09TSb74WfupuRGNSdUpXyeId6EhlEKwc5nwMCkKhWr9cK9paW2kfcfjP_-IU1rDEFI6G-llbWnAfyjeVBBPFoULT7Hekh4Ayzd0_gU037sg4I4OXEkeO9XcGZHGCGkvPtHO4D3NJRBW4Et_4SgmnwjdpIkow"/>
</div>
</div>
</section>

<section className="mt-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-x-auto">
<h2 className="font-headline-md text-headline-md text-center text-primary mb-12">Compare All Sanctuary Plans</h2>
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
</section>

<section className="mt-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-xl italic text-on-surface-variant">
<div className="flex text-secondary mb-4">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
                    "The Transformation Plan completely changed my relationship with my body. The 12 sessions per month are the perfect rhythm for consistent progress."
                    <div className="mt-6 not-italic font-semibold text-on-surface">— Elena R., Creative Director</div>
</div>
<div className="glass-card p-8 rounded-xl italic text-on-surface-variant">
<div className="flex text-secondary mb-4">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
                    "The Therapy Yoga plan was exactly what I needed for my lower back recovery. The instructors are incredibly knowledgeable and patient."
                    <div className="mt-6 not-italic font-semibold text-on-surface">— Marcus T., Architect</div>
</div>
<div className="glass-card p-8 rounded-xl italic text-on-surface-variant">
<div className="flex text-secondary mb-4">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
                    "WhatsApp support makes all the difference. I can ask questions about my form anytime and get a video response. Truly premium."
                    <div className="mt-6 not-italic font-semibold text-on-surface">— Sarah J., Tech Founder</div>
</div>
</div>
</section>

<section className="mt-section-gap max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
<h2 className="font-headline-md text-headline-md text-center text-primary mb-12">Frequently Asked Questions</h2>
<div className="space-y-6">
<details className="group bg-surface-container-low rounded-xl p-6 cursor-pointer">
<summary className="list-none flex justify-between items-center font-body-lg font-semibold">
                        Can I switch plans later?
                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-4 text-on-surface-variant font-body-md">Absolutely. You can upgrade or downgrade your sanctuary plan at any time through your dashboard. Adjustments will be reflected in your next billing cycle.</p>
</details>
<details className="group bg-surface-container-low rounded-xl p-6 cursor-pointer">
<summary className="list-none flex justify-between items-center font-body-lg font-semibold">
                        How do the live Zoom sessions work?
                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-4 text-on-surface-variant font-body-md">Once you enroll, you'll gain access to our live schedule. You can book your preferred times, and you'll receive a secure Zoom link 15 minutes before the class starts.</p>
</details>
<details className="group bg-surface-container-low rounded-xl p-6 cursor-pointer">
<summary className="list-none flex justify-between items-center font-body-lg font-semibold">
                        What equipment do I need?
                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-4 text-on-surface-variant font-body-md">For most classes, a quality yoga mat and a stable internet connection are all you need. For Therapy Yoga, we might suggest blocks or a strap, which we can provide guidance on purchasing.</p>
</details>
</div>
</section>

    </main>
  );
}
