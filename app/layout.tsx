import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Provider } from "./layouts/Provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Jeremy Munroe",
    template: "Jeremy Munroe | %s",
  },
  description: "Jeremy Munroe's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#008080" showSpinner={false} />
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}
