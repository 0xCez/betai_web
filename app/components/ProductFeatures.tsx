import assets from "@/json/assets";
import React from "react";
import * as motion from "motion/react-client";

export default function ProductFeatures() {
    return (
        <section
            id="product"
            className="w-full max-w-[1200px] mx-auto px-4 pt-[50px] md:pt-[150px]"
        >
            <article className="mb-[50px] md:mb-[160px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[100px]">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    className="w-full md:w-[45%] order-2 md:order-1"
                >
                    <img
                        alt="Interactive height prediction chart showing growth projections over time"
                        fetchPriority="high"
                        className="w-full h-auto rounded-[20px]"
                        src={assets.card1}
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2"
                >
                    <h1 className="text-white text-4xl font-medium mb-10">
                        From screenshot to signal
                    </h1>
                    <p className="text-white/50 text-lg md:text-xl">
                        Snap a pic of your bet slip or live game on TV. Bet.AI
                        turns it into a clear, explainable brief, so you can
                        make sharper decisions without digging for hours.
                    </p>
                </motion.div>
            </article>
            <article className="mb-[50px] md:mb-[250px] flex flex-col md:flex-row-reverse items-center gap-[30px] md:gap-[100px]">
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    className="w-full md:w-1/2 order-2 md:order-1"
                >
                    <img
                        alt="Daily tasks and habits"
                        loading="lazy"
                        className="w-full h-auto rounded-[20px]"
                        src={assets.card2}
                    />
                </motion.div>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2"
                >
                    <h2 className="text-white text-4xl font-medium mb-10">
                        Data-backed, AI-driven insights
                    </h2>
                    <p className="text-white/50 text-lg md:text-xl">
                        Our model parses thousands of data points: line
                        movement, public vs sharp moves, team form, injuries,
                        travel, and more.
                    </p>
                </motion.div>
            </article>
            <article className="mb-[50px] md:mb-[250px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[100px]">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    className="w-full md:w-1/2 order-2 md:order-1"
                >
                    <img
                        alt="Community engagement"
                        loading="lazy"
                        className="w-full h-auto rounded-[20px]"
                        src={assets.card3}
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2"
                >
                    <h2 className="text-white text-4xl font-medium mb-10">
                        Every detail, surfaced
                    </h2>
                    <p className="text-white/50 text-lg md:text-xl">
                        Head-to-head, momentum, weather, refs, rest, travel...
                        Bet.AI puts the small hidden edges right in front of you
                        so you don’t miss them.
                    </p>
                </motion.div>
            </article>
            <article className="mb-[50px] md:mb-[250px] flex flex-col md:flex-row-reverse items-center gap-[30px] md:gap-[100px]">
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    className="w-full md:w-1/2 order-2 md:order-1"
                >
                    <img
                        alt="AI chat interface"
                        loading="lazy"
                        className="w-full h-auto rounded-[20px]"
                        src={assets.card4}
                    />
                </motion.div>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2"
                >
                    <h2 className="text-white text-4xl font-medium mb-10">
                        Market context, decoded
                    </h2>
                    <p className="text-white/50 text-lg md:text-xl">
                        We compare current price with recent movement, public vs
                        sharp split, and matchup context. If something looks
                        off, you’ll see it fast, before it moves again.
                    </p>
                </motion.div>
            </article>
            <article className="mb-[50px] md:mb-[150px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[100px]">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    className="w-full md:w-1/2 order-2 md:order-1"
                >
                    <img
                        alt="AI chat interface"
                        loading="lazy"
                        className="w-full h-auto rounded-[20px]"
                        src={assets.card5}
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2"
                >
                    <h2 className="text-white text-4xl font-medium mb-10">
                        Ask our analyst, 24/7
                    </h2>
                    <p className="text-white/50 text-lg md:text-xl">
                        Debate about any game: odd shifts, injuries, prop
                        angles, line moves, hidden risks. Get instant,
                        data-grounded answers you can sanity-check, just
                        transparent analysis.
                    </p>
                </motion.div>
            </article>
        </section>
    );
}
