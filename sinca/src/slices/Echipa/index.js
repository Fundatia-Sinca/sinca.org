import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";
/**
 * @typedef {import("@prismicio/client").Content.EchipaSlice} EchipaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EchipaSlice>} EchipaProps
 * @param {EchipaProps}
 */
const Echipa = async ({ slice }) => {
  const client = createClient();
  const persoane = await client.getAllByType("persoana");
  persoane.sort((a, b) => a.data.order - b.data.order);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-brand-superlight"
    >
      <div className="bg-brand absolute h-full max-h-[40rem] top-0 w-full"></div>
      <div className="max-w-screen-xl m-auto px-8 py-14 md:py-32 relative">
        <div className="md:grid grid-cols-2 gap-8 lg:pb-14">
          <div>
            <p className="text-brand-brown flex items-center justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="3" viewBox="0 0 28 3" fill="none"><line y1="1.5" x2="28" y2="1.5" stroke="currentColor" strokeOpacity="0.65" strokeWidth="3"></line></svg>
              <span className="ml-4 text-lg font-semibold">{slice.primary.eyebrow}</span>
            </p>
            {isFilled.richText(slice.primary.title) &&
              <div className="text-slate-800 py-4">
                <PrismicRichText field={slice.primary.title}/>
              </div>
            }
          </div>
          <div className="text-slate-700 text-lg">
            {isFilled.richText(slice.primary.text) &&
              <PrismicRichText field={slice.primary.text}/>
            }
          </div>
        </div>
        <div className="pt-12 md:grid grid-cols-3 gap-8">
            {persoane.map((item) => (
              <div className="pb-10 last:pb-0">
                <PrismicNextImage className="max-w-96 max-h-96 object-cover" field={item.data.image} />
                <div className="font-bold pt-6 pb-2 text-xl text-slate-800">{item.data.nume}</div>
                <div className="text-lg text-slate-600">{item.data.pozitie}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Echipa;
