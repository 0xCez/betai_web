import assets from "@/json/assets";
import React from "react";
import moment from "moment";

export default function Footer() {
    return (
        <div>
            <section
                className="w-full max-w-[1200px] mx-auto px-4"
                aria-label="Customer Testimonials"
            >
                <header className="text-left mb-8">
                    <span className="text-[16px] text-white font-rethink-sans border border-white/10 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.02)] shadow-[inset_0px_1px_10px_0px_rgba(255,255,255,0.05)] inline-block mb-[10px]">
                        Users feedback
                    </span>
                    <h2 className="mt-4 text-[26px] md:text-[40px] font-bold text-white font-rethink-sans leading-[35px] md:leading-[45px] flex flex-col">
                        <span>
                            There’s a reason 15,000+ bettors use Bet.AI before
                        </span>
                        <div className="flex flex-col md:flex-row md:gap-2">
                            <span>they bet,</span>
                            <span className="text-[#949FA6]">
                                try it yourself.
                            </span>
                        </div>
                    </h2>
                    <p className="mt-4 text-[18px] text-white/50 w-full max-w-[734px] min-h-[58px]">
                        It’s not a pick service. Bet.AI gives you a fast read on
                        the market and the matchup, so you make the call with
                        the numbers that matter and never miss an edge.
                    </p>
                </header>
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-start mt-[60px]"
                    role="list"
                >
                    <article
                        className="w-full flex flex-col justify-between bg-linear-to-b from-[#121212] from-0% to-[#0B0B0B] to-100% rounded-[40px] p-6 border border-[rgba(145,145,145,0.3)]"
                        role="listitem"
                    >
                        <blockquote>
                            <p className="text-[#949FA6] font-rethink-sans text-[18px] font-normal leading-[29.333px] mb-6">
                                I used to juggle like 3 or 4 apps for line
                                moves, splits, and injuries. With Bet.AI, one
                                pic gives me the story in a few secs. Money
                                flow, line movement, refs/weather, injuries...
                                Now I just skip bad spots more often and only
                                dig when the opp looks legit.
                            </p>
                        </blockquote>
                        <footer>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.tiktok.com/@beck13213?lang=fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3"
                                >
                                    <img
                                        alt="Profile picture of Thomas L."
                                        loading="lazy"
                                        className="rounded-full size-10"
                                        src={assets.profile1}
                                    />
                                    <div>
                                        <p className="text-white font-medium">
                                            Thomas L.
                                        </p>
                                        <p className="text-white/50 text-sm">
                                            @tom263
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="flex gap-1 mt-3"
                                aria-label="5 out of 5 stars rating"
                            >
                                <img
                                    alt=""
                                    aria-hidden="true"
                                    loading="lazy"
                                    className="h-5 object-contain"
                                    src={assets.stars}
                                />
                            </div>
                        </footer>
                    </article>
                    <article
                        className="w-full flex flex-col justify-between bg-linear-to-b from-[#121212] from-0% to-[#0B0B0B] to-100% rounded-[40px] p-6 border border-[rgba(145,145,145,0.3)]"
                        role="listitem"
                    >
                        <blockquote>
                            <p className="text-[#949FA6] font-rethink-sans text-[18px] font-normal leading-[29.333px] mb-6">
                                I snap my bet slip, see the line move and the
                                ugly stuff (injuries, weather), and decide. Some
                                days it means no bet, and that’s the win. Super
                                easy to get full context on a pick.
                            </p>
                        </blockquote>
                        <footer>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.tiktok.com/@hyperiddaren?lang=fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3"
                                >
                                    <img
                                        alt="Profile picture of Emilie.S"
                                        loading="lazy"
                                        className="rounded-full size-10"
                                        src={assets.profile2}
                                    />
                                    <div>
                                        <p className="text-white font-medium">
                                            Emilie.S
                                        </p>
                                        <p className="text-white/50 text-sm">
                                            @propsncoffee
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="flex gap-1 mt-3"
                                aria-label="5 out of 5 stars rating"
                            >
                                <img
                                    alt=""
                                    aria-hidden="true"
                                    loading="lazy"
                                    className="h-5 object-contain"
                                    src={assets.stars}
                                />
                            </div>
                        </footer>
                    </article>
                    <article
                        className="w-full flex flex-col justify-between bg-linear-to-b from-[#121212] from-0% to-[#0B0B0B] to-100% rounded-[40px] p-6 border border-[rgba(145,145,145,0.3)]"
                        role="listitem"
                    >
                        <blockquote>
                            <p className="text-[#949FA6] font-rethink-sans text-[18px] font-normal leading-[29.333px] mb-6">
                                The chat feels like texting a pro bettor 😭. I
                                ask why a line jumped and it breaks down public
                                vs sharp flow, player news, and timing in plain
                                English. No hype or bias, just reasons I can
                                sanity-check.
                            </p>
                        </blockquote>
                        <footer>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.tiktok.com/@julsn.214?lang=fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3"
                                >
                                    <img
                                        alt="Profile picture of Chris M."
                                        loading="lazy"
                                        className="rounded-full size-10"
                                        src={assets.profile3}
                                    />
                                    <div>
                                        <p className="text-white font-medium">
                                            Chris M.
                                        </p>
                                        <p className="text-white/50 text-sm">
                                            @sundaycard
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div
                                className="flex gap-1 mt-3"
                                aria-label="5 out of 5 stars rating"
                            >
                                <img
                                    alt=""
                                    aria-hidden="true"
                                    loading="lazy"
                                    className="h-5 object-contain"
                                    src={assets.stars}
                                />
                            </div>
                        </footer>
                    </article>
                </div>
            </section>
            <section
                aria-label="Download Call to Action"
                className="w-full max-w-[1200px] mx-auto px-4 mt-32 mb-20"
            >
                <div className="w-full rounded-[30px] border border-[rgba(0,194,224,0.2)] border-t-[rgba(0,194,224,0.1)] bg-gradient-to-b from-[#000001] from-0% via-[#001720] via-79% to-[#002230] to-100% p-16 text-center relative overflow-hidden">
                    <h2 className="text-[26px] md:text-[26px] font-bold text-white mb-4">
                        Use math, not luck.
                    </h2>
                    <p className="text-white/60 text-lg mb-8 max-w-[500px] mx-auto">
                        Follow data to guide your bets: line moves, money split,
                        injuries, weather, refs... Trusted by 15,000+ bettors.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <a
                            href="https://apps.apple.com/app/apple-store/id6695758303?pt=154158&amp;ct=website&amp;mt=8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
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
                            className="flex items-center justify-center gap-2 bg-transparent text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10"
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
                        <p className="text-white/40 text-sm">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white/60 transition-colors"
                                href="https://asymmetriclabs.xyz"
                            >
                                THE AWESOME COMPANY S.A
                            </a>{" "}
                            © {moment().format("YYYY")} All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
