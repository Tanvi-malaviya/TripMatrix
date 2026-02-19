import { Geist, Geist_Mono, Stardos_Stencil } from "next/font/google";
import "./globals.css";
import FloatingLuxuryNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const stardosStencil = Stardos_Stencil({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Travel & Photography",
  description: "Luxury travel & photography experiences",
    icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
    ],
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${stardosStencil.variable}
          antialiased
        `}
      >
        <FloatingLuxuryNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
