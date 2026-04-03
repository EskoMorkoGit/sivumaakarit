"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function DemoBadge() {
    const pathname = usePathname();
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const salesSection = document.getElementById("sales-section");
            if (salesSection) {
                const rect = salesSection.getBoundingClientRect();
                // Hide if sales section is entering the viewport (e.g., top is within viewport height)
                // Adjust threshold as needed. Here, if top of section is less than window height (it's visible or above)
                if (rect.top <= window.innerHeight * 0.5) {
                    setIsHidden(true);
                } else {
                    setIsHidden(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Show only on the mokkipalvelu demo page
    if (pathname !== "/mokkipalvelu") return null;

    return (
        <div
            className={`fixed top-[70px] md:top-24 left-2 md:left-4 z-50 bg-white/95 backdrop-blur-sm border-2 border-dashed border-cyan-500 shadow-xl rounded-xl p-2 md:p-5 flex flex-col gap-2 md:gap-3 transition-all duration-500 cursor-default select-none pointer-events-auto origin-top-left max-w-[150px] md:max-w-[320px] -rotate-2 hover:rotate-0 hover:scale-105 ${isHidden ? 'opacity-0 -translate-x-full pointer-events-none' : 'opacity-100 translate-x-0'}`}
        >
            <div className="flex items-center gap-1.5 md:gap-4">
                <div className="relative w-6 h-6 md:w-12 md:h-12 flex-shrink-0">
                    <Image
                        src="/images/sivumaakarit.webp"
                        alt="Sivumaakarit"
                        fill
                        className="object-contain drop-shadow-md"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] md:text-xl uppercase tracking-wider font-black text-cyan-600 leading-none mb-0.5 md:mb-1">DEMOSIVU</span>
                    <span className="text-[7px] md:text-sm font-bold text-slate-500 leading-tight">Sivumaakarit esittelysivu</span>
                </div>
            </div>
            
            <Link 
                href="/tarjous#hinnasto" 
                className="mt-0.5 w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-[9px] md:text-sm py-1.5 px-2 md:py-2 md:px-3 rounded-lg text-center transition-colors shadow-sm flex items-center justify-center gap-1"
            >
                <span>Haluatko samanlaiset?</span>
                <svg className="w-2.5 h-2.5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
        </div>
    );
}
