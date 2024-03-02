import { PrismicRichText } from "@/components/PrismicRichText";
import * as prismic from "@prismicio/client";
/**
 * @typedef {import("@prismicio/client").Content.SixBoxesSlice} SixBoxesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SixBoxesSlice>} SixBoxesProps
 * @param {SixBoxesProps}
 */
const SixBoxes = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-dark py-10 px-8 lg:py-20 text-slate-100 text-lg"
    >
     <div className="max-w-screen-xl m-auto">
        {prismic.isFilled.richText(slice.primary.title) && 
          <div className="md:text-center pt-4 lg:pt-8 pb-10">
            <PrismicRichText field={slice.primary.title} />
          </div>
        }
      <div className="md:grid grid-cols-3">
          {slice.primary.first.length && 
            <div className="py-10 md:px-8 md:col-span-1 relative">
              <span className="absolute -left-2 top-2 md:left-8 text-7xl font-extrabold text-brand-darker opacity-20">1</span>
              <PrismicRichText field={slice.primary.first} />
              <div className="h-px bg-slate-300 md:absolute md:bottom-0 md:left-8 md:right-14"></div>
              <div className="hidden md:block w-px bg-slate-300 md:absolute md:top-14 md:bottom-14 md:right-0"></div>
            </div>
          }
          {slice.primary.second.length && 
            <div className="py-10 md:col-span-1 md:px-8 relative">
              <span className="absolute -left-2 top-2 md:left-8 text-7xl font-extrabold text-brand-darker opacity-20">2</span>
              <PrismicRichText field={slice.primary.second} />
              <div className="h-px bg-slate-300 md:absolute md:bottom-0 md:left-14 md:right-14"></div>
              <div className="hidden md:block w-px bg-slate-300 md:absolute md:top-14 md:bottom-14 md:right-0"></div>
            </div>
          }
          {slice.primary.third.length && 
            <div className="py-10 md:col-span-1 md:px-8 relative">
              <span className="absolute -left-2 top-2 md:left-8 text-7xl font-extrabold text-brand-darker opacity-20">3</span>
              <PrismicRichText field={slice.primary.third} />
              <div className="h-px bg-slate-300 md:absolute md:bottom-0 md:left-14 md:right-8"></div>
            </div>
          }
          {slice.primary.fourth.length && 
            <div className="py-10 md:col-span-1 md:px-8 relative">
              <span className="absolute -left-2 top-2 md:top-4 md:left-8 text-7xl font-extrabold text-brand-darker opacity-20">4</span>
              <PrismicRichText field={slice.primary.fourth} />
              <div className="block md:hidden h-px bg-slate-300 md:absolute md:bottom-0 md:left-8 md:right-8"></div>
              <div className="hidden md:block w-px bg-slate-300 md:absolute md:top-14 md:bottom-14 md:right-0"></div>
            </div>
          }
          {slice.primary.fifth.length && 
            <div className="py-10 md:col-span-1 md:px-8 relative">
              <span className="absolute -left-2 top-2 md:top-4 md:left-8 text-7xl font-extrabold text-brand-darker opacity-20">5</span>
              <PrismicRichText field={slice.primary.fifth} />
              <div className="block md:hidden h-px bg-slate-300 md:absolute md:bottom-0 md:left-8 md:right-8"></div>
              <div className="hidden md:block w-px bg-slate-300 md:absolute md:top-14 md:bottom-14 md:right-0"></div>
            </div>
          }
          {slice.primary.sixth.length && 
            <div className="py-10 md:col-span-1 md:px-8 relative">
              <span className="absolute -left-2 top-2 md:top-4 md:left-8 text-7xl font-extrabold text-brand-darker opacity-20">6</span>
              <PrismicRichText field={slice.primary.sixth} />
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default SixBoxes;
