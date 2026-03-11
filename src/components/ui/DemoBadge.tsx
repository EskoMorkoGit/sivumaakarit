"use client";

import Image from "next/image";
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

    // Hide immediately on /tarjous page
    if (pathname === "/tarjous") return null;

    return (
        <div
            className={`fixed top-[70px] md:top-24 left-2 md:left-4 z-50 bg-white/95 backdrop-blur-sm border-2 border-dashed border-cyan-500 shadow-xl rounded-xl p-2 md:p-4 flex items-center gap-2 md:gap-4 transition-all duration-500 cursor-default select-none pointer-events-auto origin-top-left max-w-[160px] md:max-w-[320px] animate-swing hover:[animation-play-state:paused] ${isHidden ? 'opacity-0 -translate-x-full pointer-events-none' : 'opacity-100 translate-x-0'}`}
        >
            <div className="relative w-7 h-7 md:w-12 md:h-12 flex-shrink-0">
                <Image
                    src="/images/sivumaakarit.webp"
                    alt="Sivumaakarit"
                    fill
                    className="object-contain drop-shadow-md"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-[11px] md:text-xl uppercase tracking-wider font-black text-cyan-600 leading-none mb-0.5 md:mb-1">DEMOSIVU</span>
                <span className="text-[8px] md:text-sm font-bold text-slate-500 leading-tight">Sivumaakarit esittelysivu</span>
            </div>
        </div>
    );
}
