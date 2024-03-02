import { PrismicRichText } from "@/components/PrismicRichText";
import * as prismic from "@prismicio/client";
/**
 * @typedef {import("@prismicio/client").Content.TextTwoColSlice} TextTwoColSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextTwoColSlice>} TextTwoColProps
 * @param {TextTwoColProps}
 */
const TextTwoCol = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 py-20 bg-brand-superlight"
    >
      <div className="max-w-screen-xl m-auto">
        <div className="flex flex-col justify-center">
            <p className="text-brand-brown flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="3" viewBox="0 0 28 3" fill="none"><line y1="1.5" x2="28" y2="1.5" stroke="currentColor" strokeOpacity="0.65" strokeWidth="3"></line></svg>
                <span className="ml-4 text-lg font-semibold">{slice.primary.eyebrow}</span>
            </p>
            <div className="text-center py-4 max-w-[56rem] m-auto text-slate-800">
              <PrismicRichText field={slice.primary.title}/>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-4 lg:mt-8 text-lg text-slate-700">
          {prismic.isFilled.richText(slice.primary.first_column) && 
            <div className="py-4 md:py-8 md:pr-8 lg:pr-14 md:w-1/2">
              <PrismicRichText field={slice.primary.first_column}/>
            </div>
          }
          {prismic.isFilled.richText(slice.primary.second_column) && 
            <div className="py-4 md:py-8 md:pl-8 lg:pl-14  md:border-l md:border-slate-350 md:w-1/2">
              <PrismicRichText field={slice.primary.second_column}/>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default TextTwoCol;
