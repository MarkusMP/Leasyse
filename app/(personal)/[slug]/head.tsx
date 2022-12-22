import { SiteMeta } from "components/global/SiteMeta";
import { getPageBySlug } from "lib/sanity.client";
import { previewData } from "next/headers";

export default async function SlugHead({
  params,
}: {
  params: { slug: string };
}) {
  const token = previewData().token;

  const [page] = await Promise.all([
    getPageBySlug({ slug: params.slug, token }),
  ]);

  return (
    <SiteMeta
      title={page?.titleSEO}
      description={page?.descriptionSEO}
      image={`https://leasyse.vercel.app/api/og?title=${page?.titleSEO}`}
      noIndex={page?.indexPage}
    />
  );
}
