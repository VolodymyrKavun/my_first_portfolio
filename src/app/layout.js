import BackToTop from "@/components/backToTop/BackToTop";
import "./globals.scss";
import { Inter } from "next/font/google";
import ToastComponent from "@/utils/toast/ToastComponent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL),
  title: "Volodymyr Kavun Portfolio",
  description:
    "Portfolio of front-end developer Volodymyr Kavun. Next.js, React, SEO.",
  keywords: [
    "front end developer next js",
    "SEO developer",
    "react developer",
    "web developer react",
    "web developer SEO",
    "front end",
    "front end next js",
    "front end react",
  ],
  alternates: {
    canonical: process.env.BASE_URL,
  },
  themeColor: "#0c0c1d",
  icons: {
    icon: [
      { url: "/favicon-color-192x192.png" },
      new URL("/favicon-color-192x192.png", process.env.BASE_URL),
    ],
    shortcut: ["/apple-touch-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
    // !Before

    // shortcut: "/favicon.ico",
    // apple: "/apple-icon.png",
    // other: [
    //   {
    //     url: "/favicon-32x32.png",
    //     sizes: "32x32",
    //     type: "image/png",
    //   },
    //   {
    //     url: "/favicon-16x16.png",
    //     sizes: "16x16",
    //     type: "image/png",
    //   },
    // ],
  },
  openGraph: {
    title: "Volodymyr Kavun Portfolio",
    description:
      "Portfolio of front-end developer Volodymyr Kavun. Next.js, React, SEO.",
    url: process.env.BASE_URL,
    siteName: "Volodymyr Kavun Portfolio",
    images: [
      {
        // url: "/opengraph-image-400x300.png",
        url: "/opengraph-image-400x300.png",
        type: "image/png",
        width: 400,
        height: 300,
        alt: "Volodymyr Kavun",
      },
      {
        // url: "/twitter-image-800x600.png",
        url: "/twitter-image-800x600.png",

        type: "image/png",
        width: 800,
        height: 600,
        alt: "Volodymyr Kavun",
      },
      {
        // url: "/opengraph-image-1200-630.png",
        url: "/opengraph-image-1200-630.png",

        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Volodymyr Kavun",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  author: "Volodymyr Kavun",
  generator: "Volodymyr Kavun",
  applicationName: "Volodymyr Kavun Portfolio",
  referrer: "origin-when-cross-origin",
  creator: "Volodymyr Kavun",
  publisher: "Volodymyr Kavun",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <BackToTop />
        <ToastComponent />
      </body>
    </html>
  );
}
