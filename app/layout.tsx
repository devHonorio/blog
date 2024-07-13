import { Header } from "@/components/Header";
import "./globals.css";
import { Figtree } from "next/font/google";
import { headerConfig } from "@/config/header";
import { Layout } from "@/components/Layout";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={figtree.className}>
        <Header navItens={headerConfig.navItens} />

        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
