"use client";

import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function TilaaPlus() {
    return (
        <div className={`min-h-screen bg-slate-50 relative ${inter.variable} ${playfair.variable} font-sans`}>

            <main className="pt-32 pb-24 px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                        {/* Hero Section of the card */}
                        <div className="bg-slate-900 border-b border-slate-800 p-8 md:p-12 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

                            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-blue-400/30">VIP-Huoltosopimus</span>

                            <h1 className={`${playfair.className} text-3xl md:text-5xl font-bold text-white mb-6 leading-tight`}>
                                Plus-paketti <span className="text-blue-400">(150 €/kk)</span>
                            </h1>

                            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                Enemmän kuin pelkkä ylläpito – se on väline kasvuun. Sisältää teknisen turvan ja julkaisun lisäksi <strong className="text-white">2 tuntia asiantuntijatyötä joka kuukausi</strong>.
                            </p>
                        </div>

                        {/* Content section */}
                        <div className="p-8 md:p-12">
                            <div className="prose prose-slate max-w-none text-lg leading-relaxed mb-10 text-slate-600">
                                <p>
                                    Käytä aika sivuston viilaamiseen, uusien kuvien vaihtoihin tai konversion parantamiseen. Lisäksi valvomme Google-näkyvyyttäsi säännöllisesti. <strong>Maksimoi mielenrauha ja ulkoista digi-murheet ammattilaiselle.</strong>
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 md:p-8 mb-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    Mitä kaikkea on luvassa:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 text-slate-700">
                                        <svg className="w-6 h-6 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span><strong>Kaikki tekninen turva:</strong> Domain, web-hotelli, SSL-salaus ja täysin avaimet käteen -asennus nettiin. Sinun ei tarvitse tehdä mitään.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-700">
                                        <svg className="w-6 h-6 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span><strong>Asiantuntijapankki (2 h/kk):</strong> Käytä aikaa mihin haluat: sisältöjen päivitykseen, visuaalisen ilmeen viilaukseen tai analytiikkatukeen.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-700">
                                        <svg className="w-6 h-6 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span><strong>Jatkuva SEO ja valvonta:</strong> Tsekkaamme kuukausittain Google-sijoitukset ja tekniikan, jotta pysyt kisassa kärjessä.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Order Form */}
                            <div>
                                <h2 className={`${playfair.className} text-2xl font-bold mb-6 text-slate-900`}>Tilaa Sivu + Plus-paketti</h2>
                                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Tilaus lähetetty! Olemme yhteydessä pian.'); }}>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-slate-700">Nimi</label>
                                        <input type="text" className="w-full min-w-0 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Matti Meikäläinen" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-slate-700">Sähköposti</label>
                                        <input type="email" className="w-full min-w-0 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="matti@yritys.fi" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1 text-slate-700">Yrityksen toimiala / Lisätietoja</label>
                                        <textarea className="w-full min-w-0 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none h-32" placeholder="Kerro lyhyesti mitä teette ja millaisia muutoksia sivustolle toivotte jatkossa..."></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
                                        Laita tilauspyyntö vetämään
                                    </button>
                                    <p className="text-center text-xs text-slate-500 mt-4">
                                        Ei sitoutumispakkoa. Otamme yhteyttä puhelimitse yksityiskohtien vahvistamiseksi. <br />
                                        Sivuston toteutus 990 € veloitetaan käynnistyksen yhteydessä.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
