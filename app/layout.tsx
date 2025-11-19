import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ameno",
  description: "Ameno - Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Background video (place an MP4 at public/videos/background.mp4) */}

        <div className="fixed inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover bg-black"
          >
            <source src="/images/Background/rainy-pine-forest.1920x1080.mp4" type="video/mp4" />
          </video>
          {/* subtle overlay to improve text contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
