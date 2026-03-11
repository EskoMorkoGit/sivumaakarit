export function Pricing() {
    const prices = [
        {
            category: "Työveloitukset",
            items: [
                { name: "Perustyöt", price: "48 €/h", desc: "Pihatyöt, haravointi, rännien puhdistus, polttopuut." },
                { name: "Koneelliset työt", price: "53 €/h", desc: "Raivaussaha, moottorisaha, pensasleikkuri, lehtipuhallin (sis. pienkonebensiinit)." },
                { name: "Kilometrikorvaus", price: "0,75 €/km", desc: "" }
            ]
        },
        {
            category: "Tarkastuskäynnit",
            items: [
                { name: "Tarkastuskäynti", price: "48 €/kerta", desc: "Mökin tai kiinteistön sekä pihapiirin tarkastus ja raportointi." },
                { name: "Tarkastuskäynti saaressa", price: "60 €/kerta", desc: "Oma vene käytössä, säävaraus. Kilometrikorvaus sovitaan erikseen." }
            ]
        }
    ];

    return (
        <section className="py-24 bg-stone-50" id="pricing">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-stone-900 font-serif">
                    Hinnasto
                </h2>

                <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                    {prices.map((group, idx) => (
                        <div key={idx} className="space-y-8">
                            <h3 className="text-xl font-bold text-stone-800 border-b border-stone-200 pb-2 mb-6">
                                {group.category}
                            </h3>
                            <div className="space-y-8">
                                {group.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex flex-col gap-1">
                                        <div className="flex justify-between items-baseline w-full">
                                            <span className="font-bold text-lg text-stone-900">{item.name}</span>
                                            <span className="font-bold text-lg text-stone-900 shrink-0 ml-4">{item.price}</span>
                                        </div>
                                        {item.desc && (
                                            <p className="text-stone-600 text-sm leading-relaxed max-w-[90%]">
                                                {item.desc}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-stone-200 text-stone-500 text-sm">
                    <p>Hinnat sisältävät 25,5 %:n arvonlisäveron. Minimiveloitus 1h.</p>
                </div>
            </div>
        </section>
    );
}
