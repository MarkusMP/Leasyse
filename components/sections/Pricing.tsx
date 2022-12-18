import Link from "next/link";
import React from "react";
import {
  PricingItemListPayload,
  PricingPayload,
  PricingItemPayload,
} from "types";

const PricingItem = ({ data }: { data: PricingItemListPayload }) => {
  return (
    <div
      className="flex flex-col p-6 mx-auto max-w-lg text-center bg-brightRed text-white rounded-lg border shadow xl:p-8"
      id="pricingItem"
    >
      <h3 className="mb-4 text-2xl font-semibold">{data.title}</h3>
      <p className="font-light  sm:text-lg ">{data.description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-bold">{data.price}</span>
        <span>{data.pricingType}</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        {data.list &&
          data.list.map((item: PricingItemPayload) => (
            <li key={item._id} className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{item.title}</span>
            </li>
          ))}
      </ul>
      {data.btnText && data.link.slug && data.link.slug.startsWith("/#") ? (
        <a
          href={`${data.link.slug}`}
          className="text-brightRed bg-white hover:bg-gray-900 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all"
        >
          {data.btnText}
        </a>
      ) : (
        <Link
          href={`${data.link.slug}`}
          className="text-brightRed bg-white hover:bg-gray-900 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all"
        >
          {data.btnText}
        </Link>
      )}
    </div>
  );
};

const Pricing = ({ description, list, title }: PricingPayload) => {
  return (
    <section className="bg-white" id="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold">{title}</h2>
          <p className="mb-5 font-light  sm:text-xl">{description}</p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {list &&
            list.map((item) => <PricingItem data={item} key={item._key} />)}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
