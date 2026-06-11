import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GradientBackground } from "@/components/layout/GradientBackground";
import config from "@/data/config.json";
import { Config } from "@/data/types";

const typedConfig = config as Config;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(typedConfig.seo.canonical),
  title: typedConfig.seo.title,
  description: typedConfig.seo.description,
  keywords: typedConfig.seo.keywords,
  openGraph: {
    title: typedConfig.seo.title,
    description: typedConfig.seo.description,
    url: typedConfig.seo.canonical,
    siteName: typedConfig.seo.title,
    images: [
      {
        url: typedConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: typedConfig.profile.name,
      },
    ],
    locale: typedConfig.seo.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: typedConfig.seo.title,
    description: typedConfig.seo.description,
    creator: typedConfig.seo.twitterHandle,
    images: [typedConfig.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#000000] text-zinc-100 selection:bg-brand-primary/30 min-h-screen relative overflow-x-hidden`}
      >
        {typedConfig.analytics?.googleAnalyticsId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${typedConfig.analytics.googleAnalyticsId}');
              `,
            }}
          />
        )}
        {typedConfig.analytics?.facebookPixelId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${typedConfig.analytics.facebookPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}

        {typedConfig.analytics?.googleAnalyticsId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${typedConfig.analytics.googleAnalyticsId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {typedConfig.analytics?.facebookPixelId && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${typedConfig.analytics.facebookPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}

        <GradientBackground />
        <main className="relative z-10 w-full min-h-screen py-12 md:py-20 flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
