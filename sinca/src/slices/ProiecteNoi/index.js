import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";
import { Heading } from "@/components/Heading";

/**
 * @typedef {import("@prismicio/client").Content.ProiecteNoiSlice} ProiecteNoiSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProiecteNoiSlice>} ProiecteNoiProps
 * @param {ProiecteNoiProps}
 */

const TextWithImage = ({proiect, reverse = false}) => {
  return(
    <Bounded as="section" className="bg-brand-superlight">
      <div className={clsx("flex flex-col-reverse relative", reverse ? 'lg:flex-row-reverse' : 'lg:flex-row')}>
        {prismic.isFilled.richText(proiect.data.eyebrow) && 
          <div className={clsx("text-slate-800 p-10 bg-brand max-w-[14rem] absolute -top-24 lg:top-[unset] lg:bottom-20 z-10", reverse ? 'left-0' : 'right-0')}>
            <PrismicRichText field={proiect.data.eyebrow} />
          </div>
        }
      <div className="border border-brand-darklight lg:border-slate-300 bg-brand-light p-6 text-slate-600 lg:max-w-[60%] lg:p-20">
        <Heading as="h3" size="lg" className="mb-4 mt-12 first:mt-0 last:mb-0">
          {proiect.data.title}
        </Heading>
        <PrismicRichText field={proiect.data.description} />
        <PrismicNextLink
            className="py-3 px-5 border border-brand-dark text-brand-dark hover:bg-brand-darker hover:text-white inline-block"
            href={proiect.url}>
              Despre Proiect
          </PrismicNextLink>
      </div>
      <div>
        {prismic.isFilled.image(proiect.data.image) && (
          <div className={clsx("lg:absolute lg:bottom-0 lg:top-0 m-auto lg:flex lg:items-center lg:max-w-[46%]", reverse ? 'lg:left-0' : 'lg:right-0')}>
            <PrismicNextImage
              field={proiect.data.image}
              sizes="100vw"
              className="w-full"
              fallbackAlt=''
            />
          </div>
        )}
      </div>
    </div>
    </Bounded>
  )
}
const ProiecteNoi = async ({ slice }) => {
  const client = createClient();
  const proiecte = await client.getAllByType("proiect", {
    orderings: [
      { field: "my.proiect.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return (
    <>
      {proiecte.slice(0, 3).map((proiect, index) => (
        <TextWithImage proiect={proiect} key={proiect.uid} reverse={index == 1} />
      ))}
    </>
  );
};

export default ProiecteNoi;
