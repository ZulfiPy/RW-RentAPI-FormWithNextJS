import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "RW-Rent",
  description: "RW-Rent project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-black">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
