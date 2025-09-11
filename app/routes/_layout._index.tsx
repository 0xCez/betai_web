import type { MetaArgs } from "react-router";
import { Welcome } from "../welcome/welcome";
import { FeatureGrid } from "@/components/FeaturesGrid";
import HeroSection from "@/components/HeroSection";
import ProductFeatures from "@/components/ProductFeatures";
import ReviewSection from "@/components/ReviewSection";

export function meta({}: MetaArgs) {
    return [
        { title: "Bet.AI" },
        { name: "description", content: "Welcome to Bet.AI!" },
    ];
}

export default function Index() {
    return (
        <div>
            <HeroSection />
            <FeatureGrid />
            <ProductFeatures />
            <ReviewSection />
        </div>
    );
}
