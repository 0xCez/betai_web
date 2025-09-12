import React from "react";
import "@/styles/style.css";
import assets from "@/json/assets";

export default function Privacy() {
    return (
        <main className="hero-gradient min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
                <img
                    src={assets.logo}
                    alt="bet.ai logo"
                    className="w-32 h-32 "
                />
            </div>
            <div className="max-w-4xl mx-auto mt-20 glass rounded-2xl p-8">
                <h1 className="text-3xl  gradient-text  mb-4 text-white">
                    Privacy Policy
                </h1>
                <p className="text-gray-400 mb-8">
                    Last updated: March 27, 2025
                </p>

                <div className="space-y-6 text-gray-300">
                    <p>
                        This privacy policy for{" "}
                        <strong>The Awesome Company</strong> (doing business as{" "}
                        <strong>Bet.AI</strong>) ("Company," "we," "us," or
                        "our") describes how and why we might collect, store,
                        use, and/or share ("process") your information when you
                        use our services ("Services"), such as when you:
                    </p>

                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            Download and use our mobile application (
                            <strong>Bet.AI</strong>), or any other application
                            of ours that links to this privacy policy
                        </li>
                        <li>
                            Engage with us in other related ways, including any
                            sales, marketing, support, or events
                        </li>
                    </ul>

                    <p>
                        If you do not agree with our policies and practices,
                        please do not use our Services. If you still have any
                        questions or concerns, please contact us at:{" "}
                        <a
                            href="mailto:contact@theawesomecompany.fr"
                            className="gradient-text"
                        >
                            contact@theawesomecompany.fr
                        </a>
                    </p>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            SUMMARY OF KEY POINTS
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-white">
                                    What personal information do we process?
                                </h3>
                                <p>
                                    Depending on how you use Bet.AI, we may
                                    process information such as your email
                                    address, app usage data, and device details.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    Do we process any sensitive information?
                                </h3>
                                <p>
                                    No, we do not knowingly collect or process
                                    sensitive personal data such as biometric,
                                    health, or financial identity details.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    Do we get data from third parties?
                                </h3>
                                <p>
                                    No, we do not buy or receive personal data
                                    from third parties.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    How do we use your information?
                                </h3>
                                <p>
                                    We use your data to operate and improve
                                    Bet.AI, analyze usage, provide customer
                                    support, fulfill subscriptions, comply with
                                    laws, and prevent fraud.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    How do we keep it safe?
                                </h3>
                                <p>
                                    We apply standard technical and
                                    organizational measures, but no app or
                                    service can be 100% secure online.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            WHAT INFORMATION DO WE COLLECT?
                        </h2>

                        <div className="mt-4 space-y-6">
                            <div>
                                <h3 className="font-semibold text-white">
                                    1. Information You Provide Voluntarily
                                </h3>
                                <p className="mt-2">
                                    When you sign up or use Bet.AI, we collect:
                                </p>
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>
                                        <strong>Email address</strong> (if you
                                        provide it)
                                    </li>
                                    <li>
                                        <strong>
                                            Feedback, reviews, or support
                                            messages
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>Settings/preferences</strong>{" "}
                                        you configure within the app
                                    </li>
                                </ul>
                                <p className="mt-2">
                                    We do <strong>not</strong> collect any
                                    government identifiers, credit card numbers,
                                    selfies, or sensitive health data.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    2. Payment Data
                                </h3>
                                <p className="mt-2">
                                    Bet.AI subscriptions are handled through
                                    Apple's App Store. We do not process your
                                    payment data directly.
                                </p>
                                <p className="mt-2">
                                    Apple's Privacy Policy:{" "}
                                    <a
                                        href="https://www.apple.com/legal/privacy/"
                                        className="gradient-text"
                                    >
                                        https://www.apple.com/legal/privacy/
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    3. Automatically Collected Data
                                </h3>
                                <p className="mt-2">
                                    We collect certain data automatically when
                                    you use the App:
                                </p>
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>
                                        Device model, operating system, and
                                        language
                                    </li>
                                    <li>Country/location (coarse)</li>
                                    <li>
                                        App interaction logs (buttons tapped,
                                        features used, session duration)
                                    </li>
                                    <li>
                                        Crash logs, performance data, diagnostic
                                        codes
                                    </li>
                                </ul>
                                <p className="mt-2">
                                    We use this to improve functionality, fix
                                    bugs, and understand engagement.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            HOW DO WE PROCESS YOUR INFORMATION?
                        </h2>
                        <p className="mt-2">We process personal data to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Operate and maintain the app</li>
                            <li>Send service updates or announcements</li>
                            <li>Respond to inquiries and support requests</li>
                            <li>Analyze engagement and improve features</li>
                            <li>Monitor security and prevent abuse</li>
                            <li>Fulfill legal and compliance obligations</li>
                        </ul>
                        <p className="mt-2">
                            We do <strong>not</strong> use your data for
                            profiling or automated decision-making with legal
                            effects.
                        </p>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            WHAT LEGAL BASES DO WE RELY ON?
                        </h2>
                        <p className="mt-2">
                            Under the GDPR and French law, we rely on the
                            following bases:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>
                                <strong>Consent</strong> – e.g., when you sign
                                up for marketing emails
                            </li>
                            <li>
                                <strong>Contractual necessity</strong> – to
                                provide access to the app
                            </li>
                            <li>
                                <strong>Legitimate interest</strong> – for
                                analytics and basic personalization
                            </li>
                            <li>
                                <strong>Legal obligation</strong> – if required
                                by tax, law enforcement, or court orders
                            </li>
                        </ul>
                        <p className="mt-2">
                            You may withdraw consent at any time by contacting
                            us.
                        </p>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            DO WE SHARE YOUR INFORMATION?
                        </h2>
                        <p className="mt-2">
                            We may share personal information with trusted
                            service providers:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>
                                <strong>
                                    Cloud infrastructure (e.g., data storage
                                    providers)
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    App usage analytics (e.g., pseudonymized
                                    crash or feature logs)
                                </strong>
                            </li>
                        </ul>
                        <p className="mt-2">
                            All third parties are under contractual obligations
                            to protect your data and may not reuse it for their
                            own purposes.
                        </p>
                        <p className="mt-2">
                            We do <strong>not</strong> sell, rent, or trade your
                            personal information.
                        </p>
                        <p className="mt-2">
                            We may also disclose data in connection with:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>
                                <strong>Business transfers</strong> (e.g.,
                                merger, acquisition)
                            </li>
                            <li>
                                <strong>Legal requests</strong> (
                                <strong>Legal requests</strong> (e.g., court
                                orders or enforcement of legal rights)
                            </li>
                        </ul>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            THIRD-PARTY WEBSITES AND LINKS
                        </h2>
                        <p>
                            The app may contain links to third-party websites or
                            resources. These are not governed by this policy. We
                            are not responsible for their content, accuracy, or
                            privacy practices.
                        </p>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            COOKIES AND TRACKING
                        </h2>
                        <p>
                            We do not currently use cookies in the mobile
                            application. However, analytical tools may use
                            device-level identifiers to help us understand usage
                            patterns.
                        </p>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            INTERNATIONAL DATA TRANSFERS
                        </h2>
                        <p>
                            Our servers are hosted in{" "}
                            <strong>Switzerland</strong>. If you are located
                            outside of Switzerland or the EU, your data may be
                            transferred internationally. We use:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>
                                <strong>EU Standard Contractual Clauses</strong>
                            </li>
                            <li>
                                <strong>
                                    Data minimization and encryption
                                </strong>
                            </li>
                            <li>
                                <strong>
                                    Access controls and third-party vetting
                                </strong>
                            </li>
                        </ul>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            HOW LONG DO WE KEEP YOUR INFORMATION?
                        </h2>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>
                                <strong>Account data</strong>: Kept while you
                                maintain your subscription. Deleted within 30
                                days of cancellation.
                            </li>
                            <li>
                                <strong>Crash logs and analytics</strong>:
                                Retained for up to 12 months
                            </li>
                            <li>
                                <strong>
                                    Support tickets or correspondence
                                </strong>
                                : Retained for audit/legal purposes for up to 3
                                years
                            </li>
                        </ul>
                        <p className="mt-2">
                            We delete or anonymize data when no longer needed,
                            unless required by law.
                        </p>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            DO WE COLLECT DATA FROM MINORS?
                        </h2>
                        <p>
                            No. Bet.AI is not intended for children under{" "}
                            <strong>13 years old</strong>, and we do not
                            knowingly collect data from them.
                        </p>
                        <p className="mt-2">
                            If we learn we have done so, we will delete it
                            immediately.
                        </p>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            YOUR PRIVACY RIGHTS
                        </h2>
                        <p>
                            Depending on your location, you may have rights to:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate data</li>
                            <li>Delete or restrict data</li>
                            <li>Object to processing</li>
                            <li>Port data to another service</li>
                        </ul>
                        <p className="mt-2">
                            You can exercise these rights by emailing:{" "}
                            <a
                                href="mailto:contact@theawesomecompany.fr"
                                className="gradient-text"
                            >
                                contact@theawesomecompany.fr
                            </a>
                        </p>
                        <p className="mt-2">
                            You also have the right to lodge a complaint with
                            the <strong>CNIL</strong> (France's data protection
                            authority).
                        </p>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            DO-NOT-TRACK AND COOKIES
                        </h2>
                        <p>
                            We do not respond to browser DNT signals. However,
                            you can set device settings to limit ad tracking or
                            reset advertising identifiers.
                        </p>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            MARKETING EMAILS
                        </h2>
                        <p>
                            We may occasionally email you regarding feature
                            updates or offers, only with your explicit consent.
                        </p>
                        <p className="mt-2">
                            You can opt out at any time via the unsubscribe link
                            or by contacting us.
                        </p>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            CHANGES TO THIS POLICY
                        </h2>
                        <p>
                            We may update this Privacy Policy from time to time.
                            Material changes will be notified via the App or
                            email. The latest version will always be accessible
                            within the App.
                        </p>
                    </section>

                    <hr className="border-gray-700 my-6" />

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">
                            CONTACT US
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
