import { SiteMeta } from "components/global/SiteMeta";
import React from "react";

import { NotFoundPayload } from "types";

const notFoundPage = ({ data }: { data: NotFoundPayload }) => {
  return (
    <>
      <SiteMeta
        noIndex={true}
        title={data.titleSEO}
        description={data.descriptionSEO}
        image={`https://leasyse.vercel.app/api/og?title=${data.titleSEO}`}
      />
      <div className="min-h-screen flex items-center text-center">
        <div className="mx-auto">
          <h1 className="text-5xl pb-2 font-bold">
            {data.title && data.title}
          </h1>
          <p className="text-xl">{data.description && data.description}</p>
        </div>
      </div>
    </>
  );
};

export default notFoundPage;
