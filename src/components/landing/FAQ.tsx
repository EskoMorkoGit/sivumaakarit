"use client";

import { useState } from "react";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Miksi maksaisin 990 € verkkosivuista, kun niitä saa halvalla muualtakin?",
            answer: "Useimmat halvat ratkaisut tarjoavat vain ”digitaalisen tontin”, mutta me toimitamme valmiin myyntikoneen. 990 € investointi sisältää Tehorunko-nettisivu-standardin mukaisen toteutuksen, joka on optimoitu tuomaan uusia asiakkaita heti ensimmäisestä päivästä alkaen. Koska suuri osa asiakkaista tekee valintansa yrityksen nettisivujen perusteella, sivu maksaa itsensä takaisin jo muutamalla uudella keikalla. Esimerkiksi perinteinen kattoremontti saattaa maksaa 8000 € – meiltä saat työkalun, joka maksaa itsensä takaisin viikoissa ja palvelee vuosia. * Lähde: TrekkSoft Travel Trend Report 2019."
        },
        {
            question: "Mitä 50 € kuukausittainen ylläpito oikeasti sisältää?",
            answer: (
                <div className="space-y-3">
                    <p>Ylläpito ei ole vain säilytystä, vaan <strong>vakuutus sivusi suorituskyvylle ja mielenrauhallesi</strong>. Sinä keskityt täysillä omaan työhösi – me hoidamme teknisen tekemisen. Se sisältää:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Verkkotunnuksen (domain) ja SSL-suojauksen.</strong></li>
                        <li><strong>Jatkuvan teknisen valvonnan:</strong> Käytämme automatiikkaa varmistaaksemme, että sivusi pysyy salamannopeana ja teknisesti täydellisenä 24/7.</li>
                        <li><strong>Pieni kuukausittainen päivitys kuuluu hintaan:</strong> Esimerkiksi uuden tarjouskampanjan lisäys, kuvan vaihto tai tekstin muutos. Laita vain viesti, me hoidamme putkimiehen tai sähkömiehen puolesta teknisen säädön.</li>
                        <li><strong>AIO-päivitykset:</strong> Pidämme huolen, että yrityksesi tiedot ovat tekoälyhakujen (kuten ChatGPT) löydettävissä myös tekniikan kehittyessä jatkuvasti.</li>
                    </ul>
                </div>
            )
        },
        {
            question: "Mikä on tämä 100/100-takuu ja miksi se on tärkeä?",
            answer: "Se on meidän lupauksemme laadusta. Ajamme jokaiselle sivulle Googlen virallisen Lighthouse-testin, jossa vaadimme täydet 100 pistettä SEO:ssa, esteettömyydessä ja parhaissa käytännöissä. Tehokkuuden osalta tavoitteemme on vähintään 90 pistettä (tukevasti vihreällä), mikä on valovuosia edellä tavallisia nettisivuja. Tämä takaa, että Google ja tekoäly suosittelevat juuri sinun yritystäsi."
        },
        {
            question: "Miten toimitus voi olla vain 7 päivää?",
            answer: "Me teemme työt puolestasi, jotta sinun ei tarvitse tuhlata aikaasi projektiin. Emme aloita nollasta, vaan käytämme huippuunsa testattua pohjaa ja hyödynnämme tekoälyä sisällön- ja koodintuotannon optimoinnissa. Kun annat meille perustiedot myymästäsi palvelusta, me jalostamme siitä iskevän myyntipuheen ja istutamme sen valmiiseen runkoon. Sinun tehtäväksesi jää vain nauttia valmiista, liidejä tuovasta lopputuloksesta."
        },
        {
            question: "Voinko todella saada sivut ilmaiseksi pilottiasiakkaana?",
            answer: "Kyllä. Etsimme juuri nyt muutamaa referenssiä, joille tarjoamme 990 euron arvoisen toteutuksen 0 eurolla. Ainoa ehtosi on sitoutua 50 euron kuukausittaiseen ylläpitoon, jotta voimme taata sivun laadun jatkossakin, sekä antaa rehellisen palautteen yhteistyöstä."
        }
    ];

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-slate-900 tracking-tight">
                    Usein kysyttyä Sivumaakareiden palveluista
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-300 overflow-hidden group"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                            >
                                <span className="text-lg font-bold text-slate-900 pr-4">{faq.question}</span>
                                <span className={`flex-shrink-0 text-blue-600 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed font-medium">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
