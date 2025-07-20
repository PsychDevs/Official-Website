import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e",
                    950: "#082f49",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                display: [
                    "var(--font-plus-jakarta-sans)",
                    "system-ui",
                    "sans-serif",
                ],
                mono: ["var(--font-space-grotesk)", "monospace"],
            },
            fontSize: {
                xs: [
                    "0.75rem",
                    { lineHeight: "1rem", letterSpacing: "-0.01em" },
                ],
                sm: [
                    "0.875rem",
                    { lineHeight: "1.25rem", letterSpacing: "-0.01em" },
                ],
                base: [
                    "1rem",
                    { lineHeight: "1.5rem", letterSpacing: "-0.01em" },
                ],
                lg: [
                    "1.125rem",
                    { lineHeight: "1.75rem", letterSpacing: "-0.01em" },
                ],
                xl: [
                    "1.25rem",
                    { lineHeight: "1.75rem", letterSpacing: "-0.01em" },
                ],
                "2xl": [
                    "1.5rem",
                    { lineHeight: "2rem", letterSpacing: "-0.02em" },
                ],
                "3xl": [
                    "1.875rem",
                    { lineHeight: "2.25rem", letterSpacing: "-0.02em" },
                ],
                "4xl": [
                    "2.25rem",
                    { lineHeight: "2.5rem", letterSpacing: "-0.02em" },
                ],
                "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
                "6xl": [
                    "3.75rem",
                    { lineHeight: "1", letterSpacing: "-0.02em" },
                ],
            },
            spacing: {
                "4.5": "1.125rem",
                "5.5": "1.375rem",
                "6.5": "1.625rem",
                "7.5": "1.875rem",
                "8.5": "2.125rem",
                "9.5": "2.375rem",
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.5s ease-out",
                "fade-out": "fade-out 0.5s ease-out",
                "slide-in": "slide-in 0.5s ease-out",
                "slide-out": "slide-out 0.5s ease-out",
                "scale-in": "scale-in 0.2s ease-out",
                "scale-out": "scale-out 0.2s ease-out",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                "fade-out": {
                    from: { opacity: "1" },
                    to: { opacity: "0" },
                },
                "slide-in": {
                    from: { transform: "translateY(10px)", opacity: "0" },
                    to: { transform: "translateY(0)", opacity: "1" },
                },
                "slide-out": {
                    from: { transform: "translateY(0)", opacity: "1" },
                    to: { transform: "translateY(10px)", opacity: "0" },
                },
                "scale-in": {
                    from: { transform: "scale(0.95)", opacity: "0" },
                    to: { transform: "scale(1)", opacity: "1" },
                },
                "scale-out": {
                    from: { transform: "scale(1)", opacity: "1" },
                    to: { transform: "scale(0.95)", opacity: "0" },
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
} satisfies Config;

export default config;
