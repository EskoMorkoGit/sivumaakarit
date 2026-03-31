"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { usePathname } from "next/navigation";
import { CabinLogo } from "@/components/landing/CabinLogo";
import { Manrope, Urbanist } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700", "900"] });

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showBlueHeader, setShowBlueHeader] = useState(false);
    const [showGreenHeader, setShowGreenHeader] = useState(true);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const salesSection = document.getElementById("sales-section");
            // Trigger ~500px (approx 1 screen height / half screen) before the section starts
            // "melkein karut faktat" -> almost at hard facts
            const blueThreshold = salesSection ? salesSection.offsetTop - 500 : 3000;
            const greenThreshold = window.innerHeight;

            const currentScroll = window.scrollY;

            // Green header visible only at the very top (Hero/Intro)
            setShowGreenHeader(currentScroll < greenThreshold);

            // Blue header visible only when reaching the sales section (Karut Faktat)
            setShowBlueHeader(currentScroll > blueThreshold);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Trigger once on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (pathname === "/tarjous") return null;

    return (
        <>
            {/* Green Header (Initial) */}
            <header
                className={`bg-green-900 shadow-md fixed top-0 left-0 w-full z-40 transition-transform duration-500 ease-in-out ${showGreenHeader ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex-1 min-w-0 flex items-center gap-2 md:gap-4 mr-2">
                            <div className="flex-shrink-0 scale-90 md:scale-100">
                                <CabinLogo />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className={`${urbanist.className} text-xl sm:text-2xl md:text-3xl text-white leading-none font-bold tracking-tight`}>
                                    Etelä-Suomen
                                </span>
                                <span className={`${manrope.className} text-[10px] sm:text-[11px] md:text-xs text-stone-200 tracking-widest font-medium`}>
                                    Mökkihuolto & Vahti
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {siteConfig.nav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-green-50 hover:text-white font-medium transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/tarjous"
                                className="bg-white hover:bg-green-50 text-green-900 px-6 py-2 rounded-lg font-bold transition-colors shadow-sm"
                            >
                                Osta nyt 990 €
                            </Link>
                        </nav>

                        {/* Mobile Menu Button (Hamburger) - Green */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-green-50 hover:text-white focus:outline-none flex-shrink-0"
                            aria-label="Avaa valikko"
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Dropdown/Slide) - Green */}
                {isOpen && !showBlueHeader && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-green-900 border-t border-green-800 shadow-xl py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
                        {siteConfig.nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-green-50 py-4 border-b border-green-800 hover:text-white hover:pl-2 transition-all block"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/tarjous"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 w-full bg-white hover:bg-green-50 text-green-900 py-3.5 rounded-xl font-bold text-center shadow-sm"
                        >
                            Osta nyt 990 €
                        </Link>
                    </div>
                )}
            </header>

            {/* Dark Premium Header (Scrolled) */}
            <header
                className={`bg-[#0A1128]/95 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-b border-blue-500/20 fixed top-0 left-0 w-full z-40 transition-transform duration-500 ease-in-out ${showBlueHeader ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo - Dark Theme */}
                        <Link href="/" className="min-w-0 flex items-center gap-3 mr-4 group">
                            <div className={`${urbanist.className} font-bold text-xl md:text-2xl text-white tracking-widest uppercase line-clamp-1 group-hover:text-cyan-400 transition-colors opacity-90`}>
                                Sivumaakarit
                            </div>
                        </Link>

                        {/* Promotional Content - Desktop */}
                        <div className="hidden md:flex items-center gap-6">
                            <span className="text-blue-100 text-lg font-medium">
                                Tarjous: Kotisivut nyt vain <span className="text-cyan-400 font-bold text-xl">990€</span>
                            </span>

                            {/* Animated Arrow pointing to button */}
                            <svg className="w-8 h-8 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>

                            <Link
                                href="#tarjous"
                                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                            >
                                Osta nyt 990 €
                            </Link>
                        </div>

                        {/* Mobile Menu Button (Hamburger) - Dark */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-blue-100 hover:text-white focus:outline-none flex-shrink-0"
                            aria-label="Avaa valikko"
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Dropdown/Slide) - Dark */}
                {isOpen && showBlueHeader && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-[#0A1128] border-t border-blue-900/50 shadow-2xl py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200 text-center">
                        <span className="text-blue-100 text-lg font-medium block mb-2">
                            Tarjous: Kotisivut nyt vain <span className="text-cyan-400 font-bold">990€</span>
                        </span>
                        <div className="flex justify-center mb-4">
                            <svg className="w-6 h-6 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                        <Link
                            href="#tarjous"
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white py-3.5 rounded-xl font-bold text-center shadow-lg block"
                        >
                            Osta nyt 990 €
                        </Link>
                    </div>
                )}
            </header>
        </>
    );
}
