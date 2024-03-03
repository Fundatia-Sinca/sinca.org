import { notFound } from "next/navigation";
import { asText, asLink } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * @typedef {{ uid: string }} Params
 */

/**
 * @param {{ params: Params }}
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("proiect", params.uid)
    .catch(() => notFound());
  const settings = await client.getSingle("settings");
  
  return {
    title: `${asText(page.data.title)}| ${asText(settings.data.siteTitle)}`,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title,
      images: [
        {
          url: `/og?title=${page.data.meta_title}`,
          width: 960,
          height: 540,
          title: `${page.data.meta_title}`,
          type: "image/png",
        },
      ],
    },
  };
}

/**
 * @param {{ params: Params }}
 */
export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("proiect", params.uid)
    .catch(() => notFound());

  return (
    <>
      <div className="flex flex-col justify-center">
        <p className="text-brand-brown flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="3" viewBox="0 0 28 3" fill="none"><line y1="1.5" x2="28" y2="1.5" stroke="currentColor" strokeOpacity="0.65" strokeWidth="3"></line></svg>
          <span className="ml-4 text-lg font-semibold capitalize">Proiect: {page.uid.replace('-', ' ')}</span>
        </p>
        <div className="text-center py-4 max-w-[56rem] m-auto text-slate-900">
          <PrismicRichText field={page.data.title}/>
        </div>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const proiecte = await client.getAllByType("proiect");
  return proiecte.map((page) => {
    return { uid: page.uid };
  });
}
