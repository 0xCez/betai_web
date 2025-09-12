import React from "react";
import * as motion from "motion/react-client";
import { Link } from "react-router";

export default function VideoSection() {
    return (
        <div>
            <motion.header
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut", // 👈 easing in
                }}
                viewport={{ once: true }}
            >
                <h1 className="mt-[80px] text-center font-medium text-[40px] md:text-[50px] leading-[1.1] md:leading-[1.1] max-w-[600px] w-[95%] mx-auto tracking-[-1px] md:tracking-[-2.53px] pb-8 md:pb-8 [@media(max-width:768px)]:text-[32px] [@media(max-width:768px)]:font-manrope [@media(max-width:768px)]:pb-3 [@media(max-width:768px)]:max-w-[350px]">
                    <span className="bg-gradient-to-b from-[#DEF9FF] from-5% to-[#41ADC5] to-77% bg-clip-text text-transparent tracking-[0.7px]">
                        Bet.AI
                    </span>
                    <br />
                    <span className="bg-gradient-to-b from-[#8DEAFF] from-0% to-[#025062] to-100% bg-clip-text text-transparent tracking-[0.7px]">
                        Creator Program
                    </span>
                </h1>
            </motion.header>
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut", // 👈 easing in
                    delay: 0.15,
                }}
                viewport={{ once: true }}
                className="flex flex-col justify-center max-w-[600px] w-[90%] mx-auto text-center font-rethink-sans text-[18px] font-medium leading-[1.2] md:leading-[22.4px] tracking-[0.32px] text-white/50 [@media(max-width:768px)]:text-[16px] [@media(max-width:768px)]:max-w-[350px] [@media(max-width:768px)]:leading-[1.35]"
            >
                <div className="hidden md:block">
                    <span className="text-white font-medium">
                        Earn $1 per 1k
                    </span>{" "}
                    <span className="text-white font-medium">views</span> by
                    smoothly integrating our app
                </div>
                <div className="hidden md:block">
                    into your already successful Tiktok &amp; Reels.
                </div>
                <div className="md:hidden">
                    <span className="text-white font-bold">
                        Earn $1 per 1k views
                    </span>{" "}
                    by smoothly
                </div>
                <div className="md:hidden">
                    integrating our app into your already
                </div>
                <div className="md:hidden">successful Tiktok &amp; Reels.</div>
            </motion.div>
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut", // 👈 easing in
                    delay: 0.3,
                }}
                viewport={{ once: true }}
                className="transition-opacity duration-300 ease-out opacity-100"
            >
                <div className="flex justify-center items-center gap-2 md:gap-4 mt-8 flex-wrap">
                    <Link
                        to="#product"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex justify-center items-center w-[140px] md:w-[192px] h-[42px] md:h-[50px] px-[12px] md:px-[15px] py-[2px] gap-[8px] md:gap-[10px] rounded-[200px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                        <span className="absolute inset-0 rounded-[200px] border border-white/10"></span>
                        <span className="absolute inset-0 rounded-[200px] border-2 border-transparent bg-[length:400%_400%] animate-border-light"></span>
                        <span className="absolute inset-[2px] rounded-[200px] bg-gradientwha-to-r from-[#0B0B0B] to-[#191919] flex items-center justify-center">
                            <span className="text-white font-rethink-sans text-[13px] md:text-[16px]">
                                💰 Join our program
                            </span>
                        </span>
                    </Link>
                    <Link
                        to="https://sustaining-woodpecker-b3e.notion.site/Bet-AI-Content-Guide-26aec3e45e728080bea1f0a0af5f889d?pvs=73"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex justify-center items-center w-[110px] md:w-[150px] h-[42px] md:h-[50px] px-[12px] md:px-[15px] py-[2px] gap-[8px] md:gap-[10px] rounded-[200px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                        <span className="absolute inset-0 rounded-[200px] border border-white/10"></span>
                        <span className="absolute inset-0 rounded-[200px] border-2 border-transparent bg-[length:400%_400%] animate-border-light"></span>
                        <span className="absolute inset-[2px] rounded-[200px] bg-gradientwha-to-r from-[#0B0B0B] to-[#191919] flex items-center justify-center">
                            <span className="text-white font-rethink-sans text-[13px] md:text-[16px]">
                                📖 Guidelines
                            </span>
                        </span>
                    </Link>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut", // 👈 easing in
                    delay: 0.45,
                }}
                viewport={{ once: true }}
                className="transition-opacity duration-300 ease-out opacity-100"
            >
                <div className="mt-[60px] w-[90%] max-w-[1000px] mx-auto rounded-[30px] bg-white/10 overflow-hidden relative">
                    <div className="aspect-video w-full">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/zAQsAYt72WE?si=j334hmDg-cS3Q5Hr"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy"
                            className="rounded-[20px]"
                        ></iframe>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
