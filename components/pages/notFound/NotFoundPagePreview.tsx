"use client";

import { usePreview } from "lib/sanity.preview";
import { notFoundQuery } from "lib/sanity.queries";
import type { NotFoundPayload } from "types";

import NotFoundPage from "./NotFoundPage";

export function NotFoundPagePreview({ token }: { token: null | string }) {
  const NotFound: NotFoundPayload = usePreview(token, notFoundQuery);

  if (!NotFound) {
    return (
      <div className="text-center">
        Please start editing your NotFound Page document to see the preview!
      </div>
    );
  }

  return <NotFoundPage data={NotFound} />;
}
