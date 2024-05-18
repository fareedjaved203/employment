import { Poppins, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Layout from "@/components/shared/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-poppins",
});

const noto_sans_arabic = Noto_Sans_Arabic({
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
      <body className={`${poppins.variable} ${noto_sans_arabic.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
