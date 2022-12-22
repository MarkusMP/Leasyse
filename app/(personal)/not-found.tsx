import { getNotFoundPage } from "lib/sanity.client";
import { PreviewSuspense } from "../../components/preview/PreviewSuspense";
import { PreviewWrapper } from "../../components/preview/PreviewWrapper";
import { previewData } from "next/headers";
import NotFoundPage from "components/pages/notFound/NotFoundPage";
import { NotFoundPagePreview } from "components/pages/notFound/NotFoundPagePreview";

export default async function NotFound() {
  const token = previewData().token || null;

  const data = await getNotFoundPage({ token });

  return (
    <>
      {token ? (
        <>
          <PreviewSuspense
            fallback={
              <PreviewWrapper>
                <NotFoundPage data={data} />
              </PreviewWrapper>
            }
          >
            <NotFoundPagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <NotFoundPage data={data} />
      )}
    </>
  );
}

export const revalidate = 60;
