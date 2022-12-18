import { SiteMeta } from "components/global/SiteMeta";
import { getHomePage } from "lib/sanity.client";
import { previewData } from "next/headers";

export default async function HomePageHead() {
  const token = previewData().token;

  const [page] = await Promise.all([getHomePage({ token })]);

  return (
    <SiteMeta
      description={page?.descriptionSEO}
      image={`https://localhost:3000/api/og?title=${page?.titleSEO}`}
      title={page?.titleSEO}
      noIndex={false}
    />
  );
}
