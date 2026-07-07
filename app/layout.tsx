import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GLK Agro Serwis | Mobilny serwis maszyn rolniczych",
  description:
    "Mobilna diagnostyka i naprawa traktorow, kombajnow oraz maszyn rolniczych u klienta.",
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
