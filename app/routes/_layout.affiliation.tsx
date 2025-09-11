import CreatorOptions from "@/components/Affiliation/CreatorOptions";
import FAQSection from "@/components/Affiliation/FAQSection";
import TiktokCarousel from "@/components/Affiliation/TiktokCarousel";
import VideoSection from "@/components/Affiliation/VideoSection";
import type { MetaArgs } from "react-router";

export function meta({}: MetaArgs) {
    return [
        { title: "Bet.AI" },
        { name: "description", content: "Welcome to Bet.AI!" },
    ];
}

export default function Affiliation() {
    return (
        <div>
            <VideoSection />
            <CreatorOptions />
            <TiktokCarousel />
            <FAQSection />
        </div>
    );
}
