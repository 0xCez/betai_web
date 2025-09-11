import { useEffect, useState } from "react";

export default function InstagramEmbed5() {
    const [isLoading, setIsLoading] = useState(true);

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
                <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/reel/DJJ8t0DRzlX/?utm_source=ig_embed&amp;utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{
                        background: "#FFF",
                        border: 0,
                        borderRadius: 3,
                        boxShadow:
                            "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                        margin: 1,
                        maxWidth: 540,
                        minWidth: 326,
                        padding: 0,
                        width: "99.375%",
                    }}
                ></blockquote>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 text-white text-xs px-2 py-1 rounded pointer-events-none">
                Click to open
            </div>
        </div>
    );
}
