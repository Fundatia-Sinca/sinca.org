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
        <Footer />
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


async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const socials = settings.data.socials[0];
  return (
    <Bounded as="footer" yPadding="sm" className="bg-brand-dark">
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 leading-none items-center border-b border-brand-darklight pb-4">
        <PrismicNextLink
          href="/"
          className="text-xl font-semibold tracking-tight flex flex-row items-center text-slate-100 gap-x-4"
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
        <div className="flex flex-wrap gap-x-3">
            {prismic.isFilled.link(socials.facebook) && 
              <PrismicNextLink field={socials.facebook}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 text-slate-100"><g fill="currentColor"><path fill="currentColor" d="M9.03153,23L9,13H5V9h4V6.5C9,2.7886,11.29832,1,14.60914,1c1.58592,0,2.94893,0.11807,3.34615,0.17085 v3.87863l-2.29623,0.00104c-1.80061,0-2.14925,0.85562-2.14925,2.11119V9H18.75l-2,4h-3.24019v10H9.03153z"></path></g></svg>
              </PrismicNextLink>
            }
            {prismic.isFilled.link(socials.instagram) && 
              <PrismicNextLink field={socials.instagram}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 text-slate-100"><g fill="currentColor"><path d="M12,2.982c2.937,0,3.285.011,4.445.064a6.072,6.072,0,0,1,2.042.379,3.4,3.4,0,0,1,1.265.823,3.4,3.4,0,0,1,.823,1.265,6.072,6.072,0,0,1,.379,2.042c.053,1.16.064,1.508.064,4.445s-.011,3.285-.064,4.445a6.072,6.072,0,0,1-.379,2.042,3.644,3.644,0,0,1-2.088,2.088,6.072,6.072,0,0,1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.072,6.072,0,0,1-2.042-.379,3.4,3.4,0,0,1-1.265-.823,3.4,3.4,0,0,1-.823-1.265,6.072,6.072,0,0,1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.072,6.072,0,0,1,.379-2.042,3.4,3.4,0,0,1,.823-1.265,3.4,3.4,0,0,1,1.265-.823,6.072,6.072,0,0,1,2.042-.379c1.16-.053,1.508-.064,4.445-.064M12,1c-2.987,0-3.362.013-4.535.066a8.108,8.108,0,0,0-2.67.511A5.625,5.625,0,0,0,1.577,4.8a8.108,8.108,0,0,0-.511,2.67C1.013,8.638,1,9.013,1,12s.013,3.362.066,4.535a8.108,8.108,0,0,0,.511,2.67A5.625,5.625,0,0,0,4.8,22.423a8.108,8.108,0,0,0,2.67.511C8.638,22.987,9.013,23,12,23s3.362-.013,4.535-.066a8.108,8.108,0,0,0,2.67-.511A5.625,5.625,0,0,0,22.423,19.2a8.108,8.108,0,0,0,.511-2.67C22.987,15.362,23,14.987,23,12s-.013-3.362-.066-4.535a8.108,8.108,0,0,0-.511-2.67A5.625,5.625,0,0,0,19.2,1.577a8.108,8.108,0,0,0-2.67-.511C15.362,1.013,14.987,1,12,1Z" fill="currentColor"></path><path d="M12,6.351A5.649,5.649,0,1,0,17.649,12,5.649,5.649,0,0,0,12,6.351Zm0,9.316A3.667,3.667,0,1,1,15.667,12,3.667,3.667,0,0,1,12,15.667Z" fill="currentColor"></path><circle cx="17.872" cy="6.128" r="1.32" fill="currentColor"></circle></g></svg>
              </PrismicNextLink>
            }
            {prismic.isFilled.link(socials.youtube) && 
              <PrismicNextLink field={socials.youtube}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 text-slate-100"><g fill="currentColor"><path fill="currentColor" d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z"></path></g></svg>
              </PrismicNextLink>
            }
            {prismic.isFilled.link(socials.tiktok) && 
              <PrismicNextLink field={socials.tiktok}>
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-100"><g fill="currentColor"><path d="M10.189,8.937v4.122a3.588,3.588,0,0,0-4.5,3.324,3.242,3.242,0,0,0,3.467,3.442,3.231,3.231,0,0,0,3.467-3.489V0H16.7c.693,4.315,2.851,5.316,5.74,5.778V9.913a12.292,12.292,0,0,1-5.625-1.9V16.18c0,3.7-2.19,7.82-7.627,7.82A7.664,7.664,0,0,1,1.56,16.141,7.516,7.516,0,0,1,10.189,8.937Z" fill="currentColor"></path></g></svg>
              </PrismicNextLink>
            }
            {prismic.isFilled.link(socials.twitter) && 
              <PrismicNextLink field={socials.twitter}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 text-slate-100"><g fill="currentColor"><path fill="currentColor" d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path></g></svg>
              </PrismicNextLink>
            }
        </div>
      </div>
      <div className="pt-4 text-slate-200 text-sm">
        <p>© {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </Bounded>
  );
}
