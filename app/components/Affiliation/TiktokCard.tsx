import React, { useState } from "react";

export default function TiktokCard({ url }: { url: string }) {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className="flex-shrink-0 w-[280px] md:w-[320px] mx-3 relative group cursor-pointer">
            <div className="aspect-[9/16] w-full bg-black rounded-[20px] overflow-hidden relative">
                {isLoading && (
                    <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
                        <div className="w-6 h-6 border-2 border-[#006F80] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <iframe
                    src={url}
                    className="w-full h-full rounded-[20px] border-0"
                    allowFullScreen
                    loading="lazy"
                    onLoad={() => setIsLoading(false)}
                    style={{
                        border: "none",
                        outline: "none",
                        backgroundColor: "black",
                        transform: "scale(1.02)",
                        transformOrigin: "center center",
                        opacity: 1,
                        transition: "opacity 0.3s",
                    }}
                ></iframe>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 text-white text-xs px-2 py-1 rounded pointer-events-none">
                Click to open
            </div>
        </div>
    );
}
