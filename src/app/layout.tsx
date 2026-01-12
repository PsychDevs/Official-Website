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
    icons: {
        icon: "/PD.png",
        shortcut: "/PD.png",
        apple: "/PD.png",
    },
    openGraph: {
        title: "PsychDevs | Professional Websites at Affordable Prices",
        description: "Get professional, high-converting websites at budget-friendly prices.",
        type: "website",
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
