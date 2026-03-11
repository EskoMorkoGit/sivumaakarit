import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-stone-900 text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/mokkimaisema.webp"
                    alt="Moderni suomalainen mökki järven rannalla sumuisena aamuna"
                    fill
                    className="object-cover opacity-60"
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/80" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
                    Mielenrauhaa mökkilomalle <br className="hidden md:block" />
                </h1>
                <p className="text-lg md:text-2xl text-stone-100 mb-10 max-w-3xl mx-auto drop-shadow-md font-light">
                    Ammattitaitoinen mökkitalkkari huolehtii kiinteistöstäsi, kun olet poissa. <br className="hidden md:block" />
                    Nauti vapaa-ajasta – me hoidamme loput.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-stone-900 bg-white rounded-full hover:bg-stone-100 transition-all hover:scale-105 shadow-xl"
                    >
                        Pyydä ilmainen arviokäynti
                    </Link>
                    <Link
                        href="#pricing"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-105 shadow-lg"
                    >
                        Katso palveluhinnasto
                    </Link>
                </div>
            </div>

        </section>
    );
}
