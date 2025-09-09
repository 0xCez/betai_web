import assets from "@/json/assets";
import React from "react";

export default function HeroSection() {
    return (
        <div>
            <div>
                <header>
                    <h1 className="mt-[80px] text-center font-medium text-[40px] md:text-[50px] leading-[1.1] md:leading-[1.1] max-w-[600px] w-[95%] mx-auto tracking-[-1px] md:tracking-[-2.53px] pb-8 md:pb-8 [@media(max-width:768px)]:text-[32px] [@media(max-width:768px)]:font-manrope [@media(max-width:768px)]:pb-3 [@media(max-width:768px)]:max-w-[350px]">
                        <span className="bg-gradient-to-b from-[#DEF9FF] from-5% to-[#41ADC5] to-77% bg-clip-text text-transparent tracking-[0.7px]">
                            Smarter Betting
                        </span>
                        <br />
                        <span className="bg-gradient-to-b from-[#8DEAFF] from-0% to-[#025062] to-100% bg-clip-text text-transparent tracking-[0.7px]">
                            Insights with Bet.AI
                        </span>
                    </h1>
                </header>
                <p className="max-w-[450px] w-[90%] mx-auto text-center text-[18px] font-medium leading-[1.2] md:leading-[22.4px] tracking-[0.32px] text-white/50 [@media(max-width:768px)]:text-[16px] [@media(max-width:768px)]:max-w-[300px]">
                    You can’t control the odds, but you can use data to guide
                    your decisions.{" "}
                    <span className="text-white">15,000+ of users agree</span>.
                </p>
            </div>
            <div>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex justify-center items-center w-[192px] h-[50px] px-[15px] py-[2px] gap-[10px] mx-auto mt-8 rounded-[200px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                    <span className="absolute inset-0 rounded-[200px] border border-white/10"></span>
                    <span className="absolute inset-0 rounded-[200px] border-2 border-transparent bg-[length:400%_400%] animate-border-light"></span>
                    <span className="absolute inset-[2px] rounded-[200px] bg-gradient-to-r from-[#0B0B0B] to-[#191919] flex items-center justify-center">
                        <img
                            alt="Download icon"
                            loading="lazy"
                            className="mr-2 w-5 h-5"
                            src={assets.icons.download}
                        />
                        <span className="text-white font-rethink-sans">
                            Download Bet.AI
                        </span>
                    </span>
                </a>
            </div>
            <div>
                <div className="mt-[0px] w-full md:w-[100%] lg:w-full max-w-[1000px] mx-auto px-4">
                    <img
                        src={assets.mockup}
                        alt="Bet.AI App interface"
                        fetchPriority="high"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
