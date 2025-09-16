import assets from "@/json/assets";
import { useEffect, useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";

export default function InstagramEmbed5() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="flex-shrink-0 w-[280px] md:w-[320px] mx-3 relative group cursor-pointer">
            <div className="aspect-[9/16] w-full bg-black rounded-[20px] overflow-hidden relative">
                {isLoading && (
                    <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
                        <div className="w-6 h-6 border-2 border-[#006F80] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <video
                    width="100%"
                    height="100%"
                    ref={videoRef}
                    onLoad={() => setIsLoading(false)}
                    onClick={() => {
                        if (isPlaying) {
                            videoRef.current?.pause();
                        } else {
                            videoRef.current?.play();
                        }
                        setIsPlaying((prev) => !prev);
                    }}
                >
                    <source src={assets.video5} />
                </video>
                {!isPlaying && (
                    <IoPlay
                        size={50}
                        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pointer-events-none"
                    />
                )}
            </div>
            <a
                href="https://www.instagram.com/bet_ai_app/reel/DLlLQMpA5NH/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 text-white text-xs px-2 py-1 rounded"
            >
                Click to open
            </a>
        </div>
    );
}
