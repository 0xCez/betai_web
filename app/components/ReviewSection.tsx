import assets from "@/json/assets";
import React from "react";
import * as motion from "motion/react-client";

export default function ReviewSection() {
    return (
        <div>
            <section
                className="w-full max-w-[1200px] mx-auto px-4"
                aria-label="Customer Testimonials"
            >
                <motion.header
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    className="text-left mb-8"
                >
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
                </motion.header>
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-start mt-[60px]"
                    role="list"
                >
                    <motion.article
                        initial={{ y: 15, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut", // 👈 easing in
                        }}
                        whileHover={{
                            y: -10,
                        }}
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
                    </motion.article>
                    <motion.article
                        initial={{ y: 15, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut", // 👈 easing in
                            delay: 0.2,
                        }}
                        whileHover={{
                            y: -10,
                        }}
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
                    </motion.article>
                    <motion.article
                        initial={{ y: 15, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut", // 👈 easing in
                            delay: 0.4,
                        }}
                        whileHover={{
                            y: -10,
                        }}
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
                    </motion.article>
                </div>
            </section>
        </div>
    );
}
