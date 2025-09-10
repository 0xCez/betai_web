import assets from "@/json/assets";
import React from "react";
import moment from "moment";

export default function Footer() {
    return (
        <div>
            <section
                aria-label="Download Call to Action"
                className="w-full max-w-[1200px] mx-auto px-4 mt-32 mb-20"
            >
                <div className="w-full rounded-[30px] border border-[rgba(0,194,224,0.4)] border-t-[rgba(0,194,224,0.4)] bg-gradient-to-b from-[#000001] from-0% via-[#001720] via-79% to-[#002230] to-100% p-16 text-center relative overflow-hidden">
                    <h2 className="text-[26px] md:text-4xl font-medium text-white mb-6">
                        Use math, not luck.
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl mb-7 max-w-[550px] mx-auto">
                        Follow data to guide your bets: line moves, money split,
                        injuries, weather, refs... Trusted by{" "}
                        <span className="text-white">15,000+ bettors.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <a
                            href="https://apps.apple.com/app/apple-store/id6695758303?pt=154158&amp;ct=website&amp;mt=8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2.5 bg-white text-black px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            <img
                                alt="Apple logo"
                                loading="lazy"
                                src={assets.icons.apple}
                                className="size-5 brightness-0 saturate-100"
                            />
                            <span>Apple</span>
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.virtualnetwork.taller"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2.5 bg-transparent text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10"
                        >
                            <img
                                alt="Android logo"
                                loading="lazy"
                                src={assets.icons.android}
                                className="size-5"
                            />
                            <span>Android</span>
                        </a>
                    </div>
                    {/* <img
                            alt="Gradient effect"
                            loading="lazy"
                            width="1200"
                            height="300"
                            decoding="async"
                            data-nimg="1"
                            className="absolute bottom-0 left-0 w-full h-auto object-cover"
                            srcset="/_next/image?url=%2Fimages%2FGradient.png&amp;w=1200&amp;q=75 1x, /_next/image?url=%2Fimages%2FGradient.png&amp;w=3840&amp;q=75 2x"
                            src="/_next/image?url=%2Fimages%2FGradient.png&amp;w=3840&amp;q=75"
                        /> */}
                </div>
            </section>
            <footer
                className="w-full bg-[#0B0B0B] py-16 mt-20"
                role="contentinfo"
            >
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="mb-12 md:mb-0">
                            <a href="/">
                                <img
                                    alt="Bet.AI Logo"
                                    loading="lazy"
                                    className="rounded-[14px] size-14"
                                    src={assets.logo}
                                />
                            </a>
                            <p className="text-white/60 mt-3 text-sm max-w-[280px]">
                                Breakdown any matchup with our AI and surface
                                all the edges that matter.
                            </p>
                        </div>
                        <nav className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                            <div>
                                <h2 className="text-white font-semibold mb-4">
                                    About
                                </h2>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="#features"
                                            className="text-white/60 hover:text-white transition-colors"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#product"
                                            className="text-white/60 hover:text-white transition-colors"
                                        >
                                            Product
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-white/60 hover:text-white transition-colors"
                                            href="/affiliation"
                                        >
                                            Creator program
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-white font-semibold mb-4">
                                    Company
                                </h2>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            className="text-white/60 hover:text-white transition-colors"
                                            href="/privacy"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-white/60 hover:text-white transition-colors"
                                            href="/terms"
                                        >
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <p className="text-white/40 text-sm space-x-5">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white/60 transition-colors"
                                href="https://asymmetriclabs.xyz"
                            >
                                THE AWESOME COMPANY S.A
                            </a>
                            <span className="uppercase">
                                {moment().format("YYYY")} All rights reserved
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
