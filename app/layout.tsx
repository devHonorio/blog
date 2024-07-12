import { Header } from "@/components/Header";
import "./globals.css";
import { Figtree } from "next/font/google";
import { headerConfig } from "@/config/header";

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
      <body
        className={`bg-neutral-800 text-zinc-50 mx-auto w-10/12 mt-28 ${figtree.className}`}
      >
        <Header navItens={headerConfig.navItens} />
        {children}
      </body>
    </html>
  );
}
