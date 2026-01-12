import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-plus-jakarta-sans",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
    title: "PsychDevs | Professional Websites at Affordable Prices",
    description:
        "Get professional, high-converting websites at budget-friendly prices. We create beautiful, functional websites that help your business grow without breaking the bank.",
    metadataBase: new URL("https://psychdevs.com"),
    icons: {
        icon: [
            { url: "/PD.png", sizes: "32x32", type: "image/png" },
            { url: "/PD.png", sizes: "16x16", type: "image/png" },
        ],
        shortcut: "/PD.png",
        apple: [
            { url: "/PD.png", sizes: "180x180", type: "image/png" },
        ],
    },
    openGraph: {
        title: "PsychDevs | Professional Websites at Affordable Prices",
        description: "Get professional, high-converting websites at budget-friendly prices. We create beautiful, functional websites that help your business grow.",
        type: "website",
        siteName: "PsychDevs",
        locale: "en_US",
        images: [
            {
                url: "/PsychDevs.png",
                width: 1200,
                height: 630,
                alt: "PsychDevs - Professional Websites at Affordable Prices",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "PsychDevs | Professional Websites at Affordable Prices",
        description: "Get professional, high-converting websites at budget-friendly prices.",
        images: ["/PsychDevs.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}
            >
                {/* Global misty lights background */}
                <div className="global-lights-bg" />
                
                <div className="relative flex min-h-screen flex-col">
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
