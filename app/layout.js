import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/shared/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Employment",
  description: "Job Finding App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
