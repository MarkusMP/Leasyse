import Page from "../../../components/pages/page/Page";
import { PagePreview } from "components/pages/page/PagePreview";
import { PreviewSuspense } from "components/preview/PreviewSuspense";
import { PreviewWrapper } from "components/preview/PreviewWrapper";
import { getAllPagesBySlug, getPageBySlug } from "lib/sanity.client";
import { previewData } from "next/headers";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPagesBySlug({});

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PageSlugRoute({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const token = previewData().token || null;
  const data = await getPageBySlug({ slug });

  if (!data && !token) {
    notFound();
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <Page data={data} />
            </PreviewWrapper>
          }
        >
          <PagePreview token={token} slug={params.slug} />
        </PreviewSuspense>
      ) : (
        <Page data={data} />
      )}
    </>
  );
}
