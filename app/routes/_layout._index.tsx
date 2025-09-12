import { useLocation, type MetaArgs } from "react-router";
import { Welcome } from "../welcome/welcome";
import { FeatureGrid } from "@/components/FeaturesGrid";
import HeroSection from "@/components/HeroSection";
import ProductFeatures from "@/components/ProductFeatures";
import ReviewSection from "@/components/ReviewSection";
import { useEffect } from "react";

export function meta({}: MetaArgs) {
    return [
        { title: "Bet.AI" },
        { name: "description", content: "Welcome to Bet.AI!" },
    ];
}

export default function Index() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div>
            <HeroSection />
            <FeatureGrid />
            <ProductFeatures />
            <ReviewSection />
        </div>
    );
}
