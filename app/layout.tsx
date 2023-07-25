import { ThemeContext, ThemeProvider } from "@/theme/ThemeContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { link } from "fs";
import { Theme } from "@/lib/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fetchTheme = () => {
  return new Promise<Theme>((resolve) =>
    Math.random() > 0.5 ? resolve("light") : resolve("dark")
  );
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await fetchTheme();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
