import ImageBox from "components/shared/ImageBox";
import React from "react";
import { TestimonialsItemPayload, TestimonialsPayload } from "types";

const TestimonialsItem = ({ data }: { data: TestimonialsItemPayload }) => {
  return (
    <div className="flex flex-col mt-12 md:mt-0  items-center p-6 space-y-4 rounded-lg bg-veryLightGray md:w-1/3">
      <ImageBox
        image={data.image}
        alt={data.image.alt}
        classesWrapper="relative aspect-[1/1] w-16 -mt-14 rounded-full"
        priority={true}
        width={100}
        height={100}
      />
      <h3 className="text-lg font-bold">{data.title}</h3>
      <p className="text-sm text-darkGrayishBlue">{data.description}</p>
    </div>
  );
};

const Testimonials = ({ list, title }: TestimonialsPayload) => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center my-16">
        <h2 className="text-4xl font-bold text-center">{title}</h2>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {list &&
            list.map((item) => (
              <TestimonialsItem data={item} key={item._key} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
