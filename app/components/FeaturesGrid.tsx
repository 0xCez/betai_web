import assets from "@/json/assets";
import * as motion from "motion/react-client";

export function FeatureGrid() {
    return (
        <section id="features" className="py-20 md:pt-[160px] md:pb-20">
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut", // 👈 easing in
                }}
                className="text-center mb-16"
            >
                <h2
                    className="text-white text-[26px] md:text-4xl font-medium leading-[46.8px] mb-4"
                    id="features-heading"
                >
                    Your betting edge starts here
                </h2>
                <p className="font-normal mx-auto px-4 md:px-0 max-w-[320px] md:max-w-[650px] text-center text-[16px] md:text-xl font-medium leading-[1.3] md:leading-[22.4px] tracking-[0.32px] text-white/50">
                    Bet.AI turns screenshots into instant insights, breaking
                    down odds, signals, and hidden factors so you always see the
                    full picture.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 max-w-[1200px] mx-auto px-4 relative w-full before:hidden md:before:block before:content-[''] before:absolute before:top-[50%] before:left-0 before:w-full before:h-px before:bg-[linear-gradient(90deg,rgba(0,221,255,0.05)_0%,rgba(0,221,255,0.25)_55%,rgba(0,221,255,0.05)_100%)]">
                <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                    }}
                    viewport={{ amount: 0.4 }}
                    className='px-0 py-8 md:p-5 relative  after:hidden md:after:block after:content-[""] after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-[linear-gradient(180deg,rgba(0,221,255,0.00)_0%,rgba(0,221,255,0.25)_100%)] before:md:hidden before:block before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-[linear-gradient(90deg,rgba(0,221,255,0.00)_0%,rgba(0,221,255,0.25)_50%,rgba(0,221,255,0.00)_100%)]'
                >
                    <div className="mb-3">
                        <img
                            alt="Dynamic height prediction feature icon"
                            loading="lazy"
                            className="w-7 h-7"
                            src={assets.icons.camera}
                        />
                    </div>
                    <h3
                        className="text-white text-[18px] md:text-xl font-medium leading-[22.4px] tracking-[0.32px] mb-3 flex items-center gap-2"
                        id="feature-0"
                    >
                        Snap & Analyze
                    </h3>
                    <p
                        className="text-white/50 text-[14px] md:text-base font-medium leading-[22.4px] tracking-[0.32px]"
                        aria-labelledby="feature-0"
                    >
                        Upload a bet slip or take a pic of the game your
                        watching: Bet.AI runs the numbers for you in seconds.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                        delay: 0.1,
                    }}
                    viewport={{ amount: 0.4 }}
                    className='px-0 py-8 md:p-5 relative  after:hidden md:after:block after:content-[""] after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-[linear-gradient(180deg,rgba(0,221,255,0.00)_0%,rgba(0,221,255,0.25)_100%)] before:md:hidden before:block before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-[linear-gradient(90deg,rgba(0,221,255,0.00)_0%,rgba(0,221,255,0.25)_50%,rgba(0,221,255,0.00)_100%)]'
                >
                    <div className="mb-3">
                        <img
                            alt="Dynamic height prediction feature icon"
                            loading="lazy"
                            className="w-7 h-7"
                            src={assets.icons.brain}
                        />
                    </div>
                    <h3
                        className="text-white text-[18px] md:text-xl font-medium leading-[22.4px] tracking-[0.32px] mb-3 flex items-center gap-2"
                        id="feature-0"
                    >
                        AI-Powered Breakdown
                    </h3>
                    <p className="text-white/50 text-[14px] md:text-base font-medium leading-[22.4px] tracking-[0.32px]">
                        Thousands of data points processed instantly: line
                        shifts, market moves, and more.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                        delay: 0.2,
                    }}
                    viewport={{ amount: 0.4 }}
                    className='px-0 py-8 md:p-5 relative  before:md:hidden before:block before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-[linear-gradient(90deg,rgba(0,221,255,0.00)_0%,rgba(0,221,255,0.25)_50%,rgba(0,221,255,0.00)_100%)]'
                >
                    <div className="mb-3">
                        <img
                            alt="Dynamic height prediction feature icon"
                            loading="lazy"
                            className="w-7 h-7"
                            src={assets.icons.barChart}
                        />
                    </div>
                    <h3
                        className="text-white text-[18px] md:text-xl font-medium leading-[22.4px] tracking-[0.32px] mb-3 flex items-center gap-2"
                        id="feature-0"
                    >
                        Sharp vs Public
                    </h3>
                    <p className="text-white/50 text-[14px] md:text-base font-medium leading-[22.4px] tracking-[0.32px]">
                        See where the smart money is. Compare pros vs the crowd
                        instantly.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                        delay: 0.1,
                    }}
                    viewport={{ amount: 0.4 }}
                    className='px-0 py-8 md:p-5 relative  after:hidden md:after:block after:content-[""] after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-[linear-gradient(0deg,rgba(0,221,255,0.00)_0%,rgba(0,221,255,0.25)_100%)] before:md:hidden before:block before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-[linear-gradient(90deg,rgba(0,221,255,0.00)_0%,rgba(0,221,255,0.25)_50%,rgba(0,221,255,0.00)_100%)]'
                >
                    <div className="mb-3">
                        <img
                            alt="Dynamic height prediction feature icon"
                            loading="lazy"
                            className="w-7 h-7"
                            src={assets.icons.magnifying}
                        />
                    </div>
                    <h3
                        className="text-white text-[18px] md:text-xl font-medium leading-[22.4px] tracking-[0.32px] mb-3 flex items-center gap-2"
                        id="feature-0"
                    >
                        Hidden Factors Uncovered
                    </h3>
                    <p className="text-white/50 text-[14px] md:text-base font-medium leading-[22.4px] tracking-[0.32px]">
                        Weather, injuries, refs, momentum… Bet.AI highlights key
                        details so nothing slips by.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                        delay: 0.2,
                    }}
                    viewport={{ amount: 0.4 }}
                    className='px-0 py-8 md:p-5 relative  after:hidden md:after:block after:content-[""] after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-[linear-gradient(0deg,rgba(0,221,255,0.00)_0%,rgba(0,221,255,0.25)_100%)] before:md:hidden before:block before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-[linear-gradient(90deg,rgba(0,221,255,0.00)_0%,rgba(0,221,255,0.25)_50%,rgba(0,221,255,0.00)_100%)]'
                >
                    <div className="mb-3">
                        <img
                            alt="Dynamic height prediction feature icon"
                            loading="lazy"
                            className="w-7 h-7"
                            src={assets.icons.robot}
                        />
                    </div>
                    <h3
                        className="text-white text-[18px] md:text-xl font-medium leading-[22.4px] tracking-[0.32px] mb-3 flex items-center gap-2"
                        id="feature-0"
                    >
                        Always-On Analyst
                    </h3>
                    <p className="text-white/50 text-[14px] md:text-base font-medium leading-[22.4px] tracking-[0.32px]">
                        Debate your picks, or any factors anytime with your 24/7
                        AI betting assistant.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut", // 👈 easing in
                        delay: 0.3,
                    }}
                    viewport={{ amount: 0.4 }}
                    className="px-0 py-8 md:p-5 relative "
                >
                    <div className="mb-2">
                        <img
                            alt="Dynamic height prediction feature icon"
                            loading="lazy"
                            className="w-7 h-7"
                            src={assets.icons.tools}
                        />
                    </div>
                    <h3
                        className="text-white text-[18px] md:text-xl font-medium leading-[22.4px] tracking-[0.32px] mb-3 flex items-center gap-2"
                        id="feature-0"
                    >
                        Pro Tools
                        <div className="py-0.5 px-2.5 border border-[#00DDFF] bg-[rgba(0,221,255,0.1)] rounded-full text-[10px] text-[rgba(0,221,255,0.8)] ml-3">
                            Coming soon
                        </div>
                    </h3>
                    <p className="text-white/50 text-[14px] md:text-base font-medium leading-[22.4px] tracking-[0.32px]">
                        Custom alerts, deeper prop breakdowns, bookmaker
                        comparisons, and beyond.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
