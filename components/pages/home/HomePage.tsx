import RenderSections from "components/RenderSections";
import React from "react";

import { HomePagePayload } from "types";

const HomePage = ({ data }: { data: HomePagePayload }) => {
  return data.content && <RenderSections sections={data.content} />;
};

export default HomePage;
