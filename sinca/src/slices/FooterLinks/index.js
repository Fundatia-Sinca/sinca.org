import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.FooterLinksSlice} FooterLinksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterLinksSlice>} FooterLinksProps
 * @param {FooterLinksProps}
 */
const FooterLinks = ({ slice }) => {
  if (!slice || !slice.items || slice.items.length === 0) {
    return null;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-white text-left"
    >
      {slice.items.map((item, index) => (
        <div key={`footer-link-${index}`} className="hover:text-yellow-400">
          <PrismicNextLink field={item.option_link}>
            <PrismicText field={item.option_title} />
          </PrismicNextLink>
        </div>
      ))}
    </section>
  );
};

export default FooterLinks;
