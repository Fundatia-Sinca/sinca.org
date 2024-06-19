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
    <section className={slice.variation == 'hero2' ? 'relative  text-slate-700 text-left flex flex-col md:flex-row m-auto xl:pl-10 w-full max-w-7xl pt-6 lg:pt-20' : 'relative bg-slate-900 text-white'}
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
          <div className="md:text-5xl text-2xl text-left uppercase text-black font-black">
            <PrismicRichText
              field={slice.primary.title}
              components={components}
            />
          </div>
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
                    className="py-3 px-5 bg-brand-brown text-brand-light text-xl hover:bg-brand-light hover:text-brand-brown inline-block"
                  >
                    {slice.primary.buttonText || "Proiecte"}
                  </PrismicNextLink>
                )}
                 {prismic.isFilled.link(slice.primary.link) && (
                  <PrismicNextLink
                    field={slice.primary.link}
                    className="py-3 px-5 border border-brand-brown text-brand-darker text-xl hover:bg-brand-brown hover:border-none hover:text-brand-light inline-block"
                  >
                    {slice.primary.linkText || 'Donează'}
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
          
        </div>
      </Bounded>
      <div className="w-full md:max-w-sm xl:max-w-xl mt-10 md:mt-0">
        {prismic.isFilled.image(mainImage) && (
          <PrismicNextImage
            field={mainImage}
            fallbackAlt=''
            fill={false}
            className="w-full lg:max-h-128 lg:object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;