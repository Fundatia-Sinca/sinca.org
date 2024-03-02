import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { PrismicRichText } from "@/components/PrismicRichText";
import { Bounded } from "@/components/Bounded";

/**
 * @typedef {import("@prismicio/client").Content.ImageWithStatsSlice} ImageWithStatsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageWithStatsSlice>} ImageWithStatsProps
 * @param {ImageWithStatsProps}
 */
const ImageWithStats = ({ slice }) => {
  return (
    <Bounded
      as="section"
      className="bg-brand-lighter md:py-16 relative"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      >
        <div className="relative">
          {prismic.isFilled.image(slice.primary.image) && (
            <div className="bg-brand">
              <PrismicNextImage field={slice.primary.image} sizes="100vw" className="w-full" fallbackAlt=''/>
            </div>
          )}
          <div className="lg:absolute w-full lg:-bottom-10 right-0 flex flex-col lg:flex-row justify-end">
            {slice.items.map((item, index) => (
              <div className="bg-brand lg:py-10" key={index}>
                <div className={clsx("px-12 py-8 lg:py-0", index + 1 == slice.items.length ? 'border-none' : 'border-b lg:border-b-0 lg:border-r border-slate-300')}>
                  <PrismicRichText field={item.stats} />
                </div>
              </div>
            ))}
          </div>
        </div>
    </Bounded>
  );
};

export default ImageWithStats;
