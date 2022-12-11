import React from "react";

import { HomePagePayload } from "types";

const HomePage = ({ data }: { data: HomePagePayload }) => {
  return <div className="bg-blue-500">{data.title}</div>;
};

export default HomePage;
