import { FeatureGrid } from "@/components/FeaturesGrid";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import React from "react";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
