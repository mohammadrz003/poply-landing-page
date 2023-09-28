import "@splidejs/react-splide/css";
import "tippy.js/animations/shift-toward.css";
import "./globals.css";
import { Sora, Source_Code_Pro, Space_Grotesk } from "next/font/google";
import Providers from "./providers";

const sora = Sora({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-sora",
});

const code = Source_Code_Pro({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-code",
});

const grotesk = Space_Grotesk({
  weight: ["300"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-grotesk",
});

export const metadata = {
  title: "Poply - Community Based NFT Marketplace",
  description:
    "Community-based NFT marketplace that provides a dynamic platform for creators, collectors, and investors to engage with unique digital assets.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          content="Poply, the premier NFT marketplace for the Monad blockchain, is your gateway to trading NFTs in a secure and decentralized environment."
          name="Poply - Community Based NFT Marketplace"
        />
        <meta content="Poply - Community Based NFT Marketplace" property="og:title" />
        <meta
          content="Poply, the premier NFT marketplace for the Monad blockchain, is your gateway to trading NFTs in a secure and decentralized environment."
          property="og:description"
        />
        <meta content="%PUBLIC_URL%/opengraph-image.png" property="og:image" />
        <meta
          property="og:url"
          content="https://poply.xyz"
        />
        <meta
          property="og:site_name"
          content="Poply - Community Based NFT Marketplace"
        />
        <meta
          content="Poply - Community Based NFT Marketplace"
          property="twitter:title"
        />
        <meta
          content="Poply, the premier NFT marketplace for the Monad blockchain, is your gateway to trading NFTs in a secure and decentralized environment."
          property="twitter:description"
        />
        <meta
          content="%PUBLIC_URL%/twitter-image.png"
          property="twitter:image"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <Providers>
        <body
          className={`${sora.variable} ${code.variable} ${grotesk.variable} font-sans bg-n-8 text-n-1 text-base`}
        >
          {children}
          <svg className="block" width={0} height={0}>
            <defs>
              <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#89F9E8" />
                <stop offset="100%" stopColor="#52DE97" />
              </linearGradient>
              <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
                <stop offset="0%" stopColor="#52DE97" />
                <stop offset="100%" stopColor="#52DE97" />
              </linearGradient>
              <linearGradient
                id="btn-bottom"
                x1="100%"
                x2="0%"
                y1="50%"
                y2="50%"
              >
                <stop offset="0%" stopColor="#00F3E4" />
                <stop offset="100%" stopColor="#89F9E8" />
              </linearGradient>
              <linearGradient
                id="btn-right"
                x1="14.635%"
                x2="14.635%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00F3E4" />
                <stop offset="100%" stopColor="#52DE97" />
              </linearGradient>
            </defs>
          </svg>
        </body>
      </Providers>
    </html>
  );
}
