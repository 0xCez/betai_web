import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import * as motion from "motion/react-client";
import { FAQs } from "@/json/mock/contents";

export default function Affiliation() {
    const [accordionIndex, setAccordionIndex] = useState<number | null>(null);

    return (
        <div>
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
            </div>
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
                <div className="jsx-25dad32578659cc7 hidden md:block">
                    <span className="jsx-25dad32578659cc7 text-white font-medium">
                        Earn $1 per 1k
                    </span>{" "}
                    <span className="jsx-25dad32578659cc7 text-white font-medium">
                        views
                    </span>{" "}
                    by smoothly integrating our app
                </div>
                <div className="jsx-25dad32578659cc7 hidden md:block">
                    into your already successful Tiktok &amp; Reels.
                </div>
                <div className="jsx-25dad32578659cc7 md:hidden">
                    <span className="jsx-25dad32578659cc7 text-white font-bold">
                        Earn $1 per 1k views
                    </span>{" "}
                    by smoothly
                </div>
                <div className="jsx-25dad32578659cc7 md:hidden">
                    integrating our app into your already
                </div>
                <div className="jsx-25dad32578659cc7 md:hidden">
                    successful Tiktok &amp; Reels.
                </div>
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
                    <a
                        href="https://eu.jotform.com/sign/252376407366058/invite/01k3m3yn7g13f429d00b96c690"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex justify-center items-center w-[140px] md:w-[192px] h-[42px] md:h-[50px] px-[12px] md:px-[15px] py-[2px] gap-[8px] md:gap-[10px] rounded-[200px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                        <span className="jsx-25dad32578659cc7 absolute inset-0 rounded-[200px] border border-white/10"></span>
                        <span className="jsx-25dad32578659cc7 absolute inset-0 rounded-[200px] border-2 border-transparent bg-[length:400%_400%] animate-border-light"></span>
                        <span className="jsx-25dad32578659cc7 absolute inset-[2px] rounded-[200px] bg-gradientwha-to-r from-[#0B0B0B] to-[#191919] flex items-center justify-center">
                            <span className="jsx-25dad32578659cc7 text-white font-rethink-sans text-[13px] md:text-[16px]">
                                💰 Join our program
                            </span>
                        </span>
                    </a>
                    <a
                        href="https://quirky-daphne-313.notion.site/Taller-app-Creator-program-139793ad0b078092af4cf12458961c14?pvs=74"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex justify-center items-center w-[110px] md:w-[150px] h-[42px] md:h-[50px] px-[12px] md:px-[15px] py-[2px] gap-[8px] md:gap-[10px] rounded-[200px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                        <span className="jsx-25dad32578659cc7 absolute inset-0 rounded-[200px] border border-white/10"></span>
                        <span className="jsx-25dad32578659cc7 absolute inset-0 rounded-[200px] border-2 border-transparent bg-[length:400%_400%] animate-border-light"></span>
                        <span className="jsx-25dad32578659cc7 absolute inset-[2px] rounded-[200px] bg-gradientwha-to-r from-[#0B0B0B] to-[#191919] flex items-center justify-center">
                            <span className="jsx-25dad32578659cc7 text-white font-rethink-sans text-[13px] md:text-[16px]">
                                📖 Guidelines
                            </span>
                        </span>
                    </a>
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
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut", // 👈 easing in
                }}
                viewport={{ once: true }}
                className="transition-opacity duration-300 ease-out opacity-100"
            >
                <div className="jsx-25dad32578659cc7 mt-[120px] md:mt-[120px] mt-[80px] w-[90%] max-w-[700px] mx-auto space-y-4 md:space-y-6 space-y-3">
                    <div className="jsx-25dad32578659cc7 flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-150">
                        <div className="jsx-25dad32578659cc7 flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#00A0B9] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                            1
                        </div>
                        <div className="jsx-25dad32578659cc7 flex-1">
                            <h3 className="jsx-25dad32578659cc7 text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                                SIGN THE AGREEMENT{" "}
                            </h3>
                            <p className="jsx-25dad32578659cc7 text-white/50 text-[14px] md:text-[16px] mt-1">
                                Join the program by submitting your Paypal &amp;
                                a quick e-signature.
                            </p>
                        </div>
                    </div>
                    <div className="jsx-25dad32578659cc7 flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-150">
                        <div className="jsx-25dad32578659cc7 flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#00A0B9] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                            2
                        </div>
                        <div className="jsx-25dad32578659cc7 flex-1">
                            <h3 className="jsx-25dad32578659cc7 text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                                READ OUR GUIDELINES{" "}
                            </h3>
                            <p className="jsx-25dad32578659cc7 text-white/50 text-[14px] md:text-[16px] mt-1">
                                Discover how to feature the app smoothly in your
                                videos.
                            </p>
                        </div>
                    </div>
                    <div className="jsx-25dad32578659cc7 flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-150 rotate-z-2 my-8">
                        <div className="jsx-25dad32578659cc7 flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#00A0B9] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                            3
                        </div>
                        <div className="jsx-25dad32578659cc7 flex-1">
                            <h3 className="jsx-25dad32578659cc7 text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                                SUBMIT YOUR CONTENT
                            </h3>
                            <p className="jsx-25dad32578659cc7 text-white/50 text-[14px] md:text-[16px] mt-1">
                                Submit all videos via our Google Form so we can
                                track all your views.
                            </p>
                        </div>
                    </div>
                    <div className="jsx-25dad32578659cc7 flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative">
                        <div className="jsx-25dad32578659cc7 flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#00A0B9] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                            4
                        </div>
                        <div className="jsx-25dad32578659cc7 flex-1">
                            <h3 className="jsx-25dad32578659cc7 text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                                EARN MONEY{" "}
                            </h3>
                            <p className="jsx-25dad32578659cc7 text-white/50 text-[14px] md:text-[16px] mt-1">
                                Get pay 1$ for every 1k views.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="jsx-25dad32578659cc7 mt-[140px] md:mt-[140px] mt-[100px] py-[80px] md:py-[80px] py-[40px] bg-[#141414] overflow-hidden">
                <div className="jsx-25dad32578659cc7 w-full max-w-none">
                    <h2 className="jsx-25dad32578659cc7 text-center text-white text-[40px] md:text-[48px] font-bold mb-4">
                        Copy these videos
                    </h2>
                    <p className="jsx-25dad32578659cc7 text-center text-white/50 text-[18px] max-w-[700px] mx-auto mb-[60px] px-4 md:px-0">
                        You can use these videos as templates, but you
                        {/* <br className="jsx-25dad32578659cc7 md:hidden" /> */}
                        <br className="jsx-25dad32578659cc7 block" />
                        <span className="jsx-25dad32578659cc7 inline">
                            should also feel free to create your own.
                        </span>
                    </p>
                </div>
            </div>
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut", // 👈 easing in
                }}
                viewport={{ once: true }}
                className="transition-opacity duration-300 ease-out opacity-100"
            >
                <div className="jsx-25dad32578659cc7 mt-[100px] md:mt-[100px] mt-[60px] mb-[100px] md:mb-[100px] mb-[60px]">
                    <div className="w-[90%] max-w-[1000px] mx-auto">
                        <h2 className="jsx-25dad32578659cc7 text-center text-white text-[40px] md:text-[48px] font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="jsx-25dad32578659cc7 text-center text-white/50 text-xl max-w-[700px] mx-auto mb-[60px]">
                            Get quick answers to the most common
                            <br className="jsx-25dad32578659cc7" />
                            questions about our creator program.
                        </p>
                        <div className="space-y-4 md:space-y-4 space-y-2 max-w-[700px] mx-auto">
                            {FAQs.map((_faq, index) => (
                                <div
                                    key={index}
                                    className="rounded-[20px] bg-linear-to-r from-[#0c0c0c] from-55% to-[#101010] to-100% border border-white/5 overflow-hidden"
                                >
                                    <button
                                        onClick={() =>
                                            setAccordionIndex((prev) =>
                                                index === prev ? null : index
                                            )
                                        }
                                        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                                    >
                                        <span className="text-white text-[18px] md:text-[20px] font-medium">
                                            {_faq.title}
                                        </span>
                                        <motion.span
                                            animate={{
                                                rotate:
                                                    accordionIndex === index
                                                        ? 180
                                                        : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="text-white text-2xl" />
                                        </motion.span>
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height:
                                                index === accordionIndex
                                                    ? "auto"
                                                    : 0,
                                            opacity:
                                                index === accordionIndex
                                                    ? 1
                                                    : 0,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className="p-6 pt-0 text-white/70 w-11/12"
                                            dangerouslySetInnerHTML={{
                                                __html: _faq.content,
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
