import assets from "@/json/assets";
import { useEffect, useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";

export default function InstagramEmbed2() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // inject Instagram script if not already present
        if (
            !document.querySelector(
                "script[src='https://www.instagram.com/embed.js']"
            )
        ) {
            const script = document.createElement("script");
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }

        // observe when Instagram replaces blockquote with iframe
        const observer = new MutationObserver(() => {
            const iframe = document.querySelector("iframe.instagram-media");
            if (iframe) {
                iframe.addEventListener("load", () => {
                    setIsLoading(false); // Only hide loader when iframe content fully ready
                });
                observer.disconnect();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

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
                    <source src={assets.video2} />
                </video>
                {!isPlaying && (
                    <IoPlay
                        size={50}
                        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pointer-events-none"
                    />
                )}
            </div>
            <a
                href="https://www.instagram.com/bet_ai_app/reel/DLZxfo5IiJI/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 text-white text-xs px-2 py-1 rounded"
            >
                Click to open
            </a>
        </div>
    );
}
