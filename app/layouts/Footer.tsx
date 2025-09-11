import assets from "@/json/assets";
import React from "react";
import moment from "moment";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div>
            <section
                aria-label="Download Call to Action"
                className="w-full max-w-[1200px] mx-auto px-4 mt-32 mb-20"
            >
                <div className="w-full rounded-[30px] border-[0.93px] border-[rgba(0,194,224,0.2)]  bg-gradient-to-b from-[#0B0B0B] from-0% via-[#001720] via-79% to-[#002230] to-100% p-16 text-center relative overflow-hidden">
                    <h2 className="text-[26px] md:text-4xl font-medium text-white mb-6">
                        Use math, not luck.
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl mb-7 max-w-[550px] mx-auto">
                        Follow data to guide your bets: line moves, money split,
                        injuries, weather, refs... Trusted by{" "}
                        <span className="text-white/60">15,000+ bettors.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <a
                            href="https://apps.apple.com/us/app/bet-ai-betting-assistant/id6743808717"
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
                            href="https://play.google.com/store/apps/details?id=com.awesome.betai&utm_source=emea_Med"
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
                </div>
            </section>
            <footer
                className="w-full bg-[#0B0B0B] py-16 mt-20"
                role="contentinfo"
            >
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-10">
                        <div className="mb-12 md:mb-0 flex flex-col md:flex-row flex-wrap shrink-0 gap-4">
                            <a href="/" className="shrink-0">
                                <img
                                    alt="Bet.AI Logo"
                                    loading="lazy"
                                    className="rounded-[14px] size-14"
                                    src={assets.logo}
                                />
                            </a>
                            <p className="text-white/60 text-sm max-w-[190px]">
                                Breakdown any matchup with our AI and surface
                                all the edges that matter.
                            </p>
                        </div>
                        {/* <nav className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-16"> */}
                        <div className="md:w-[200px]">
                            <h2 className="text-white font-semibold mb-4">
                                Responsible Gambling
                            </h2>
                            <p className="text-white/60 transition-colors italic">
                                DISCLAIMER: Analytics for informational purposes
                                only. Not betting advice. 18+ only. Play
                                responsibly.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold mb-4">
                                About
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="/#features"
                                        className="text-white/60 hover:text-white transition-colors"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/#product"
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
                                        href="https://betaiapp.com/privacy.html"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white/60 hover:text-white transition-colors"
                                        href="https://betaiapp.com/terms.html"
                                    >
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold mb-4">
                                Follow us
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        className="text-[#006F80] transition-colors flex items-center gap-2"
                                        href="https://www.instagram.com/bet_ai_app/"
                                    >
                                        <img
                                            src={assets.icons.instagram}
                                            alt="Instagram"
                                            className="size-5"
                                        />
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-[#006F80] transition-colors flex items-center gap-2"
                                        href="https://www.tiktok.com/@perecastorai"
                                    >
                                        <img
                                            src={assets.icons.tiktok}
                                            alt="Tiktok"
                                            className="size-5"
                                        />
                                        Tiktok
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* </nav> */}
                    </div>
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <p className="text-white/40 text-sm space-x-1">
                            <span className="hover:text-white/60 transition-colors">
                                THE AWESOME COMPANY S.A
                            </span>
                            <span className="align-middle text-2xl ">
                                &reg;
                            </span>
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
