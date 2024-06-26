import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../../redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <title>Book Store</title>
        </head>
        <body>
          <header style={{background : "lightblue"
            }}>
            <nav style={{background : "lightblue"
            }}>
            <h1>BookStore</h1>
            </nav>
          </header>

          {children}

          <footer></footer>
        </body>
      </html>
    </Providers>
  );
}
