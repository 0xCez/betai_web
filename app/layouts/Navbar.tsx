import assets from "@/json/assets";
import React from "react";

export default function Navbar() {
    return (
        <>
            <header>
                <nav
                    className="w-full border-b border-white/10 fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-lg"
                    aria-label="Main navigation"
                >
                    <div className="w-full">
                        <div className="flex items-center justify-between w-full h-[68px] md:h-[78px] px-4 md:px-6 overflow-x-hidden gap-4 sm:gap-6">
                            <a href="/">
                                <img
                                    src={assets.logo}
                                    alt="Bet.AI App Logo"
                                    fetchPriority="high"
                                    className="w-[50px] h-[50px] min-w-[50px]"
                                />
                            </a>
                            <div className="hidden lg:flex items-center justify-center gap-[30px] px-[50px] py-[14px] rounded-[60px] border border-white/10 shrink-0 absolute left-1/2 -translate-x-1/2">
                                <a
                                    href="/affiliation"
                                    className="text-white/50 text-[14px] whitespace-nowrap transition-colors duration-300 hover:text-white"
                                >
                                    Creator program
                                </a>
                                <a
                                    href="#features"
                                    className="text-white/50 text-[14px] whitespace-nowrap transition-colors duration-300 hover:text-white"
                                >
                                    Features
                                </a>
                                <a
                                    href="#product"
                                    className="text-white/50 text-[14px] whitespace-nowrap transition-colors duration-300 hover:text-white"
                                >
                                    Product
                                </a>
                            </div>
                            <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
                                <a
                                    href="https://apps.apple.com/app/apple-store/id6695758303?pt=154158&amp;ct=website&amp;mt=8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-[50px] h-[50px] rounded-[10px] border border-white/15 hover:bg-white/5 hover:border-white/25"
                                >
                                    <img
                                        src={assets.icons.apple}
                                        alt="Download on App Store"
                                        loading="lazy"
                                        className="w-[12px] h-[14px] sm:w-[14px] sm:h-[16px]"
                                    />
                                </a>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.virtualnetwork.taller"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-[50px] h-[50px] rounded-[10px] border border-white/15 hover:bg-white/5 hover:border-white/25"
                                >
                                    <img
                                        src={assets.icons.android}
                                        alt="Android"
                                        loading="lazy"
                                        className="w-[15px] h-[14px] sm:w-[17px] sm:h-[16px]"
                                    />
                                </a>
                                <a
                                    href="/affiliation"
                                    className="flex items-center justify-center min-w-[100px] h-[50px] px-3 py-[2px] rounded-[10px] bg-gradient-to-b from-[#00D1F2] to-[#017283]"
                                >
                                    <span className="text-white text-[13px] sm:text-[14px] whitespace-nowrap">
                                        Creator program
                                    </span>
                                </a>
                            </div>
                            <div className="hidden lg:flex gap-2 flex-shrink-0">
                                <a
                                    href="https://apps.apple.com/app/apple-store/id6695758303?pt=154158&amp;ct=website&amp;mt=8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-[145px] h-[50px] px-[15px] py-[2px] rounded-[300px] bg-gradient-to-b from-[#00D1F2] to-[#017283] hover:opacity-90"
                                >
                                    <img
                                        src={assets.icons.apple}
                                        alt="App Store icon"
                                        loading="lazy"
                                        className="-mt-[2px] w-5 h-5"
                                    />
                                    <span className="text-white text-[14px] whitespace-nowrap">
                                        Apple
                                    </span>
                                </a>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.virtualnetwork.taller"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-[145px] h-[50px] px-[15px] py-[2px] rounded-[300px] border border-white/15 hover:bg-white/5 hover:border-white/25"
                                >
                                    <img
                                        src={assets.icons.android}
                                        alt="Android"
                                        loading="lazy"
                                        className="w-5 h-5"
                                    />
                                    <span className="text-white text-[14px] whitespace-nowrap">
                                        Android
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="h-[68px] md:h-[78px]" aria-hidden="true" />
        </>
    );
}
