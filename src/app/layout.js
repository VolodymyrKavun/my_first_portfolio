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
    android: [
      { url: "/android-chrome-192x192.png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      { url: "/android-chrome-512x512.png" },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
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
  manifest: `${process.env.BASE_URL}site.webmanifest`,
  openGraph: {
    title: "Volodymyr Kavun Portfolio",
    description:
      "Portfolio of front-end developer Volodymyr Kavun. Next.js, React, SEO.",
    url: process.env.BASE_URL,
    siteName: "Volodymyr Kavun Portfolio",
    images: [
      {
        url: "/opengraph-image-400x300.png",
        type: "image/png",
        width: 400,
        height: 300,
        alt: "Volodymyr Kavun",
      },
      {
        url: "/twitter-image-800x600.png",
        type: "image/png",
        width: 800,
        height: 600,
        alt: "Volodymyr Kavun",
      },
      {
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
  appLinks: {
    ios: {
      url: process.env.BASE_URL,
      app_name: "Volodymyr_Kavun_Portfolio",
    },
    android: {
      url: process.env.BASE_URL,
      package: process.env.BASE_URL,
      app_name: "Volodymyr_Kavun_Portfolio",
    },
    web: {
      url: process.env.BASE_URL,
      should_fallback: true,
    },
  },
  assets: [process.env.BASE_URL],
  author: "Volodymyr Kavun",
  generator: "Volodymyr Kavun",
  applicationName: "Volodymyr Kavun Portfolio",
  referrer: "origin-when-cross-origin",
  creator: "Volodymyr Kavun",
  publisher: "Volodymyr Kavun",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SC,
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

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "http://www.schema.org",
    "@type": "person",
    name: "Volodymyr Kavun",
    jobTitle: "front-end developer",
    gender: "male",
    url: "https://v-k-front-end-developer.vercel.app/",
    image: [
      "https://v-k-front-end-developer.vercel.app/favicon-color-16x16.png",
      "https://v-k-front-end-developer.vercel.app/favicon-color-32x32.png",
      "https://v-k-front-end-developer.vercel.app/favicon-color-48x48.png",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karvina",
      addressRegion: "Czech Republic",
    },
    email: "volodymirkavun1@gmail.com",
    alumniOf: "GOIT School",
    birthPlace: "Ukraine",
    nationality: "Ukrainian",
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main>{children}</main>
        <BackToTop />
        <ToastComponent />
      </body>
    </html>
  );
}
