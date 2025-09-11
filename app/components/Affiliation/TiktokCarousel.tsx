"use client";

import React, { lazy, Suspense } from "react";
const Marquee = lazy(() => import("react-fast-marquee"));
import TiktokCard from "./TiktokCard";
import InstagramEmbed from "./InstagramEmbed";
import { EMBEDDED_VIDEOS } from "@/json/mock/contents";

export default function TiktokCarousel() {
    return (
        <div>
            <div className="mt-[140px] md:mt-[140px] mt-[100px] py-[80px] md:py-[80px] py-[40px] bg-[#141414] overflow-hidden">
                <div className="w-full max-w-none">
                    <h2 className="text-center text-white text-[40px] md:text-[48px] font-bold mb-4">
                        Copy these videos
                    </h2>
                    <p className="text-center text-white/50 text-[18px] max-w-[700px] mx-auto mb-[60px] px-4 md:px-0">
                        You can use these videos as templates, but you
                        {/* <br className="md:hidden" /> */}
                        <br className="block" />
                        <span className="inline">
                            should also feel free to create your own.
                        </span>
                    </p>
                </div>
                <Suspense fallback={null}>
                    <Marquee pauseOnHover>
                        {EMBEDDED_VIDEOS.map((_item, index) =>
                            _item.type === "instagram" ? (
                                <InstagramEmbed url={_item.url} key={index} />
                            ) : (
                                <TiktokCard />
                            )
                        )}
                    </Marquee>
                </Suspense>
            </div>
        </div>
    );
}
