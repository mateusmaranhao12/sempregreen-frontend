import type { Metadata } from "next";
import '../scss/globals.scss';
import "./globals.css";

export const metadata: Metadata = {
  title: "SempreGreen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
