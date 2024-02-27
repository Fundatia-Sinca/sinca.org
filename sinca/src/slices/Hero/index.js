import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading as="h2" size="lg" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;
  const mainImage = slice.primary.image;

  return (
    <section className={slice.variation == 'hero2' ? 'relative bg-brand text-slate-700 text-left flex flex-col md:flex-row m-auto xl:pl-10 w-full max-w-7xl pt-6 lg:pt-20' : 'relative bg-slate-900 text-white'}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {prismic.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          fallbackAlt=''
          fill={true}
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <Bounded yPadding="none" className="relative">
        <div className={slice.variation == 'hero2' ? "max-w-xl pr-4 grid justify-items-center gap-8" : "grid justify-items-center gap-8"}>
          <div className="text-semibold text-lg">
            <PrismicRichText
              field={slice.primary.text}
              components={components}
            />
          </div>

          {slice.variation == 'hero2' && 
            (
              <div className="flex flex-row w-full gap-4">
                {prismic.isFilled.link(slice.primary.buttonLink) && (
                  <PrismicNextLink
                    field={slice.primary.buttonLink}
                    className="py-3 px-5 bg-brand-dark text-white text-xl hover:bg-brand-darker inline-block"
                  >
                    {slice.primary.buttonText || "Proiecte"}
                  </PrismicNextLink>
                )}
                 {prismic.isFilled.link(slice.primary.link) && (
                  <PrismicNextLink
                    field={slice.primary.link}
                    className="py-3 px-5 border border-brand-dark text-brand-dark text-xl hover:bg-brand-darker hover:text-white inline-block"
                  >
                    {slice.primary.linkText || 'Doneaza'}
                  </PrismicNextLink>
                )}
              </div>
            )
          }
          {prismic.isFilled.link(slice.primary.buttonLink) && slice.variation == 'default' && (
            <PrismicNextLink
              field={slice.primary.buttonLink}
              className="py-3 px-5 bg-brand-dark text-white hover:bg-brand-darker inline-block"
            >
              {slice.primary.buttonText || "Learn More"}
            </PrismicNextLink>
          )}
          {prismic.isFilled.link(slice.primary.buttonLink) && slice.variation == 'default' && (
            <PrismicNextLink
              field={slice.primary.buttonLink}
              className="py-3 px-5 bg-brand-dark text-white hover:bg-brand-darker inline-block"
            >
              {slice.primary.buttonText || "Learn More"}
            </PrismicNextLink>
          )}
           {slice.primary.review && slice.variation == 'hero2' && (
            <div className="relative py-4 w-full">
                <div className="absolute -left-full -right-6 top-0 bottom-0 bg-brand-lighter -z-index-1">
                </div>
                <svg className="absolute -left-12 top-6 text-slate-300 w-8 h-8" height="48" width="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><path d="M21.66145,33.81676c0,4.29661-3.96109,8.22346-8.91304,8.22346C4.56585,42.04022,1,35.98671,1,27.90615 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916C14.10766,12.9954,8.88433,17.58691,8.14413,25.28492h2.89106 c3.09587,0,6.31198,0.4991,8.45903,2.72402C21.02498,29.59761,21.66145,31.62025,21.66145,33.81676z M47,33.81676 c0,4.29661-3.96109,8.22346-8.91304,8.22346c-8.18256,0-11.74842-6.05352-11.74842-14.13408 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916c-6.98843,3.38646-12.21176,7.97797-12.95195,15.67598 c3.15316,0,5.76908-0.11425,8.09925,0.71955C45.21084,27.30299,47,30.10812,47,33.81676z" fill="currentColor"></path></g></svg>
                <div className="relative py-4 max-w-xl text-lg text-slate-600">
                  <PrismicRichText
                    field={slice.primary.review}
                  />
                </div>
            </div>
          )}
        </div>
      </Bounded>
      <div className="md:max-w-sm xl:max-w-xl">
        {prismic.isFilled.image(mainImage) && (
          <PrismicNextImage
            field={mainImage}
            fallbackAlt=''
            fill={false}
            className="w-full lg:h-full lg:object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
