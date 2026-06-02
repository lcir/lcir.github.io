import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "../components/LanguageProvider";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Lukáš Cír — CV",
  description: "Engineering Manager CV"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${grotesk.variable} ${mono.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y06KBPXWLJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y06KBPXWLJ');
          `}
        </Script>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
