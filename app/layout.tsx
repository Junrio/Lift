import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/useToast";

export const metadata: Metadata = {
  title: "LIFT - Push Limits. Achieve Greatness.",
  description: "Fitness for everyone. Join thousands and transform your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-body text-textPrimary">
        <ToastProvider>
          <div className="relative min-h-screen overflow-hidden">
            {/* Right-side glow */}
            <div className="pointer-events-none absolute inset-y-0 right-[-10%] w-1/2 bg-[radial-gradient(circle_at_center,_#9EF01A33,_transparent_60%)] blur-3xl" />
            {children}
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}


