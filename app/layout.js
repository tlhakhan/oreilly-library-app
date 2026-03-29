import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "O'Reilly Library Explorer",
  description: "Quickly find and explore books",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
      <div className="h-screen flex flex-col p-6">
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
      </div>
      </body>
    </html>
  );
}
