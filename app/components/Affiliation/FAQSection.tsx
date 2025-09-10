import React, { useState } from "react";
import * as motion from "motion/react-client";
import { FAQs } from "@/json/mock/contents";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const [accordionIndex, setAccordionIndex] = useState<number | null>(null);

    return (
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
                                            index === accordionIndex ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="overflow-hidden [&_ul]:list-disc [&_ul,&_ol]:px-5 [&_ol]:list-decimal"
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
    );
}
