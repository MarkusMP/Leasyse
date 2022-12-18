import React from "react";
import { FeatureItemPayload, FeaturePayload } from "types";

const FeatureItem = ({
  data,
  index,
}: {
  data: FeatureItemPayload;
  index: number;
}) => {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
            {index > 9 ? index : `0${index}`}
          </div>
          <h3 className="text-base font-bold md:mb-4 md:hidden">
            {data.title}
          </h3>
        </div>
      </div>

      <div>
        <h3 className="hidden mb-4 text-lg font-bold md:block">{data.title}</h3>
        <p className="text-darkGrayishBlue">{data.description}</p>
      </div>
    </div>
  );
};

const Feature = ({ list, description, title }: FeaturePayload) => {
  return (
    <section id="about" className="py-6 ">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md  text-4xl font-bold text-center md:text-left">
            {title}
          </h2>
          <p className="max-w-sm text-center mx-auto md:m-0 text-darkGrayishBlue md:text-left">
            {description}
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          {list &&
            list.map((item, index) => (
              <FeatureItem data={item} index={index + 1} key={item._key} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
