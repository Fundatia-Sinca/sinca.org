import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata() {
  const client = createClient();
  const page = await client.getByUID("page", "home");
  return {
    title: page.data.title,
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

export default async function Page() {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}
