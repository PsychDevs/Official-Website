export default function PrivacyPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-3xl prose prose-invert">
                    <h2>Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such
                        as when you fill out our contact form, request a quote,
                        or communicate with us.
                    </p>

                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>
                            Respond to your inquiries and provide customer
                            support
                        </li>
                        <li>Send you updates about our services</li>
                        <li>Improve our website and services</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h2>Information Sharing</h2>
                    <p>
                        We do not sell, trade, or otherwise transfer your
                        personal information to third parties without your
                        consent, except as described in this policy.
                    </p>

                    <h2>Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect
                        your personal information against unauthorized access,
                        alteration, disclosure, or destruction.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy,
                        please contact us at
                        <a href="mailto:psychdevs@gmail.com">
                            {" "}
                            psychdevs@gmail.com
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
