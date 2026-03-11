import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function ContactBanner() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
                    <div className="flex items-center gap-6">
                        {/* Round Icon Container */}
                        <a href="tel:0451234567" aria-label="Soita meille heti" className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-green-700 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                        </a>

                        {/* Text Content */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-stone-800">
                                Ota yhteyttä <a href="tel:0451234567" className="text-green-700 whitespace-nowrap hover:underline underline-offset-4 decoration-2 transition-all">045 123 4567</a> <br className="hidden md:block" /> ja pyydä tarjous!
                            </h3>
                        </div>
                    </div>

                    <a
                        href="tel:0451234567"
                        className="bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-xl shadow-md transition-colors uppercase tracking-wide whitespace-nowrap flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
                        </svg>
                        SOITA JA TILAA
                    </a>
                </div>
            </div>
        </section>
    );
}
