"use client";

import Link from "next/link";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { MarketInfo } from "@/components/landing/MarketInfo";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";
import { FakeContact } from "@/components/landing/FakeContact";
import { ContactBanner } from "@/components/landing/ContactBanner";
import { SalesSection } from "@/components/landing/SalesSection";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";

export default function MokkipalveluPage() {
  return (
    <>
      <Hero />
      <Services />
      <ContactBanner />
      <MarketInfo />
      <Testimonials />
      <Pricing />
      <FakeContact />
      <Contact />
      <SalesSection />
      <FAQ />

      {/* FINAL CONVERSION SECTION */}
      <section className="pt-12 pb-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10 transform skew-y-3 origin-top-right scale-110 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
            Valmis aloittamaan kasvun?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Älä jätä kauppoja kilpailijoillesi. Ota ensimmäinen askel kohti <span className="text-white font-bold">100/100 suorituskykyä</span> jo tänään.
          </p>
          <Link 
            href="/tarjous"
            className="inline-block bg-white text-slate-950 font-black text-xl md:text-2xl uppercase tracking-tighter py-6 px-12 rounded-2xl hover:bg-slate-100 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-none hover:translate-y-1 transform active:scale-95"
          >
            PYYDÄ TARJOUS – ALOITA TÄSTÄ
          </Link>
        </div>
      </section>

      <footer className="w-full py-12 text-center bg-stone-900 text-stone-400">
        <div className="container mx-auto px-4">
          <p className="text-lg font-bold text-white mb-4 uppercase tracking-widest italic">Sivumaakarit</p>
          <p className="max-w-xl mx-auto mb-8 text-slate-400 text-sm">
            Me haluamme, että sinun kova työsi ja ammattitaitosi löytyvät juuri sillä sekunnilla, kun joku tarvitsee apuasi.
          </p>
          <div className="h-px bg-white/10 w-24 mx-auto mb-8"></div>
          <p className="text-xs">© {new Date().getFullYear()} Sivumaakarit. Kaikki oikeudet pidätetään.</p>
        </div>
      </footer>
    </>
  );
}
