import RenderSections from "components/RenderSections";
import React from "react";

import { PagePayload } from "types";

const Page = ({ data }: { data: PagePayload }) => {
  return data.content && <RenderSections sections={data.content} />;
};

export default Page;
