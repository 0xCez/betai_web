import type { MetaArgs } from "react-router";
import { Welcome } from "../welcome/welcome";
import { FeatureGrid } from "@/components/FeaturesGrid";
import HeroSection from "@/components/HeroSection";
import ProductFeatures from "@/components/ProductFeatures";

export function meta({}: MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Index() {
    return (
        <div>
            <HeroSection />
            <FeatureGrid />
            <ProductFeatures />
        </div>
    );
}
