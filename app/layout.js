"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import AppLayout from "./AppLayout";

import ThemeProvider from "@/context/themeProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Gul Noor | Portfolio",
//   description: "personal portfolio for web development projects",
// };

export default function RootLayout({ children }) {
  return (
    <>
      <ThemeProvider>
        <html lang="en">
          <body className={`dark ${inter.className}`}>
            <AppLayout>{children}</AppLayout>
          </body>
        </html>
      </ThemeProvider>
    </>
  );
}
