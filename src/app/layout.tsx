import { aboundMe } from "./data/info";
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio personal de Santiago Abound",
  icons: {
    icon: aboundMe.srcImage, // favicon principal
    shortcut: aboundMe.srcImage,
    apple: aboundMe.srcImage,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
