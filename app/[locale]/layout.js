import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Templates",
  description:
    "Stop wasting time on repetitive setups! Our pre-built templates bring together tools like Next.js, next-intl, Zustand and more to help you hit the ground running. Focus on building your projects, not setting them up!",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Toaster />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
