import CreatorOptions from "@/components/Affiliation/CreatorOptions";
import FAQSection from "@/components/Affiliation/FAQSection";
import TiktokCarousel from "@/components/Affiliation/TiktokCarousel";
import VideoSection from "@/components/Affiliation/VideoSection";

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
