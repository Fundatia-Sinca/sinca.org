import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";

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
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.slice(0, -2).map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="font-medium text-slate-700 hover:text-slate-800"
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex flex-wrap gap-6 md:gap-10 ml-auto">
        {navigation.data?.links.slice(-2).map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="font-medium"
              >
                <PrismicNextLink 
                  className={prismic.asText(item.label)== 'Doneaza' ? 'py-3 px-5 bg-brand-dark text-white hover:bg-brand-darker' : 'text-slate-700 hover:text-slate-800'} field={item.link}>
                  <PrismicText field={item.label}/>
                </PrismicNextLink>
              </li>
            ))}
        </ul>
      </div>
    </Bounded>
  );
}
