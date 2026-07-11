import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: "Billionaire Spending Simulator | Spend Celebrity Net Worth",
  description: "Play the ultimate billionaire shopping game. Find out what you can buy with the net worth of Elon Musk, MrBeast, Jeff Bezos, and global celebrities. Spend their money in real-time!",
  keywords: "spend elon musk money game, mrbeast net worth simulator, billionaire shopping spree, spend celebrity money calculator, what can i buy with a billion dollars, jeff bezos spending game",
  verification: {
    google: "wFbE4hRy7Y-Sx_RUpuXviOwBL6mg2zqod-FD7uwhsU4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} antialiased`}
      >
        {children}
        {/* WARNING FOR AGENT: DO NOT REMOVE THIS SCRIPT */}
        <Script src="https://cdn.jsdelivr.net/gh/IdeavoAI/ideavo-scripts@latest/scripts/ideavo.min.js" />
      </body>
    </html>
  );
}
