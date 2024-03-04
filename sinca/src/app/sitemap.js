import { createClient } from "@/prismicio";

const URL = "https://sinca.org";

export default async function sitemap() {
    const client = createClient();
    const pages = await client.getAllByType("page");
    const proiecte = await client.getAllByType("proiect");

    const pageRoutes = pages.map((page, index) => ({
        url: `${URL}/${page.uid}`,
        lastModified: new Date(page.last_publication_date),
        priority: 1 + (index / 10),
    }));

    const proiecteRoutes = proiecte.map((proiect, index) => ({
        url: `${URL}/${proiect.uid}`,
        lastModified: new Date(proiect.last_publication_date),
        priority: 2 + (index / 10)
    }));

  return [...pageRoutes, ...proiecteRoutes];
}
