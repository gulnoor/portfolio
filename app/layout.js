import { Inter } from "next/font/google";
import "./globals.css";
import NavRail from "@/components/NavRail/NavRail";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gul Noor | Portfolio",
  description: "personal prtfolio for web development projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavRail />
        <main>{children}</main>
      </body>
    </html>
  );
}
