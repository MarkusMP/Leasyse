import React from "react";
import PortableText from "react-portable-text";
import { PolicyPayload } from "types";

const Policy = ({ date, policy, title }: PolicyPayload) => {
  return (
    <section className="container mx-auto max-w-2xl py-10 px-4 min-h-screen">
      <h1 className="mb-4 text-4xl tracking-tight text-center font-bold">
        {title && title}
      </h1>
      <p className="mb-4 text-center">{date && date}</p>
      <div className="prose">{policy && <PortableText content={policy} />}</div>
    </section>
  );
};

export default Policy;
