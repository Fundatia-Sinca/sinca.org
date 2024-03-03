import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ParteneriSlice} ParteneriSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ParteneriSlice>} ParteneriProps
 * @param {ParteneriProps}
 */
const Parteneri = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-superlight py-14 lg:py-24 px-8 lg:px-0"
    >
      <div className="max-w-screen-xl m-auto text-center">
        {isFilled.richText(slice.primary.title) && 
          <div className="text-slate-700 pb-8">
            <PrismicRichText field={slice.primary.title} />
          </div>
        }
        {isFilled.richText(slice.primary.text) && 
          <div className="text-slate-600 max-w-screen-md m-auto text-lg">
            <PrismicRichText field={slice.primary.text} />
          </div>
        }
        <div className="pt-10 lg:pt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {slice.items.map((item, index) => (
              <PrismicNextLink field={item.link} key={index} className="lg:hover:opacity-75 flex justify-center items-center py-8 bg-slate-100" style={{filter: "grayscale(100%)"}}>
                <PrismicNextImage className="w-full max-w-[11rem]" field={item.image} />
              </PrismicNextLink>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Parteneri;
