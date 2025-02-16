import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "16px",
				sm: "2rem",
				lg: "40px",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				comfortaa: ["var(--font-comfortaa)", "sans-serif"],
			},
		},
	},
	plugins: [],
} satisfies Config;
