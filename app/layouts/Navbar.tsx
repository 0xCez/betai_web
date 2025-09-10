import assets from "@/json/assets";
import React from "react";
import { Link } from "react-router";

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
                            <Link to="/">
                                <img
                                    src={assets.logo}
                                    alt="Bet.AI App Logo"
                                    fetchPriority="high"
                                    className="w-[50px] h-[50px] min-w-[50px]"
                                />
                            </Link>
                            <div className="hidden lg:flex items-center justify-center gap-[30px] px-[50px] py-[14px] rounded-[60px] border border-white/10 shrink-0 absolute left-1/2 -translate-x-1/2">
                                <Link
                                    to="/affiliation"
                                    className="text-white/50 text-[14px] whitespace-nowrap transition-colors duration-300 hover:text-white"
                                >
                                    Creator program
                                </Link>
                                <Link
                                    to="/#features"
                                    className="text-white/50 text-[14px] whitespace-nowrap transition-colors duration-300 hover:text-white"
                                >
                                    Features
                                </Link>
                                <Link
                                    to="/#product"
                                    className="text-white/50 text-[14px] whitespace-nowrap transition-colors duration-300 hover:text-white"
                                >
                                    Product
                                </Link>
                            </div>
                            <div className="flex lg:hidden items-center gap-2.5 flex-shrink-0">
                                <Link
                                    to="https://apps.apple.com/us/app/bet-ai-betting-assistant/id6743808717"
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
                                </Link>
                                <Link
                                    to="https://play.google.com/store/apps/details?id=com.awesome.betai&utm_source=emea_Med"
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
                                </Link>
                                <Link
                                    to="/affiliation"
                                    className="flex items-center justify-center min-w-[100px] h-[50px] px-3 py-[2px] rounded-[10px] bg-gradient-to-b from-[#00D1F2] to-[#017283]"
                                >
                                    <span className="text-white text-[13px] sm:text-[14px] whitespace-nowrap">
                                        Creator program
                                    </span>
                                </Link>
                            </div>
                            <div className="hidden lg:flex gap-2 flex-shrink-0">
                                <Link
                                    to="https://apps.apple.com/us/app/bet-ai-betting-assistant/id6743808717"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2.5 w-[145px] h-[50px] px-[15px] py-[2px] rounded-[300px] bg-gradient-to-b from-[#00D1F2] to-[#017283] hover:opacity-90"
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
                                </Link>
                                <Link
                                    to="https://play.google.com/store/apps/details?id=com.awesome.betai&utm_source=emea_Med"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2.5 w-[145px] h-[50px] px-[15px] py-[2px] rounded-[300px] border border-white/15 hover:bg-white/5 hover:border-white/25"
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
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="h-[68px] md:h-[78px]" aria-hidden="true" />
        </>
    );
}
