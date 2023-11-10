import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToastContainerWrapper from "./Components/ToastProvider";
import { constructMetadata } from "./Components/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
          {children}
          <ToastContainerWrapper />
        </div>
      </body>
    </html>
  );
}
