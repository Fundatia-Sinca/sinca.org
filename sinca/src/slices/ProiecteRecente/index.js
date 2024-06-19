import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { isFilled } from "@prismicio/client";

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
      className="max-w-screen-xl m-auto text-center  px-8 lg:px-0"
    >
      <div className="m-auto max-w-6xl sm:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex flex-col mb-4 md:mb-0 md:w-3/4">
            {isFilled.richText(slice.primary.title) && (
              <div class="md:text-5xl text-2xl text-left uppercase font-black mb-2 md:mb-4">
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}
            <div className="text-left text-base md:text-lg">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
          <div className="md:w-1/4 md:flex text-left sm:text-center md:justify-end">
            <PrismicNextLink
              field={slice.primary.about_us}
              className="py-3 px-5 bg-brand-brown text-brand-light hover:bg-brand-light hover:text-brand-brown inline-block rounded-md"
            >
              <PrismicRichText field={slice.primary.about_us_label} />
            </PrismicNextLink>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
          {slice.items.map((proiect, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg flex flex-col hover:border hover:border-red-400 hover:shadow-2xl"
            >
              <PrismicNextImage
                field={proiect.project_preview_image}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="flex flex-col flex-grow p-4">
                <div className="flex flex-col flex-grow mb-4">
                  <PrismicRichText field={proiect.project_title} />
                  <PrismicRichText field={proiect.project_short_description} />
                </div>
                <PrismicNextLink
                  field={proiect.project_link}
                  className="mt-auto py-2 px-4 bg-brand-brown text-brand-light hover:bg-brand-light hover:text-brand-brown text-center rounded-md"
                >
                  <PrismicRichText field={proiect.project_link_label} />
                </PrismicNextLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProiecteRecente;
