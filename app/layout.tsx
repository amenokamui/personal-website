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
      <body className={`${inter.className} bg-transparent`}> 
        {/* Background video (place an MP4 at public/videos/background.mp4) */}

        <div className="fixed inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/images/Background/rainy-pine-forest.1920x1080.mp4" type="video/mp4" />
          </video>
          {/* subtle overlay to improve text contrast - reduced so video shows through */}
          <div className="absolute inset-0 bg-black/10 z-10" />
        </div>

        <div className="relative z-20 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
