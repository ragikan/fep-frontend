import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";// Adjusted path for root directory
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BookmarkProvider } from "@/components/BookmarkContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foreign Exposure Program",
  description:
    "Foreign Exposure Program portal is a platform for students to get projects from abroad universities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BookmarkProvider>
          <Navbar />
          {children}
          <Footer />
        </BookmarkProvider>
      </body>
    </html>
  );
}
