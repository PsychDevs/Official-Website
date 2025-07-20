export default function TermsPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Terms of Service
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-3xl prose prose-invert">
                    <h2>Agreement to Terms</h2>
                    <p>
                        By accessing and using PsychDevs' services, you accept
                        and agree to be bound by the terms and provision of this
                        agreement.
                    </p>

                    <h2>Services</h2>
                    <p>
                        PsychDevs provides web design and development services
                        including but not limited to:
                    </p>
                    <ul>
                        <li>Custom website design and development</li>
                        <li>E-commerce solutions</li>
                        <li>Website maintenance and support</li>
                        <li>Performance optimization</li>
                    </ul>

                    <h2>Payment Terms</h2>
                    <p>
                        Payment terms will be specified in individual project
                        contracts. Generally:
                    </p>
                    <ul>
                        <li>50% deposit required to begin work</li>
                        <li>Remaining balance due upon project completion</li>
                        <li>
                            Monthly maintenance fees (if applicable) are due in
                            advance
                        </li>
                    </ul>

                    <h2>Intellectual Property</h2>
                    <p>
                        Upon full payment, clients own the rights to their
                        website design and content. PsychDevs retains the right
                        to showcase completed work in our portfolio.
                    </p>

                    <h2>Limitation of Liability</h2>
                    <p>
                        PsychDevs shall not be liable for any indirect,
                        incidental, special, consequential, or punitive damages
                        resulting from your use of our services.
                    </p>

                    <h2>Contact Information</h2>
                    <p>
                        For questions regarding these terms, please contact us
                        at
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
