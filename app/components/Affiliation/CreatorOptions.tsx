import React from "react";
import * as motion from "motion/react-client";
import { CREATOR_OPTIONS } from "@/json/mock/contents";
import { cx } from "@/lib/utils";

export default function CreatorOptions() {
    return (
        <div>
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
                    {CREATOR_OPTIONS.map((_item, index) => (
                        <div
                            className={cx(
                                "jsx-25dad32578659cc7 flex items-center rounded-[20px] md:rounded-[200px] bg-[#111111] border border-white/5 p-3 md:p-4 min-h-[90px] md:min-h-[90px] min-h-[70px] overflow-hidden relative cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-150",
                                {
                                    "rotate-z-2 my-8": index === 2,
                                }
                            )}
                            key={index}
                        >
                            <div className="jsx-25dad32578659cc7 flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#00A0B9] rounded-full flex items-center justify-center text-white text-[24px] md:text-[30px] font-bold mr-3 md:mr-6">
                                {index + 1}
                            </div>
                            <div className="jsx-25dad32578659cc7 flex-1">
                                <h3 className="jsx-25dad32578659cc7 text-white text-[18px] md:text-[20px] font-bold flex items-center flex-wrap">
                                    {_item.title}
                                </h3>
                                <p className="jsx-25dad32578659cc7 text-white/50 text-[14px] md:text-[16px] mt-1">
                                    {_item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
