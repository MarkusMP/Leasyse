import ImageBox from "components/shared/ImageBox";
import Link from "next/link";
import React from "react";
import { HeroPayload } from "types";

const Hero = ({ title, btnText, description, image, link }: HeroPayload) => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            {title && title}
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue mx-auto md:mx-0 md:text-left">
            {description && description}
          </p>
          <div className="flex justify-center md:justify-start">
            {btnText && link.slug && link.slug.startsWith("/#") ? (
              <a
                href={`${link.slug}`}
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                {btnText}
              </a>
            ) : (
              <Link
                href={`${link.slug}`}
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                {btnText}
              </Link>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <ImageBox
            image={image}
            alt={image.alt}
            classesWrapper="relative aspect-[1/1]"
            priority={true}
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
