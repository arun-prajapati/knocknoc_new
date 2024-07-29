import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import { Toaster } from "@/components/ui/sonner";
import ContextProvider from "@/context/ContextProvider";
import { ChatBotFun } from "@/components/chatBot/ChatBot";
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from "@vercel/speed-insights/next";

// --font family--
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// --metadata--
export const metadata: Metadata = {
  title: {
    default:
      "Knoc Knoc - Get Expert Professional Services at Home in Singapore",
    template: "%s - Knoc Knoc",
  },
  description:
    "Knock Knock - Your ultimate destination for expert local services in Singapore. Find verified & trusted professionals near you for all your home and beauty needs.",
  // twitter: {
  //   card: "summary_large_image",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable
        )}
      >
        <NextTopLoader color="#f6f6f6" />
        <>
          <ContextProvider>
            <>
              <Header />
              <>{children}</>
              <Toaster />
              {/* -----chat bot box----- */}
              <ChatBotFun />
            </>
          </ContextProvider>
        </>
        {/* ----recaptcha contianer for firbase captca verify---- */}
        <div id="recaptcha-container" className="fixed bottom-5 right-6"></div>
        {/* ---- */}
        <SpeedInsights />
      </body>
    </html>
  );
}
