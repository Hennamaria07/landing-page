import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Great Fitness",
  description: "Experience holistic wellness with our yoga studio. Join us for expert-led classes in yoga, meditation, and mindfulness to rejuvenate your mind, body, and soul. Suitable for all levels, from beginners to advanced practitioners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/Logo.svg" type="image/png" />
      </head>
      <body className={inter.className}>
        {/* <Navbar /> */}
      {children}
      </body>
    </html>
  );
}
