import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const ComfortaaLatin = Comfortaa({
	variable: "--font-comfortaa",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='font-comfortaa'>
			<body className=''>{children}</body>
		</html>
	);
}
