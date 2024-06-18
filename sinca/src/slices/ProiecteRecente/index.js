import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ProiecteRecenteSlice} ProiecteRecenteSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProiecteRecenteSlice>} ProiecteRecenteProps
 * @param {ProiecteRecenteProps}
 */
const ProiecteRecente = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col">
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
        </div>
        <PrismicNextLink
              field={slice.primary.about_us}
              className="py-3 px-5 bg-brand-dark text-white hover:bg-brand-darker inline-block"
            >
              <PrismicRichText field={slice.primary.about_us_label} />
            </PrismicNextLink>
        </div>
        <div className="grid grid-cols-4">
          {slice.items.map((proiect, index) => (
            <div key={index}>
              <PrismicNextImage field={proiect.project_preview_image} />
              <PrismicRichText field={proiect.project_title} />
              <PrismicRichText field={proiect.project_short_description} />
              <PrismicNextLink
                field={proiect.project_link}
                className="py-3 px-5 bg-brand-dark text-white hover:bg-brand-darker inline-block"
              >
                <PrismicRichText field={proiect.project_link_label} />
              </PrismicNextLink>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProiecteRecente;
