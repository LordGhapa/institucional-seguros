import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/ui/reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Palagos Seguros Consultoria e Corretora",
  description:
    "Os Melhores Planos de Saúde e Seguros para sua Empresa, Você e sua Família",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Reveal>
          <CTA />
        </Reveal>
        <Footer />
      </body>
    </html>
  );
}
