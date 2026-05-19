import Link from "next/link";

export default function TheWellnessJournal() {
  return (
    <main className="pt-12 md:pt-16 pb-section-gap bg-surface">
      
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-0 pb-6 md:pb-12">
<div className="relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-surface-container-low min-h-[500px] md:min-h-[600px] flex items-center shadow-2xl shadow-primary/10 group">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[20s]" title="A serene yoga instructor practicing a gentle backbend in a sun-drenched studio filled with natural light and soft shadows. The atmosphere is calm and editorial, featuring a muted palette of warm beiges, soft creams, and hints of sage green. The lighting is diffused, emphasizing the peaceful and grounded mood of the space, while the composition feels spacious and intentional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcS6GoQUKA_lpoCy7exYo-2UrHxC2gSItiu45S-8P9kR9yLqhRZ_Z2PCGGuJxs5JRa_CwlDXqMaT34KdA35ZxYhqQyrsnvxq-iqWzSz2EAkNGJx5zYcuja0yvNtHhvZQgjY52ZukQoLToZNgGPNqIdVvjj3sycjpAepDP1aJWihiYMJh3s2WerPn9_KJmtbNg5OQjz7_YMhtAD_0HX6CKI1DlTKXqfKH3H6J2xCeruzmXzJzCdicMNVQb-8oGt4PGWznjlHBKQRw"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
</div>
<div className="relative z-10 w-full md:w-3/4 lg:w-1/2 p-6 md:p-12 lg:p-20">
<span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-2 md:px-6 md:py-2 rounded-full font-label-caps text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8 border border-white/30 uppercase">Editor's Pick</span>
<h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl text-white mb-6 md:mb-8 drop-shadow-lg font-semibold tracking-tight leading-tight">Finding Stillness in the Morning Light</h1>
<p className="font-body-lg text-base md:text-lg text-white/90 mb-8 md:mb-10 max-w-md leading-relaxed font-light drop-shadow-md">An exploration of how rising with the sun and a dedicated 15-minute practice can transform your neurological response to stress throughout the day.</p>
<Link className="inline-flex items-center bg-white text-black px-6 py-4 md:px-8 md:py-4 rounded-full font-label-caps text-[10px] md:text-[11px] tracking-[0.2em] font-bold hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 transition-all uppercase" href="/the-wellness-journal/blogs/finding-stillness-in-the-morning-light">
  Read Full Story
</Link>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 md:mb-20">
<div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0">
<div className="flex overflow-x-auto pb-4 -mx-margin-mobile px-margin-mobile md:pb-0 md:-mx-0 md:px-0 lg:flex-wrap gap-3 md:gap-4 scrollbar-hide">
<button className="whitespace-nowrap px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-primary text-white font-label-caps text-[10px] md:text-[11px] font-bold tracking-widest uppercase transition-all shadow-lg shadow-primary/20">All Stories</button>
<button className="whitespace-nowrap px-6 py-3 md:px-8 md:py-3.5 rounded-full border border-outline/20 hover:border-primary/30 hover:bg-primary/5 text-on-surface-variant font-label-caps text-[10px] md:text-[11px] font-bold tracking-widest uppercase transition-all">Yoga Tips</button>
<button className="whitespace-nowrap px-6 py-3 md:px-8 md:py-3.5 rounded-full border border-outline/20 hover:border-primary/30 hover:bg-primary/5 text-on-surface-variant font-label-caps text-[10px] md:text-[11px] font-bold tracking-widest uppercase transition-all">Meditation</button>
<button className="whitespace-nowrap px-6 py-3 md:px-8 md:py-3.5 rounded-full border border-outline/20 hover:border-primary/30 hover:bg-primary/5 text-on-surface-variant font-label-caps text-[10px] md:text-[11px] font-bold tracking-widest uppercase transition-all">Wellness Advice</button>
<button className="whitespace-nowrap px-6 py-3 md:px-8 md:py-3.5 rounded-full border border-outline/20 hover:border-primary/30 hover:bg-primary/5 text-on-surface-variant font-label-caps text-[10px] md:text-[11px] font-bold tracking-widest uppercase transition-all">Breathing</button>
</div>
<div className="relative w-full lg:w-96 mt-2 lg:mt-0">
<span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-outline text-[20px] md:text-[24px]">search</span>
<input className="w-full pl-14 pr-6 py-3.5 md:pl-16 md:py-4 bg-surface-container-low border border-outline/10 rounded-full font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-inner text-sm md:text-base" placeholder="Search the journal..." type="text"/>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap" id="stories">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

<Link href="/the-wellness-journal/blogs/the-art-of-mindful-consumption" className="col-span-12 md:col-span-8 bg-surface-container-low rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm shadow-primary/5 group border border-on-surface/5 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 hover:-translate-y-1 transition-all duration-500 block">
<div className="relative aspect-video overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" title="A close-up of a person's hands resting in a meditative mudra on their knees, set against a backdrop of soft-focus greenery and warm sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDNaSSb83djPnVrFjJ5qce92DD1swb4vmcvKKdIreqlywh_64iLM7LnMJsas_n81UHQAtpx2dSYoB5CMEm3UBSqx3qwvjQbo43peSwKZCryHpJihj7A9ebEyD9gbI3Y6opVsaf6D-3rs0aJd6eWPre_3f-rJ6KSTCjrs88uq_rvp2r3mVdpqQsIO7yukAjrZA7AgfWP57skR1vUxnQpUe6bbJoCt9vaqOzzpNEE2GXxc-iILi430DhakHHhIYPnnnrWkT7caDPfw"/>
</div>
<div className="p-6 md:p-10">
<span className="text-secondary font-label-caps text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block">Wellness Advice</span>
<h3 className="font-display-lg text-2xl sm:text-3xl md:text-4xl text-on-surface mb-4 md:mb-6 font-medium leading-tight">The Art of Mindful Consumption: Living with Less</h3>
<p className="font-body-md text-sm md:text-lg text-on-surface-variant mb-6 md:mb-8 line-clamp-2 md:line-clamp-3 font-light">How reducing digital clutter and physical possessions can create a spacious mind ready for deeper meditation and daily gratitude.</p>
<div className="flex items-center space-x-3 md:space-x-4 border-t border-on-surface/5 pt-5 md:pt-6">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
<img alt="Sri Devi" className="w-full h-full object-cover" src="/images/IMG_0509.jpeg"/>
</div>
<div className="text-on-surface font-label-caps text-xs md:text-sm font-bold">Sri Devi</div>
<div className="text-outline font-label-caps text-[10px] md:text-xs tracking-widest uppercase ml-auto">OCT 12, 2024</div>
</div>
</div>
</Link>

<Link href="/the-wellness-journal/blogs/pranayama-for-deep-sleep" className="col-span-12 md:col-span-4 bg-surface-container-low rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm shadow-primary/5 group border border-on-surface/5 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 hover:-translate-y-1 transition-all duration-500 block">
<div className="relative aspect-video md:aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" title="A minimalist arrangement of wellness items including a textured sage green yoga mat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT0z0DMQgBGPJExJQCRewfe6AKunczY2FUv3HJxDKcdSgI6BAZFxtpXvAV2qe3inXlr9cVNtqybEZVfBDuJCFmo9NOJ85VZf1N9vRDFsfvqQ2z45UoV8VTkHfXq9hqD98uf0m2uq1ZuqzQPICzli8Rf-g7oNay10cZcyA0qeqNshc5o9ZB8AdWfZq4kTVD6Izi29MbFYsj-4XKrdgAK7PT3sa9b1_SC6h7IQw2q8vx5Wl_fZ1HBnPBILNKJsm0-oJqOGuabFssvw"/>
</div>
<div className="p-6 md:p-8">
<span className="text-secondary font-label-caps text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block">Breathing</span>
<h3 className="font-display-lg text-xl md:text-2xl text-on-surface mb-3 md:mb-4 font-medium leading-tight">Pranayama for Deep Sleep</h3>
<p className="font-body-md text-sm md:text-base text-on-surface-variant line-clamp-2 md:line-clamp-3 font-light">A guide to the three-part breath technique designed to calm the nervous system before rest.</p>
</div>
</Link>

<Link href="/the-wellness-journal/blogs/the-silence-between-thoughts" className="col-span-12 md:col-span-4 bg-surface-container-low rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm shadow-primary/5 group border border-on-surface/5 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 hover:-translate-y-1 transition-all duration-500 block">
<div className="relative aspect-video md:aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" title="A serene landscape showing a calm lake reflecting a soft pink and orange sunrise with mountains" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAjqgCXUeh3oMz3lo8TATYXUSAJBV36cm6hKdqJuBdAwiX3GGV8fdC4c-wJfTdr_uVn6W8hwf9f7cOvF_uugI8S5WsjQbSrflYfSsPzva2C1ZLr5Jdv_ebqmISXTfrmVr-p05ZR1SP7l2jzzzg1m3KBQeUCJaBLBpMBXDUxqsnDKM-hNJsPn2sI8MKZXQzmYvcnWsirRp0Wv0uTWs5747R_-Q9JWFM5-dd-nEraYfuM1ICOHT1cEbV-GPQlzt_Fq51tBorFWgCBA"/>
</div>
<div className="p-6 md:p-8">
<span className="text-secondary font-label-caps text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block">Meditation</span>
<h3 className="font-display-lg text-xl md:text-2xl text-on-surface mb-3 md:mb-4 font-medium leading-tight">The Silence Between Thoughts</h3>
<p className="font-body-md text-sm md:text-base text-on-surface-variant line-clamp-2 md:line-clamp-3 font-light">Understanding the gap in conscious experience where true presence resides and how to cultivate it.</p>
</div>
</Link>

<Link href="/the-wellness-journal/blogs/establishing-a-ritual-space" className="col-span-12 md:col-span-8 flex flex-col md:flex-row bg-surface-container-low rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm shadow-primary/5 group border border-on-surface/5 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 hover:-translate-y-1 transition-all duration-500 block">
<div className="md:w-1/2 overflow-hidden aspect-video md:aspect-auto">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" title="An ethereal image of incense smoke curling elegantly in a minimalist room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCegPxVyKn_oWai-vOBWMtVRzBPlCKvONl_AMDM4pAlrVGqXlyzhVs5Cl80J0JVLh6lYZhzHHAyetYaZ4y-u7OmQRoVYgJZbEgFpPgigwYdXR_EubMVCOCW75VONL0aEROzCZQBbxd23elinQg2hjdBgJ7J5aftBEZ699c3PUU3zXEGmSiN68NuYeoxi9TJHKWvwTez2x9A_wT-ADVEtGaEu6iJZ23X94yxVfRGIX1-2l361U9NoGDEgRvXXvx8nAo8fZNfn0X64w"/>
</div>
<div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
<span className="text-secondary font-label-caps text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block">Wellness Advice</span>
<h3 className="font-display-lg text-2xl md:text-3xl text-on-surface mb-3 md:mb-4 font-medium leading-tight">Establishing a Ritual Space</h3>
<p className="font-body-md text-sm md:text-lg text-on-surface-variant mb-6 md:mb-8 font-light leading-relaxed">Learn how to create a physical sanctuary in your home that signals to your mind that it is time to slow down.</p>
<span className="text-primary font-label-caps text-[10px] md:text-xs tracking-widest font-bold uppercase inline-flex items-center group-hover:translate-x-2 transition-transform">Read Full Story <span className="material-symbols-outlined ml-2 text-[16px] md:text-[18px]">arrow_forward</span></span>
</div>
</Link>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
<div className="bg-[#141414] rounded-2xl md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full -mr-32 md:-mr-48 -mt-32 md:-mt-48 blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-secondary/20 rounded-full -ml-24 md:-ml-32 -mb-24 md:-mb-32 blur-3xl"></div>
<div className="relative z-10">
<h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 font-semibold leading-tight">Join the Inner Sanctuary</h2>
<p className="font-body-lg text-sm md:text-lg text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">Receive a weekly curated letter featuring one meditation, one movement practice, and one recipe for a balanced life.</p>
<form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 md:gap-4">
<input className="flex-1 px-6 py-4 md:px-8 md:py-5 bg-white/5 border border-white/20 rounded-full font-body-md text-white focus:outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-white/40 text-sm md:text-base" placeholder="+91 9491803261" type="tel"/>
<button className="bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-label-caps text-[10px] md:text-[11px] font-bold tracking-[0.2em] hover:bg-white/90 hover:scale-105 transition-all uppercase">Subscribe</button>
</form>
</div>
</div>
</section>

    </main>
  );
}
