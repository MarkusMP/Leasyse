import Link from "next/link";
import React from "react";
import { CtaPayload } from "types";

const Cta = ({ btnText, title, link }: CtaPayload) => {
  return (
    <section id="cta" className="bg-brightRed">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
          {title}
        </h2>

        <div>
          {btnText && link.slug && link.slug.startsWith("/#") ? (
            <a
              href={`${link.slug}`}
              className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >
              {btnText && btnText}
            </a>
          ) : (
            <Link
              href={`${link.slug}`}
              className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >
              {btnText && btnText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cta;
