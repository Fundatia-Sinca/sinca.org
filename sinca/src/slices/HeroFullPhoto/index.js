import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroFullPhotoSlice} HeroFullPhotoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroFullPhotoSlice>} HeroFullPhotoProps
 * @param {HeroFullPhotoProps}
 */
const HeroFullPhoto = ({ slice }) => {
  const isFullPhoto = slice.variation === "default";
  const title = slice.primary.cover_photo_title;

  return (
    <section
      className={`relative ${isFullPhoto ? "h-screen" : "h-auto"}`}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage
        className="w-full h-full object-cover -mt-8 md:mt-0"
        field={slice.primary.cover_photo}
        alt="Cover Photo"
      />

       {/* centered title of the section if variation is different than default */}
       {!isFullPhoto && title && (
        <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-red-900">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase ">
            <PrismicText field={title} />
          </div>
        </div>
      )}

      {/* contact us button */}
      {!isFullPhoto && (
        <div className="absolute bottom-4 right-4 py-2 px-4 sm:py-3 sm:px-5 rounded-md border bg-white text-slate-800 text-base sm:text-lg hover:bg-slate-800 hover:text-white inline-block">
          <PrismicNextLink field={slice.primary.contact_us}>
            <PrismicText field={slice.primary.contact_label} />
          </PrismicNextLink>
        </div>
      )}
    </section>
  );
};

export default HeroFullPhoto;
