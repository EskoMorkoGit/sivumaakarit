import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export function Contact() {
    return (
        <>
            {/* Transition Guide: Bouncing arrow and glow spill placed AT THE SEAM */}
            <div className="w-full h-0 relative z-40 flex justify-center pointer-events-none">
                <div className="absolute -top-32 flex flex-col items-center">
                    {/* The glow spill extending upwards */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/30 blur-[100px] rounded-full opacity-60 z-0"></div>
                    
                    <div className="animate-bounce flex flex-col items-center gap-3 relative z-10">
                        <span className={`${playfair.className} text-blue-400 font-bold text-sm md:text-base tracking-[0.2em] drop-shadow-xl bg-stone-900 px-6 py-3 rounded-full border border-blue-500/50 shadow-[0_10px_30px_rgba(59,130,246,0.5)] backdrop-blur-sm pointer-events-auto cursor-pointer hover:bg-stone-800 transition-colors`}
                              onClick={(e) => {
                                  e.preventDefault();
                                  document.getElementById("sivumaakarit-bridge")?.scrollIntoView({ behavior: "smooth", block: "start" });
                              }}>
                            Totuus löytyy täältä
                        </span>
                        <svg className="w-12 h-12 md:w-14 md:h-14 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* The Fracture / Bridge Effect Start */}
            <div className="w-full relative bg-stone-900 text-white py-16 md:py-32 overflow-hidden" id="sivumaakarit-bridge">
                {/* Diagonal slash background */}
                <div className="absolute inset-0 bg-blue-900/40 transform -skew-y-3 origin-top-left scale-110 z-0 border-b border-blue-500/30"></div>
                
                {/* Glowing radial gradient behind the text setup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                    <div className="text-center mb-16 md:mb-24">
                        {/* GHOST SITE ALERT SECTION - Relocated for maximum impact */}
                        <div className="relative mx-auto max-w-4xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Shadow floor */}
                            <div className="absolute inset-0 bg-blue-900/40 translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 blur-xl"></div>
                            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>
                            
                            <div className="relative bg-yellow-400 text-black p-8 md:p-16 border-4 border-black shadow-2xl">
                                <div className={`${playfair.className} absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-yellow-400 px-8 py-3 font-bold text-lg md:text-xl tracking-[0.2em] shadow-xl rotate-2 ring-4 ring-yellow-400`}>
                                    Varoitus
                                </div>
                                
                                <h2 className={`${playfair.className} text-[10vw] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter leading-none mt-6 break-words hyphens-auto uppercase italic`}>
                                    STOP! <br /> OLET <br className="sm:hidden" /> KUMMITUS&shy;SIVUILLA <br className="hidden sm:block" />
                                    <span className={`${inter.className} text-xl md:text-3xl font-light block mt-6 opacity-90 normal-case not-italic`}>
                                        – tätä yritystä, <span className="underline decoration-4 decoration-black/20 text-black/80 font-bold">{siteConfig.name}</span>, ei ole olemassa. 👻
                                    </span>
                                </h2>
                                
                                <div className="max-w-3xl mx-auto">
                                    <p className={`${inter.className} text-xl md:text-2xl font-bold mb-10 leading-relaxed`}>
                                        Pahoittelut, jos ehdit jo innostua – meiltä ei saa lumitöitä, vaan pelkkää koodia. <br className="hidden md:block" />
                                        Mutta huomasitko? <span className="bg-black text-yellow-400 px-3 py-1 rotate-1 inline-block mt-2 font-bold">Melkein jo tilasit palvelun.*</span>
                                    </p>
                                    
                                    <div className="bg-white/30 backdrop-blur-sm p-8 md:p-10 border-l-[12px] border-black text-left shadow-inner">
                                        <p className={`${inter.className} text-lg md:text-xl italic font-medium text-black/80`}>
                                            Se on kiistaton todiste siitä, että Sivumaakareiden Tehorunko-nettisivu toimii. 
                                            Me emme korjaa mökkejä, me korjaamme yrityksesi digitaalisen mökkitien.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            {/* Highly Visual "Proof" Section - Styled to match the sales card (White background, dark text) */}
                    <div className="relative mt-32 mb-20 max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-white/5 blur-3xl transform scale-95 rounded-[3rem]"></div>
                        
                        <div className="relative bg-white border border-slate-200 rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden ring-1 ring-slate-900/5 text-center">
                            {/* Decorative top bar like the sales card */}
                            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
                            
                            {/* Sivumaakarit Branding Header - Larger logo */}
                            <div className="flex flex-col items-center mb-12 gap-6">
                                <Image
                                    src="/images/sivumaakarit.webp"
                                    alt="Sivumaakarit Logo"
                                    width={240}
                                    height={80}
                                    className="h-20 md:h-28 w-auto object-contain drop-shadow-sm"
                                />
                                <h3 className={`${playfair.className} text-slate-800 font-bold tracking-[0.3em] uppercase text-sm md:text-base flex items-center justify-center gap-6`}>
                                    <span className="w-16 h-px bg-slate-200 hidden md:block"></span>
                                    Kotisivujen varmistettu suorituskyky
                                    <span className="w-16 h-px bg-slate-200 hidden md:block"></span>
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center justify-center">
                                {/* Metric 1: Hakukonenäkyvyys */}
                                <div className="flex flex-col items-center group">
                                    <div className="w-28 h-28 mb-6 relative flex items-center justify-center scale-125">
                                        {/* Golden Wreath SVG - More visible on white */}
                                        <svg className="absolute inset-0 w-full h-full text-amber-500/30" viewBox="0 0 100 100">
                                            <g className="opacity-100">
                                                {[...Array(12)].map((_, i) => (
                                                    <path key={i} d="M50 8 L53 15 L47 15 Z" transform={`rotate(${i * 30} 50 50)`} fill="currentColor" />
                                                ))}
                                                <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                        {/* Main Circle */}
                                        <svg className="w-20 h-20 text-slate-100" viewBox="0 0 36 36">
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                        </svg>
                                        <svg className="w-20 h-20 text-amber-500 absolute top-4 left-4 transform -rotate-90 drop-shadow-[0_4px_12px_rgba(245,158,11,0.3)]" viewBox="0 0 36 36">
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="100, 100" />
                                        </svg>
                                        <span className="absolute text-4xl font-black text-slate-900 tracking-tighter italic">100</span>
                                    </div>
                                    <span className="text-slate-800 font-black text-sm md:text-base uppercase tracking-widest group-hover:text-amber-600 transition-colors">Hakukonenäkyvyys</span>
                                </div>

                                {/* Metric 2: Yhteensopivuus */}
                                <div className="flex flex-col items-center group">
                                    <div className="w-28 h-28 mb-6 relative flex items-center justify-center scale-125">
                                        <svg className="absolute inset-0 w-full h-full text-amber-500/30" viewBox="0 0 100 100">
                                            <g className="opacity-100">
                                                {[...Array(12)].map((_, i) => (
                                                    <path key={i} d="M50 8 L53 15 L47 15 Z" transform={`rotate(${i * 30} 50 50)`} fill="currentColor" />
                                                ))}
                                                <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                        <svg className="w-20 h-20 text-slate-100" viewBox="0 0 36 36">
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                        </svg>
                                        <svg className="w-20 h-20 text-amber-500 absolute top-4 left-4 transform -rotate-90 drop-shadow-[0_4px_12px_rgba(245,158,11,0.3)]" viewBox="0 0 36 36">
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="100, 100" />
                                        </svg>
                                        <span className={`${playfair.className} absolute text-4xl font-black text-slate-900 tracking-tighter italic`}>100</span>
                                    </div>
                                    <span className={`${inter.className} text-slate-800 font-bold text-sm md:text-base uppercase tracking-widest group-hover:text-amber-600 transition-colors`}>Yhteensopivuus</span>
                                </div>

                                {/* Metric 3: Laatu */}
                                <div className="flex flex-col items-center group">
                                    <div className="w-28 h-28 mb-6 relative flex items-center justify-center scale-125">
                                        <svg className="absolute inset-0 w-full h-full text-amber-500/30" viewBox="0 0 100 100">
                                            <g className="opacity-100">
                                                {[...Array(12)].map((_, i) => (
                                                    <path key={i} d="M50 8 L53 15 L47 15 Z" transform={`rotate(${i * 30} 50 50)`} fill="currentColor" />
                                                ))}
                                                <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                        <svg className="w-20 h-20 text-slate-100" viewBox="0 0 36 36">
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                        </svg>
                                        <svg className="w-20 h-20 text-amber-500 absolute top-4 left-4 transform -rotate-90 drop-shadow-[0_4px_12px_rgba(245,158,11,0.3)]" viewBox="0 0 36 36">
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="100, 100" />
                                        </svg>
                                        <span className="absolute text-4xl font-black text-slate-900 tracking-tighter font-sans">100</span>
                                    </div>
                                    <span className="text-slate-800 font-black text-sm md:text-base uppercase tracking-widest group-hover:text-amber-600 transition-colors">Laatu</span>
                                </div>
                            </div>
                            
                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <p className="text-slate-400 text-xs md:text-sm tracking-wide leading-relaxed">
                                    * Jokainen toimitettava Sivumaakarit-tehorunko-nettisivu testataan alan standardilla eli Googlen Lighthouse-työkalulla.
                                </p>
                            </div>
                        </div>
                    </div>                   </div>

                    {/* Highly Converting Sales Text section from Tarjous page */}
                    <div className="bg-white text-slate-900 rounded-[3rem] p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden ring-1 ring-slate-900/5 mb-16">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
                        
                        <h3 className={`${playfair.className} text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8 tracking-tight text-slate-900 italic`}>
                            Me haluamme, että sinun kova työsi ja ammattitaitosi <span className="text-blue-600">löytyvät juuri sillä sekunnilla</span>, kun joku tarvitsee apuasi.
                        </h3>
                        
                        <p className={`${inter.className} text-lg md:text-2xl text-slate-600 leading-relaxed font-light mb-12`}>
                            Nettisivu ei ole menoerä. Se on paras työntekijäsi, joka ei nuku koskaan.
                            Kertamaksulla <strong className="font-bold text-slate-900">990 €</strong> ilman piilokuluja.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <a href="#sales-section" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('sales-section')?.scrollIntoView({ behavior: 'smooth' });
                            }} className={`${playfair.className} w-full md:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 text-white font-bold text-xl md:text-2xl tracking-tight py-6 px-10 rounded-2xl hover:bg-blue-700 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-none hover:translate-y-1 transform active:scale-95 group italic`}>
                                LOPETA DEMOTTELU  –  LUE LISÄÄ
                                <svg className="w-8 h-8 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                            
                            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-500 hover:text-slate-700 font-bold uppercase tracking-widest text-sm transition-colors flex items-center gap-2">
                                <span className="w-8 h-px bg-slate-300"></span>
                                Tai lue UKK alhaalta
                                <span className="w-8 h-px bg-slate-300"></span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {/* The Fracture / Bridge Effect End */}
        </>
    );
}
