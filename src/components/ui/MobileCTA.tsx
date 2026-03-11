"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:hidden bg-gradient-to-t from-white via-white/90 to-transparent pb-6 pt-12 animate-in slide-in-from-bottom-10 fade-in duration-500">
            <Link 
                href="/tarjous"
                className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-lg py-4 px-6 rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.4)] tracking-wide uppercase"
            >
                <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Pyydä Tarjous
            </Link>
        </div>
    );
}
