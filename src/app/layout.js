import BackToTop from "@/components/backToTop/BackToTop";
import "./globals.scss";
import { Inter } from "next/font/google";
import ToastComponent from "@/utils/toast/ToastComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Volodymyr Kavun Portfolio",
  description: "Front-end developer portfolio",
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
