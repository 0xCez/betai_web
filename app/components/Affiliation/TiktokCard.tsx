import React, { useEffect, useState } from "react";

export default function TiktokCard({ url }: { url: string }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // inject Instagram script if not already present
        if (
            !document.querySelector(
                "script[src='https://www.tiktok.com/embed.js']"
            )
        ) {
            const script = document.createElement("script");
            script.src = "https://www.tiktok.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }

        // observe when Instagram replaces blockquote with iframe
        const observer = new MutationObserver(() => {
            const iframe = document.querySelector("iframe.tiktok-embed");
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
                    className="tiktok-embed"
                    cite="https://www.tiktok.com/@perecastorai/video/7510910389006142742"
                    data-video-id="7510910389006142742"
                    style={{ maxWidth: "605px", minWidth: "325px" }}
                >
                    {" "}
                    <section>
                        {" "}
                        <a
                            target="_blank"
                            title="@perecastorai"
                            href="https://www.tiktok.com/@perecastorai?refer=embed"
                        >
                            @perecastorai
                        </a>{" "}
                        <p>
                            C’est quoi cette app ?? L’IA a prédit la victoire du
                            PSG contre l’INTER MILAN 🤯🤯
                        </p>{" "}
                        <a
                            target="_blank"
                            title="♬ AURA - Ogryzek"
                            href="https://www.tiktok.com/music/AURA-7387573619378046993?refer=embed"
                        >
                            ♬ AURA - Ogryzek
                        </a>{" "}
                    </section>{" "}
                </blockquote>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 text-white text-xs px-2 py-1 rounded pointer-events-none">
                Click to open
            </div>
        </div>
    );
}
