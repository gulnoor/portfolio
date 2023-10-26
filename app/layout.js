import { Inter } from "next/font/google";
import "./globals.css";
import NavRail from "@/components/NavRail/NavRail";
import AppLayout from "./AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gul Noor | Portfolio",
  description: "personal portfolio for web development projects",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <AppLayout>{children}</AppLayout>
        </body>
      </html>
    </>
  );
}
