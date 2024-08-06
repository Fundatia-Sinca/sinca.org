import { isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.CustomerLogosSlice} CustomerLogosSlice
 *
 * @typedef {import("@prismicio/react").SliceComponentProps<CustomerLogosSlice>} CustomerLogosProps
 *
 * @param {CustomerLogosProps}
 */
const CustomerLogos = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 bg-brand"
    >
      <div>
        {isFilled.richText(slice.primary.eyebrowHeadline) && (
          <div className="text-brand-darklight text-center text-lg uppercase tracking-wider font-semibold">
            <PrismicRichText field={slice.primary.eyebrowHeadline} />
          </div>
        )}
        {slice.items.length > 0 && (
          <ul className="pt-8 flex flex-col md:flex-wrap md:flex-row justify-center items-center gap-6 lg:gap-12">
            {slice.items.map(
              (item) =>
                isFilled.image(item.image) && (
                  <li key={item.image.url}>
                    <PrismicNextLink field={item.link}>
                      <PrismicNextImage
                        field={item.image}
                        height={26}
                        width={160}
                        fallbackAlt=''
                        className="m-auto"
                      />
                    </PrismicNextLink>
                  </li>
                ),
            )}
          </ul>
        )}
        <PrismicNextLink
          field={slice.primary.callToActionLink}
          className=""
        >
          {slice.primary.callToActionLabel}
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default CustomerLogos;
