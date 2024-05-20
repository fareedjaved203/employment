import { Poppins, Noto_Sans_Arabic, Mulish } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-poppins",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-mulish",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-noto-sans-arabic",
});

export const metadata = {
  title: "Employment",
  description: "Job Finding App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${notoSansArabic.variable} ${mulish.variable}`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
