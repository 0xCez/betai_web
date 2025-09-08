import assets from "@/json/assets";
import React from "react";

export default function ProductFeatures() {
    return (
        <section
            id="product"
            className="w-full max-w-[1200px] mx-auto px-4 mt-[50px] md:mt-[150px]"
        >
            <article className="mb-[50px] md:mb-[160px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[60px]">
                <div className="w-full md:w-[45%] order-2 md:order-1">
                    <img
                        alt="Interactive height prediction chart showing growth projections over time"
                        fetchPriority="high"
                        className="w-full h-auto rounded-[20px]"
                        src={assets.card1}
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
                    <h1 className="text-white text-5xl font-medium mb-10">
                        From screenshot to signal
                    </h1>
                    <p className="text-white/50 text-2xl">
                        Snap a pic of your bet slip or live game on TV. Bet.AI
                        turns it into a clear, explainable brief, so you can
                        make sharper decisions without digging for hours.
                    </p>
                </div>
            </article>
            <article className="mb-[50px] md:mb-[250px] flex flex-col md:flex-row-reverse items-center gap-[30px] md:gap-[80px]">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <img
                        alt="Daily tasks and habits"
                        loading="lazy"
                        className="w-full h-auto rounded-[20px]"
                        src={assets.card2}
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
                    <h2 className="text-white text-5xl font-medium mb-10">
                        Data-backed, AI-driven insights
                    </h2>
                    <p className="text-white/50 text-2xl">
                        Our model parses thousands of data points: line
                        movement, public vs sharp moves, team form, injuries,
                        travel, and more.
                    </p>
                </div>
            </article>
            <article className="mb-[50px] md:mb-[250px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[80px]">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <img
                        alt="Community engagement"
                        loading="lazy"
                        className="w-full h-auto rounded-[20px]"
                        src={assets.card3}
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
                    <h2 className="text-white text-5xl font-medium mb-10">
                        Every detail, surfaced
                    </h2>
                    <p className="text-white/50 text-2xl">
                        Head-to-head, momentum, weather, refs, rest, travel...
                        Bet.AI puts the small hidden edges right in front of you
                        so you don’t miss them.
                    </p>
                </div>
            </article>
            <article className="mb-[50px] md:mb-[250px] flex flex-col md:flex-row-reverse items-center gap-[30px] md:gap-[80px]">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <img
                        alt="AI chat interface"
                        loading="lazy"
                        className="w-full h-auto rounded-[20px]"
                        src={assets.card4}
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
                    <h2 className="text-white text-5xl font-medium mb-10">
                        Market context, decoded
                    </h2>
                    <p className="text-white/50 text-2xl">
                        See how the line moved and where the money’s going.
                        Compare public action vs sharp activity to understand
                        the story behind today’s price.
                    </p>
                </div>
            </article>
            <article className="mb-[50px] md:mb-[150px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[80px]">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <img
                        alt="AI chat interface"
                        loading="lazy"
                        className="w-full h-auto rounded-[20px]"
                        src={assets.card5}
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
                    <h2 className="text-white text-5xl font-medium mb-10">
                        Ask our analyst, 24/7
                    </h2>
                    <p className="text-white/50 text-2xl">
                        Debate about any game: odd shifts, injuries, prop
                        angles, line moves, hidden risks. Get instant,
                        data-grounded answers you can sanity-check, just
                        transparent analysis.
                    </p>
                </div>
            </article>
        </section>
    );
}
