import React from "react";
import "@/styles/style.css";
import assets from "@/json/assets";

export default function Terms() {
    return (
        <main className="hero-gradient min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
                <img
                    src={assets.logo}
                    alt="bet.ai logo"
                    className="w-32 h-32 "
                />
            </div>
            <div className="max-w-4xl mx-auto glass rounded-2xl p-8 mt-20">
                <h1 className="text-3xl mb-4 gradient-text">
                    Terms of Service
                </h1>
                <p className="text-gray-400 mb-8">
                    Last updated: March 27, 2025
                </p>

                <div className="space-y-8 text-gray-300">
                    <p>
                        This Terms of Service agreement ("Agreement") is entered
                        into between <strong>The Awesome Company</strong>, a
                        French company with its registered office at 69 rue de
                        Rome, 75008, Paris, France ("Company," "we," "us," or
                        "our"), and <strong>you</strong> ("you" or "user"). This
                        Agreement governs your access to and use of the{" "}
                        <strong>Bet.AI</strong> mobile application, as well as
                        any related websites, platforms, or services
                        (collectively, the "App"). By accessing or using Bet.AI,
                        you agree to these Terms of Service.
                    </p>

                    <p className="font-bold text-white">
                        IF YOU DO NOT AGREE WITH THESE TERMS, YOU MUST
                        IMMEDIATELY DISCONTINUE USE.
                    </p>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            1. Acknowledgment
                        </h2>
                        <p>
                            This End-User License Agreement (EULA) is between
                            you and The Awesome Company. Apple Inc. is not a
                            party to this agreement. You acknowledge that Apple
                            and its subsidiaries are third-party beneficiaries,
                            and Apple has the right to enforce this agreement
                            against you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            2. Scope of License
                        </h2>
                        <p>
                            We grant you a limited, non-exclusive,
                            non-transferable, revocable license to use the App
                            for personal, non-commercial purposes on any
                            Apple-branded devices that you own or control,
                            subject to Apple's Usage Rules.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            3. No Betting or Financial Advice
                        </h2>
                        <p>
                            Bet.AI provides AI-generated insights and
                            sports-related data points for{" "}
                            <strong>informational purposes only</strong>.
                        </p>
                        <p className="mt-2">
                            It{" "}
                            <strong>does NOT constitute betting advice</strong>,
                            investment recommendations, or financial guidance.
                            You agree not to interpret the information provided
                            as encouragement or inducement to wager or invest.
                        </p>
                        <p className="mt-2">
                            You are solely responsible for any decisions you
                            make based on the information presented in the App.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            4. Subscription and Payment
                        </h2>
                        <p>
                            Access to Bet.AI is provided solely on a{" "}
                            <strong>subscription basis</strong>. You may choose
                            a <strong>weekly, monthly, or yearly</strong>{" "}
                            subscription through the App Store. All payments are
                            handled by Apple. Subscriptions auto-renew unless
                            canceled at least 24 hours before the end of the
                            current period.
                        </p>
                        <p className="mt-2">
                            You may manage or cancel your subscription via your
                            Apple account settings. <strong>No refunds</strong>{" "}
                            are handled directly by The Awesome Company.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            5. User Responsibilities
                        </h2>
                        <p>
                            You agree to use the App in a lawful and respectful
                            manner. You are responsible for securing your
                            account credentials and for all actions taken under
                            your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            6. Intellectual Property
                        </h2>
                        <p>
                            All intellectual property rights in and to the App,
                            including its content, features, and underlying
                            code, are owned by The Awesome Company or its
                            licensors. You may not copy, modify, distribute, or
                            create derivative works based on the App or its
                            content without prior written consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            7. Privacy
                        </h2>
                        <p>
                            Your use of the App is subject to our Privacy
                            Policy. By using the App, you consent to the
                            collection, use, and sharing of information as
                            outlined therein.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            8. Limitation of Liability and Disclaimer
                        </h2>
                        <p>
                            The App is provided <strong>"as is"</strong> and{" "}
                            <strong>"as available"</strong>. We make no
                            warranties, express or implied, regarding its
                            accuracy, reliability, or availability.
                        </p>
                        <p className="mt-2">
                            To the fullest extent permitted by law, we disclaim
                            all warranties and are not liable for any damages
                            arising from your use of the App.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            9. Modifications to the Service
                        </h2>
                        <p>
                            We reserve the right to modify, suspend, or
                            discontinue any part of the App at any time without
                            notice or liability.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            10. Termination
                        </h2>
                        <p>
                            We may suspend or terminate your access to the App
                            at our discretion, with or without notice,
                            particularly if you violate these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            11. Governing Law
                        </h2>
                        <p>
                            These Terms shall be governed by and construed in
                            accordance with the laws of <strong>France</strong>.
                            The courts located in <strong>Paris, France</strong>{" "}
                            shall have exclusive jurisdiction over any disputes
                            arising from or related to these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            12. Contact Us
                        </h2>
                        <p>
                            If you have any questions, requests, or concerns
                            about this policy, you may contact:
                        </p>
                        <p className="mt-2">
                            <strong>The Awesome Company</strong>
                        </p>
                        <p>69 rue de Rome, 75008 Paris, France</p>
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:cesar@betaiapp.com"
                                className="gradient-text"
                            >
                                cesar@betaiapp.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
