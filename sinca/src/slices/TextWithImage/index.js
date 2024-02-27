import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

const TextWithImage = ({ slice }) => {
  const image = slice.primary.image;
  console.log(slice.primary.reverse)
  return (
    <Bounded as="section" className="bg-brand-superlight">
      <div className={clsx("flex flex-col-reverse relative", slice.primary.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row')}>
        {prismic.isFilled.richText(slice.primary.eyebrow) && 
          <div className={clsx("text-slate-800 p-10 bg-brand max-w-[14rem] absolute -top-24 lg:top-[unset] lg:bottom-20 z-10", slice.primary.reverse ? 'left-0' : 'right-0')}>
            <PrismicRichText field={slice.primary.eyebrow} />
          </div>
        }
        <div className="border border-brand-darklight lg:border-slate-300 bg-brand-light p-6 text-slate-600 lg:max-w-[60%] lg:p-20">
          <PrismicRichText field={slice.primary.text} />
          {prismic.isFilled.link(slice.primary.buttonLink) && <PrismicNextLink
            className="py-3 px-5 border border-brand-dark text-brand-dark hover:bg-brand-darker hover:text-white inline-block"
            field={slice.primary.buttonLink}>
              {slice.primary.buttonText}
          </PrismicNextLink>}
        </div>
        <div>
          {prismic.isFilled.image(image) && (
            <div className={clsx("lg:absolute lg:bottom-0 lg:top-0 m-auto lg:flex lg:items-center lg:max-w-[46%]", slice.primary.reverse ? 'lg:left-0' : 'lg:right-0')}>
              <PrismicNextImage
                field={image}
                sizes="100vw"
                className="w-full"
                fallbackAlt=''
              />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
