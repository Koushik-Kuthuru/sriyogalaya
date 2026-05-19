export default function ConnectWithUs() {
  return (
    <main className="pt-16 md:pt-32 pb-12 md:pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      
      {/* Header */}
      <div className="text-center mb-8 md:mb-16">
        <span className="font-label-caps text-secondary text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6 block">Get In Touch</span>
        <h1 className="font-display-lg text-3xl sm:text-4xl md:text-6xl text-primary font-semibold tracking-tight leading-tight">Connect With Us</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-surface-container-low rounded-2xl md:rounded-[2rem] p-6 sm:p-10 md:p-14 shadow-2xl shadow-primary/5 border border-on-surface/5 hover:border-primary/20 transition-all duration-500">
          <h2 className="font-display-lg text-2xl md:text-3xl mb-6 md:mb-8 font-medium">Send a Whisper</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="font-label-caps text-xs tracking-widest text-on-surface-variant font-bold uppercase ml-1">Your Name</label>
                <input className="bg-white border border-outline/10 focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-xl py-4 px-6 text-body-md transition-all shadow-sm" placeholder="Aditi Sharma" type="text"/>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-label-caps text-xs tracking-widest text-on-surface-variant font-bold uppercase ml-1">WhatsApp Number</label>
                <input className="bg-white border border-outline/10 focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-xl py-4 px-6 text-body-md transition-all shadow-sm" placeholder="+91 9491803261" type="tel"/>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-label-caps text-xs tracking-widest text-on-surface-variant font-bold uppercase ml-1">Inquiry Type</label>
              <select className="bg-white border border-outline/10 focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-xl py-4 px-6 text-body-md appearance-none shadow-sm cursor-pointer">
                <option>Private Sessions</option>
                <option>Corporate Wellness</option>
                <option>General Support</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-label-caps text-xs tracking-widest text-on-surface-variant font-bold uppercase ml-1">Message</label>
              <textarea className="bg-white border border-outline/10 focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-xl py-4 px-6 text-body-md transition-all resize-none shadow-sm" placeholder="Share your intentions..." rows={5}></textarea>
            </div>
            <button className="w-full bg-primary text-white py-5 rounded-xl font-label-caps text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
              Invoke Connection
            </button>
          </form>
        </div>

        {/* Info Panel */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="bg-[#1a1a1a] text-white rounded-2xl md:rounded-[2rem] p-6 sm:p-10 flex flex-col justify-between h-full relative overflow-hidden shadow-2xl group border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -mr-32 -mt-32 blur-3xl transition-transform duration-1000 group-hover:scale-150"></div>
            <div className="relative z-10">
              <h3 className="font-display-lg text-3xl mb-4 font-medium">Digital Sanctuary</h3>
              <p className="font-body-md text-white/70 mb-8 font-light leading-relaxed">Connect with our wellness curators from anywhere in the world to find the practice that resonates with your current path.</p>
              <a className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-3 rounded-full font-label-caps text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all" href="https://wa.me/919491803261">
                <span className="material-symbols-outlined text-[18px]">chat</span>
                WhatsApp Us
              </a>
            </div>
            <div className="absolute -bottom-12 -right-12 opacity-5 transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-110">
              <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'wght' 100" }}>spa</span>
            </div>
          </div>

          <div className="bg-surface-container-low text-on-surface rounded-2xl md:rounded-[2rem] p-6 sm:p-10 border border-on-surface/5 shadow-sm">
            <h3 className="font-display-lg text-2xl md:text-3xl mb-6 md:mb-8 font-medium">Sanctuary Hours</h3>
            <ul className="space-y-4 font-body-md mb-10 text-on-surface-variant font-light">
              <li className="flex justify-between border-b border-on-surface/5 pb-4">
                <span>Monday — Friday</span>
                <span className="font-medium text-on-surface">06:00 — 21:00</span>
              </li>
              <li className="flex justify-between border-b border-on-surface/5 pb-4">
                <span>Saturday</span>
                <span className="font-medium text-on-surface">08:00 — 18:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="font-medium text-secondary">Closed for Rest</span>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <a className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/5 hover:bg-primary/10 text-primary transition-all hover:scale-110" href="https://sriyogalaya.com">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/5 hover:bg-primary/10 text-primary transition-all hover:scale-110" href="https://www.instagram.com/sri.yogini/" aria-label="Instagram">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/5 hover:bg-primary/10 text-primary transition-all hover:scale-110" href="https://wa.me/919491803261">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16 md:mt-32">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-display-lg text-2xl md:text-4xl mb-4 font-medium">Common Enquiries</h2>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto bg-surface-container-low p-6 sm:p-10 md:p-14 rounded-2xl md:rounded-[2rem] border border-on-surface/5 shadow-sm">
          <div className="space-y-4">
            <h4 className="font-display-lg text-xl text-primary font-medium">Do you offer beginner classes?</h4>
            <p className="font-body-md text-on-surface-variant font-light leading-relaxed">Yes, our 'Foundations of Breath' series is designed specifically for those stepping onto the mat for the first time.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-display-lg text-xl text-primary font-medium">What should I bring?</h4>
            <p className="font-body-md text-on-surface-variant font-light leading-relaxed">We provide premium cork mats and organic cotton bolsters, but you are welcome to bring your personal equipment.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-display-lg text-xl text-primary font-medium">Can I book private retreats?</h4>
            <p className="font-body-md text-on-surface-variant font-light leading-relaxed">Absolutely. We curate bespoke spiritual retreats for groups of 4 to 12 people at our coastal sanctuary locations.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-display-lg text-xl text-primary font-medium">Cancellation policy?</h4>
            <p className="font-body-md text-on-surface-variant font-light leading-relaxed">We request a 24-hour notice for cancellations to allow others to join the practice. Full refunds are provided within this window.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-32">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 md:mb-10 gap-4 md:gap-6">
          <div>
            <h2 className="font-display-lg text-2xl md:text-4xl mb-2 font-medium">Visual Stillness</h2>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant font-light">Follow our daily practice @sri.yogini</p>
          </div>
          <a className="font-label-caps text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-[0.2em] hover:text-primary transition-colors flex items-center" href="https://www.instagram.com/sri.yogini/">
            View Gallery
            <span className="material-symbols-outlined text-[16px] ml-2">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="aspect-square bg-surface-variant rounded-xl md:rounded-2xl overflow-hidden group shadow-lg shadow-primary/5">
            <img alt="Yoga Practice" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s]" title="Sri Devi guiding adjustments in a serene shala environment." src="/images/IMG_0542.jpeg"/>
          </div>
          <div className="aspect-square bg-surface-variant rounded-xl md:rounded-2xl overflow-hidden group shadow-lg shadow-primary/5">
            <img alt="Morning Meditation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s]" title="Sri Devi practicing outdoor breathing and alignment." src="/images/IMG_1181.jpeg"/>
          </div>
          <div className="aspect-square bg-surface-variant rounded-xl md:rounded-2xl overflow-hidden group shadow-lg shadow-primary/5">
            <img alt="Wellness Detail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s]" title="Authentic outdoor group session in a high-end nature setting." src="/images/IMG_20250709_103014_Original.jpeg"/>
          </div>
          <div className="aspect-square bg-surface-variant rounded-xl md:rounded-2xl overflow-hidden group shadow-lg shadow-primary/5">
            <img alt="Zen Garden" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s]" title="Sri Devi holding an award presented by ICMAI." src="/images/1b2b7f45-c147-44d2-bae3-9b110a0c7460.jpeg"/>
          </div>
        </div>
      </section>

    </main>
  );
}
