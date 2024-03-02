import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
/**
 * @typedef {import("@prismicio/client").Content.GallerySlice} GallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySlice>} GalleryProps
 * @param {GalleryProps}
 */
const Gallery = ({ slice }) => {
  const images = slice.items;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div aria-hidden="true" className="absolute top-0 w-full h-full flex flex-col">
        <div className="bg-brand flex-1 flex-shrink-1 flex-basis-0"></div>
        <div className="bg-brand flex-1 flex-shrink-1 flex-basis-0"></div>
        <div className="bg-white flex-1 flex-shrink-1 flex-basis-0"></div>
      </div>
      <div className="max-w-screen-xl m-auto relative px-4 py-12">
        <div className="grid gap-6 mt-8 grid-cols-12">
          <div className="col-span-6 md:col-span-4 flex flex-col gap-6">
              {images.slice(0, 2).map((image, index) => (
                <PrismicNextImage
                  field={image.image}
                  key={image.image.id}
                  sizes="100vw"
                  className={clsx(index == 0 ? 'w-full' : 'md:w-2/3 w-full')}
                  fallbackAlt=''
                />
              ))}
          </div>
          <div className="col-span-2 hidden md:flex flex-col gap-6">
            {images.slice(2, 4).map((image) => (
                <PrismicNextImage
                  field={image.image}
                  key={image.image.id}
                  sizes="100vw"
                  className="w-full"
                  fallbackAlt=''
                />
              ))}
          </div>
          <div className="col-span-6 md:col-span-4 flex flex-col gap-6">
            {images.slice(4, 6).map((image, index) => (
                <PrismicNextImage
                  field={image.image}
                  key={image.image.id}
                  sizes="100vw"
                  className={clsx(index == 1 ? 'w-full' : 'md:w-2/3 w-full')}
                  fallbackAlt=''
                />
              ))}
          </div>
          <div className="col-span-2 hidden md:flex flex-col">
            {images.slice(6, 8).map((image) => (
                <PrismicNextImage
                  field={image.image}
                  key={image.image.id}
                  sizes="100vw"
                  className="w-full"
                  fallbackAlt=''
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
