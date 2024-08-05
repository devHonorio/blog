"use client";
import { Header } from "@/components/Header";
import "./globals.css";
import { Figtree } from "next/font/google";
import { headerConfig } from "@/config/header";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Footer } from "@/components/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <html lang="pt-BR">
      <body
        className={`${figtree.className} bg-neutral-100 dark:bg-neutral-800 dark:text-white max-w-screen-2xl px-5 mx-auto scroll-smooth ${darkMode ? "dark" : ""}`}
      >
        <Header navItens={headerConfig.navItens} />

        <Layout>{children}</Layout>

        <Footer />
      </body>
    </html>
  );
}
