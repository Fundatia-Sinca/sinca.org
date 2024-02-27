import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview, PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden antialiased bg-brand-light">
        {/* @ts-expect-error Async Server Component */}
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=sinca"></script>
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 leading-none items-center border-b border-brand pb-4">
        <PrismicNextLink
          href="/"
          className="text-xl font-semibold tracking-tight flex flex-row items-center text-slate-800 gap-x-4"
        >
          {prismic.isFilled.image(settings.data.logo) && (
            <PrismicNextImage
              field={settings.data.logo}
              alt='Fundatia Sinca Logo'
              fill={false}
              className="w-16 h-16"
            />
        )}
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
      
        <Navigation navigation={navigation} />
      </div>
    </Bounded>
  );
}
