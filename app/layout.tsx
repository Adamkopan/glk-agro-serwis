import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://glkagroserwis.pl"),
  title: {
    default: "GLK Agro Serwis | Mobilny serwis maszyn rolniczych",
    template: "%s | GLK Agro Serwis",
  },
  description:
    "Mobilna diagnostyka, naprawa i serwis traktorów, kombajnów oraz maszyn rolniczych u klienta. Warsztat: Brzeziny 139, 22-310 Kraśniczyn. Profesjonalne narzędzia diagnostyczne, sprzedaż części i renowacje maszyn.",
  keywords: [
    "mobilny serwis maszyn rolniczych",
    "naprawa traktorów",
    "naprawa kombajnów",
    "diagnostyka maszyn rolniczych",
    "serwis Claas",
    "serwis Renault",
    "serwis Massey Ferguson",
    "serwis Zetor",
    "serwis Ursus",
    "części do maszyn rolniczych",
    "renowacja maszyn rolniczych",
    "Brzeziny 139 Kraśniczyn",
  ],
  authors: [{ name: "GLK Agro Serwis" }],
  creator: "GLK Agro Serwis",
  publisher: "GLK Agro Serwis",
  category: "Agricultural machinery service",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "GLK Agro Serwis | Mobilny serwis maszyn rolniczych",
    description:
      "Dojazd do klienta, diagnostyka, naprawa traktorów i kombajnów, sprzedaż części oraz renowacje maszyn rolniczych. Warsztat: Brzeziny 139, 22-310 Kraśniczyn.",
    type: "website",
    locale: "pl_PL",
    siteName: "GLK Agro Serwis",
    images: [
      {
        url: "/images/mobile-tractor-service.png",
        width: 1200,
        height: 630,
        alt: "Mobilny serwis maszyn rolniczych GLK Agro Serwis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GLK Agro Serwis | Mobilny serwis maszyn rolniczych",
    description:
      "Mobilna diagnostyka i naprawa traktorów, kombajnów oraz innych maszyn rolniczych. Warsztat: Brzeziny 139, 22-310 Kraśniczyn.",
    images: ["/images/mobile-tractor-service.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
