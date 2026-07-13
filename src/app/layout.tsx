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
  title: "Expensss Master | Billionaire Spending Simulator",
  description: "Play Expensss Master, the ultimate billionaire spending simulator! Spend the massive net worth of Elon Musk, MrBeast & Jeff Bezos in this fun shopping game.",
  keywords: "Expensss Master, luxury shopping simulator, buy stuff with jeff bezos money, net worth spending app, how to spend a billion dollars, spend bill gates money, fake money shopping game, celebrity net worth game, rich lifestyle simulator",
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
