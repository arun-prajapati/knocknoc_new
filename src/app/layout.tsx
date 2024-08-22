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
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || "/"),
  title: {
    default:
      "Expert Car Service And Wedding Planner in Singapore | Knocknoc",
    template: "%s - Knoc Knoc",
  },
  description:
    "Experience complete home, pedicure and digital services with Knocknoc in Singapore. Our offerings include home cleaning, and car repairs, all delivered with excellence.",
  alternates: {
    canonical: `/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEB_URL}`}
        />
        <meta
          property="og:title"
          content="Knoc Knoc - Get Expert Professional Services at Home in Singapore"
        />
        <meta
          property="og:description"
          content="Knock Knock - Your ultimate destination for expert local services in Singapore. Find verified & trusted professionals near you for all your home and beauty needs."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_WEB_URL}/images/knoc%20knoc%20logo.png`}
        />
        <meta property="og:site_name" content="Knoc Knoc" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_PUBLIC_WEB_URL}`}
        />
        <meta
          property="twitter:title"
          content="Knoc Knoc - Get Expert Professional Services at Home in Singapore"
        />
        <meta
          property="twitter:description"
          content="Knock Knock - Your ultimate destination for expert local services in Singapore. Find verified & trusted professionals near you for all your home and beauty needs."
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_WEB_URL}/images/knoc%20knoc%20logo.png`}
        />
      </head>
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
