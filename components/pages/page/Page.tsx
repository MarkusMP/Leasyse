import React from "react";

import { PagePayload } from "types";

const Page = ({ data }: { data: PagePayload }) => {
  return <div className="bg-blue-500">{data.title}</div>;
};

export default Page;
