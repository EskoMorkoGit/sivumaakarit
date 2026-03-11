"use client";

import { useState } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { StandalonePricing } from "@/components/landing/StandalonePricing";
import { PricingTiers } from "@/components/landing/PricingTiers";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

export default function TarjousPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data
        setFormSubmitted(true);
    };

    return (
        <div className={`${inter.className} bg-slate-50 text-slate-900 leading-relaxed min-h-screen`}>

            {/* Custom Header for this Landing Page */}
            <header className="py-4 md:py-6 px-4 md:px-12 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
                <div className={`text-xl md:text-2xl font-bold text-blue-900 ${playfair.className} leading-tight min-w-0 pr-4 break-words`}>
                    Sivumaakareiden <span className="text-blue-600 block sm:inline">Palvelusivut</span>
                </div>
                <Link href="#hinnasto" className="flex-shrink-0 bg-blue-700 hover:bg-blue-800 text-white px-4 md:px-6 py-2 rounded-full font-semibold transition text-sm md:text-base whitespace-nowrap">
                    Osta nyt 990 €
                </Link>
            </header>

            {/* Hero Section */}
            <section className="relative text-white py-24 md:py-40 px-4 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/tarjous-hero.png"
                        alt="Moderni työtila metsänäkymällä"
                        fill
                        className="object-cover"
                        priority
                        fetchPriority="high"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-md text-blue-300 text-sm font-bold tracking-[0.2em] uppercase">
                        Premium Palvelusivut
                    </div>
                    <h1 className={`${playfair.className} text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight drop-shadow-2xl`}>
                        Uskottava palvelusivu yrittäjälle –<br className="hidden md:block" /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-cyan-300">Valmiina 7 päivässä</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                        Lopeta tekninen säätö. Me rakennamme sinulle sivut, joilla asiakkaat löytävät sinut Googlesta ja tekoälyhauista.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="#hinnasto" className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 px-10 py-5 rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(234,179,8,0.3)] transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider">
                            Tilaa vaivattomat palvelusivut
                        </Link>
                    </div>
                </div>
                
                {/* Visual Divider */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </section>

            {/* Kenelle Section */}
            <section id="kenelle" className="py-20 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-4`}>Sivumaakareiden Palvelusivut on paras valinta sinulle, jos...</h2>
                    <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <p className="font-semibold text-lg mb-2">Olet palvelualan ammattilainen</p>
                        <p className="text-slate-600">Myyt osaamistasi ja asiantuntemustasi – olitpa sitten huoltoyrittäjä, asennusammattilainen tai muun teknisen alan asiantuntija.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <p className="font-semibold text-lg mb-2">Haluat uskottavan ja selkeän palvelusivun nopeasti</p>
                        <p className="text-slate-600">Jotta asiakkaasi löytävät sinut Googlesta, Mapsista ja uusista tekoälyhauista.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <p className="font-semibold text-lg mb-2">Keskityt ydinosaamiseesi</p>
                        <p className="text-slate-600">Teet tulosta siellä, missä asiakkaasikin ovat. Et halua tuhlata arvokasta aikaasi tekniseen säätämiseen tai koodin opetteluun.</p>
                    </div>
                </div>
            </section>

            {/* Price Section */}
            <StandalonePricing />
            <PricingTiers />

            {/* "Ei sinulle" Section */}
            <section className="py-20 px-4 max-w-3xl mx-auto text-center">
                <h2 className={`${playfair.className} text-2xl font-bold mb-8`}>Tämä palvelu ei ole sinulle, jos...</h2>
                <div className="bg-slate-100 p-8 rounded-r-2xl text-left border-l-4 border-[#ecc94b]">
                    <p className="text-lg text-slate-700 italic">
                        &quot;...etsit täysin räätälöityä ja kuukausia kestävää design-projektia.&quot;
                    </p>
                    <p className="mt-4 text-slate-600">
                        Jos tavoitteesi on täysin yksilöllinen erikoisratkaisu, tämä ei ole oikea valinta. Me tarjoamme suoran tien tuloksiin ilman hämmentävää ”digitaalista polkua”, joka karkottaa asiakkaat jo ensimetreillä.
                    </p>
                </div>
            </section>

            {/* Miksi Sivumaakarit Section */}
            <section className="py-24 px-4 bg-slate-900 text-white border-t border-slate-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-8`}>
                        Miksi Sivumaakarit?
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Olemme 100 % suomalainen yritys Lohjalta.</strong> Tavoitteenamme on auttaa paikallisia ja käytännönläheisiä yrittäjiä pärjäämään isoja tekijöitä vastaan.
                        <br /><br />
                        <strong className="text-white font-semibold">Me emme puhu koodia</strong> (vaikka osaamme sitä lukea kuin sanomalehteä). Me puhumme liiketoimintaa. Me emme halua vain tehdä sinulle verkkosivua – me haluamme korjata yrityksesi digitaalisen &quot;mökkitien&quot;, jotta asiakkaat löytävät perille asti ilman turhia mutkia.
                    </p>
                    <div className="bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700/50 mb-12 shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 break-words">
                            Oletko valmis lopettamaan demottelun ja aloittamaan oikeat kaupat?
                        </h3>
                        <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                            Ammattitaitosi ansaitsee arvoisensa näyteikkunan. Otetaan yhdessä askel kohti tuloksellisempaa arkea.
                        </p>
                        <Link href="#hinnasto" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 md:px-10 rounded-xl transition-all shadow-lg text-base md:text-lg ring-4 ring-slate-900/10">
                            Tilaa omat sivut (990 €)
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tarina: Esimerkki arjesta */}
            <section className="py-24 px-4 bg-blue-50">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 flex flex-col md:flex-row gap-10 items-center">
                        <div className="md:w-1/3 flex justify-center">
                            <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className={`${playfair.className} text-2xl md:text-3xl font-bold text-blue-900 mb-4`}>
                                Miten kauppa oikeasti käy nykypäivänä?
                            </h3>
                            <div className="text-slate-700 space-y-4 leading-relaxed">
                                <p>
                                    Kuvitellaanpa tilanne: On perjantai-ilta. Mökkiläisen pihalla on iso koivu, joka näyttää vaaralliselta ja uhkaa kaatua katon päälle syysmyrskyssä. Mitä hän tekee? Hän ei hae puhelinluetteloa. Hän kaivaa puhelimen taskusta ja kirjoittaa Googleen tai ChatGPT:hen: <em>&quot;Puunkaato mökkitien varrelta nopeasti&quot;</em>.
                                </p>
                                <p>
                                    Hakutuloksiin nousee useita yrityksiä. Ensimmäinen sivusto latautuu hitaasti pätkien. Toinen sivusto näyttää sekavalta, eikä puhelinnumeroa löydy ruudun rullailunkaan jälkeen.
                                </p>
                                <p>
                                    <strong className="text-blue-900">Sitten hän klikkaa sinun sivuasi.</strong> Se aukeaa silmänräpäyksessä. Heti ensimmäisenä ruudulla lukee isolla: <em>&quot;Ammattitaitoinen puunkaatopalvelu. Turvallisesti ja nopeasti.&quot;</em> Alla on selkeä vihreä nappi: <em>&quot;Soita heti&quot;</em>.
                                </p>
                                <p>
                                    Mökkiläinen painaa nappia, sinun puhelimesi soi ja keikka on sovittu. <strong>Siksi myyvä, nopea ja löydettävä nettisivu on yrityksesi tärkein työntekijä.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sivumaakarit FAQ */}
            <section className="py-24 px-4 bg-white" id="ukk">
                <div className="max-w-3xl mx-auto">
                    <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900`}>
                        Usein kysyttyjä kysymyksiä
                    </h2>

                    <div className="space-y-4">
                        <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold">
                                <span>Mistä 990 euron hinta koostuu ja miten voitte myydä tähän hintaan?</span>
                                <span className="relative size-5 shrink-0">
                                    <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                    <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                <p>Monet toimistot laskuttavat tuhansia euroja, koska prosessi on hidas ja &quot;keksitään pyörä uudelleen&quot; jokaisen asiakkaan kohdalla. Me teemme asiat toisin.</p>
                                <p className="mt-2 text-slate-900 font-medium">Käytämme tekoälyä asiantuntevasti apuna koodauksessa ja tekstintuotannossa.</p>
                                <p className="mt-2 text-slate-600">
                                    Tekoäly (AI) ei tee sivuja puolestamme, mutta se poistaa meiltä ohjelmoinnin ja oikoluvun &quot;raskaan raatamisen&quot;. Tämän ansiosta voimme keskittyä siihen, mikä tuo sinulle rahaa: <strong>optimaalisen hakukonenäkyvyyden, huippunopeuden ja psykologisesti myyvän asettelun rakentamiseen.</strong> Siirrämme säästyneen ajan suoraan sinun lompakkoosi, ja siksi pystymme tarjoamaan markkinoiden parhaan teknisen laadun (100/100) näin järkevään hintaan.
                                </p>
                            </div>
                        </details>

                        <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold">
                                <span>Miksi maksaisin 150 €/kk ylläpidosta (Plus-paketti)?</span>
                                <span className="relative size-5 shrink-0">
                                    <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                    <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                <p>Mieti sivustoasi firman autona. 990 € kertamaksu on se, jolla ostat uuden, kiiltävän auton autoliikkeestä. Mutta jos et koskaan vaihda öljyjä, katso rengaspaineita tai pese sitä, se menettää arvonsa nopeasti.</p>
                                <p className="mt-2 text-slate-600">150 €/kk on VIP-huoltosopimus: me pesemme auton, katsomme moottoriin ja huolehdimme jopa siitä, että oikeat asiakkaat nousevat kyytiin. Se on sijoitus siihen, että olemassa oleva sivusi ei vain &quot;ole&quot;, vaan tuo jatkuvasti uutta kauppaa.</p>
                            </div>
                        </details>

                        <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold">
                                <span>Miten voitte tarjota näin nopeat, 7 päivän toimitukset?</span>
                                <span className="relative size-5 shrink-0">
                                    <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                    <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                Keskitymme olennaiseen: selkeyteen, toimivuuteen ja löydettävyyteen. Emme rakenna raskaita himmeleitä tai kymmeniä alasivuja joita asiakkaasi eivät koskaan lue. Kun tiedämme tarkan rakenteen ja tavoitteen etukäteen, työskentelemme tehokkaasti ja viivyttelemättä heti kun toimitat meille materiaalisi.
                            </div>
                        </details>

                        <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold">
                                <span>Jos otan jatkuvan tilauksen (Ylläpito), voinko peruuttaa sen milloin vain?</span>
                                <span className="relative size-5 shrink-0">
                                    <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                    <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                Kyllä voit. Meillä ei ole pitkiä pakollisia &quot;lukkovuosia&quot;. Voit lopettaa jatkuvan tilauksen kalenterikuukauden irtisanomisajalla. Jos olet maksanut sivuston rakennuksesta erillisen aloitusmaksun / kertamaksun, sivusto koodineen on täysin sinun omaisuuttasi jatkossakin.
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* CTA / Contact Section */}
            <section id="tilaa" className="py-24 px-4 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group/image">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-700"></div>
                            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                <Image
                                    src="/images/tarjous-tilaa.png"
                                    alt="Mökkilaituri ja tabletti"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover/image:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white">
                                        <p className="font-bold text-lg mb-1">Maanläheistä palvelua</p>
                                        <p className="text-sm opacity-90 leading-relaxed font-medium">Rakennamme digitaalisen mökkitien yrityksellesi, jotta asiakkaat löytävät perille asti.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="text-center lg:text-left mb-10">
                                <h2 className={`${playfair.className} text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight`}>
                                    Aloitetaan projekti <br /> 
                                    <span className="text-blue-700">tänään</span>
                                </h2>
                                <p className="text-slate-600 text-lg md:text-xl font-medium">Jätä yhteydenottopyyntö, niin saat uudet sivusi viikossa.</p>
                            </div>

                            {!formSubmitted ? (
                                <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100 relative group/form transition-all duration-500 hover:shadow-2xl">
                                    <div className="absolute -inset-px bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[2rem] -z-10 group-hover/form:opacity-100 opacity-0 transition-opacity"></div>
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-bold text-slate-700 ml-1">Nimi</label>
                                                <input type="text" className="w-full min-w-0 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" placeholder="Matti Meikäläinen" required />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-bold text-slate-700 ml-1">Sähköposti</label>
                                                <input type="email" className="w-full min-w-0 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" placeholder="matti@yritys.fi" required />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-bold text-slate-700 ml-1">Viesti / Yrityksesi ala</label>
                                            <textarea className="w-full min-w-0 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all h-32 placeholder:text-slate-400" placeholder="Kerro lyhyesti mitä teet..."></textarea>
                                        </div>
                                        <button type="submit" className="w-full bg-blue-700 text-white font-black py-5 rounded-2xl hover:bg-blue-800 transition-all shadow-[0_15px_30px_rgba(29,78,216,0.3)] hover:shadow-none hover:translate-y-0.5 transform active:scale-95 text-lg uppercase tracking-wider">
                                            Lähetä tilauspyyntö
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div id="success-msg" className="bg-emerald-50 border border-emerald-100 p-12 rounded-[2rem] text-center shadow-xl">
                                    <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <h3 className="text-3xl font-black text-emerald-900 mb-4 tracking-tight">Kiitos viestistäsi!</h3>
                                    <p className="text-emerald-700 text-lg font-medium">Olemme sinuun yhteydessä pian aloituskokousta varten.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center">
                <div className="mb-6 font-bold text-white text-xl">Sivumaakarit</div>
                <p className="max-w-md mx-auto mb-8 text-sm">
                    Rakennamme digitaalista tietä yrittäjille, jotka arvostavat suoraviivaisuutta ja laatua.
                </p>
                <div className="text-xs">
                    © 2026 Sivumaakarit. Kaikki oikeudet pidätetään.
                </div>
            </footer>
        </div>
    );
}
