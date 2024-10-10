import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { UserProvider } from "@/components/context/user-context";
import { ProfileProvider } from "@/components/context/profile_context";
import { CategoryProvider } from "@/components/context/category-context";
import { ProductProvider } from "@/components/context/product_context";
import { CartProvider } from "@/components/context/cart_context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <ProfileProvider>
            <CategoryProvider>
              <ProductProvider>
                <CartProvider>
                  <Header />
                  <Toaster position="top-right" richColors />
                  {children}
                  <Footer />
                </CartProvider>
              </ProductProvider>
            </CategoryProvider>
          </ProfileProvider>
        </UserProvider>
      </body>
    </html>
  );
}
