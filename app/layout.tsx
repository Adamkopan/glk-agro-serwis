import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://glkagroserwis.pl"),
  title: {
    default: "GLK Agro Serwis | Mobilny serwis maszyn rolniczych",
    template: "%s | GLK Agro Serwis",
  },
  description:
    "Mobilna diagnostyka, naprawa i serwis traktorow, kombajnow oraz maszyn rolniczych u klienta. Dojazd do gospodarstwa, profesjonalne narzedzia diagnostyczne i sprzedaz czesci.",
  keywords: [
    "mobilny serwis maszyn rolniczych",
    "naprawa traktorow",
    "naprawa kombajnow",
    "diagnostyka maszyn rolniczych",
    "serwis Claas",
    "serwis Renault",
    "serwis Massey Ferguson",
    "serwis Zetor",
    "serwis Ursus",
    "czesci do maszyn rolniczych",
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
      "Dojazd do klienta, diagnostyka, naprawa traktorow i kombajnow oraz sprzedaz czesci do maszyn rolniczych.",
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
      "Mobilna diagnostyka i naprawa traktorow, kombajnow oraz innych maszyn rolniczych.",
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
