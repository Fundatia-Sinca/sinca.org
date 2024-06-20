import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.BannerFundatiaSincaSlice} BannerFundatiaSincaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BannerFundatiaSincaSlice>} BannerFundatiaSincaProps
 * @param {BannerFundatiaSincaProps}
 */
const BannerFundatiaSinca = ({ slice }) => {
  const isDefault = slice.variation === "default";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-wrap w-full items-center"
      
    >
      {isDefault ? (
        <>
          <div className="w-full lg:w-1/2 h-full mb-10 sm:mb-0">
            <PrismicNextImage
              field={slice.primary.image}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 p-9 pt-0 flex flex-col justify-center">
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.image_description} />
            <div>
              {slice.items.map((help, index) => (
                <div key={index} className="flex flex-col">
                  <div className="pb-3">
                    <hr class="w-10 h-1 mb-2 bg-brand-brown border-0 rounded " />
                    <div className="font-bold text-lg">
                      <PrismicText field={help.how_to_help_us_title} />
                    </div>
                    <PrismicRichText field={help.how_to_help_us_paragraph} />
                  </div>
                </div>
              ))}
            </div>

            <PrismicNextLink
              field={slice.primary.button}
              className="mt-auto max-w-xs py-2 px-4 bg-brand-brown text-brand-light hover:bg-brand-light hover:text-brand-brown text-center rounded-md"
            >
              <PrismicRichText field={slice.primary.button_label} />
            </PrismicNextLink>
          </div>
        </>
      ) : (
        <>
          <div className="w-full lg:w-1/2 p-9 flex flex-col justify-center">
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.image_description} />
            <div>
              {slice.items.map((help, index) => (
                <div key={index} className="flex flex-col">
                  <div className="pb-3">
                    <hr class="w-10 h-1 mb-2 bg-brand-brown border-0 rounded " />
                    <div className="font-bold text-lg">
                      <PrismicText field={help.how_to_help_us_title} />
                    </div>
                    <PrismicRichText field={help.how_to_help_us_paragraph} />
                  </div>
                </div>
              ))}
            </div>

            <PrismicNextLink
              field={slice.primary.button}
              className="mt-auto max-w-xs py-2 px-4 bg-brand-brown text-brand-light hover:bg-brand-light hover:text-brand-brown text-center rounded-md"
            >
              <PrismicRichText field={slice.primary.button_label} />
            </PrismicNextLink>
          </div>
          <div className="w-full lg:w-1/2 h-full mb-10">
            <PrismicNextImage
              field={slice.primary.image}
              className="object-cover w-full h-full"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default BannerFundatiaSinca;
