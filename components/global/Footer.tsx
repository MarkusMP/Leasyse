import Link from "next/link";
import React from "react";
import { FooterPayload } from "types";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = ({
  data: { btnText, menuItems, copyright, logo, menuItemsTwo, social },
}: {
  data: FooterPayload;
}) => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            {copyright && copyright}
          </div>

          <div>
            <h1 className="h-8 text-white text-4xl">{logo}</h1>
          </div>

          <div className="flex justify-center space-x-4 pt-8">
            {social &&
              social.map((item: any) => (
                <a
                  key={item._key}
                  href={`${item?.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    (item?.media === "facebook" && "facebook") ||
                    (item?.media === "instagram" && "instagram") ||
                    (item?.media === "twitter" && "twitter") ||
                    (item?.media === "linkedin" && "linkedin") ||
                    ((item?.media === "youtube" && "youtube") as string)
                  }
                  className="h-8 text-white"
                >
                  {item?.media === "facebook" && <FaFacebook />}
                  {item?.media === "instagram" && <FaInstagram />}
                  {item?.media === "twitter" && <FaTwitter />}
                  {item?.media === "linkedin" && <FaLinkedin />}
                  {item?.media === "youtube" && <FaYoutube />}
                </a>
              ))}
          </div>
        </div>

        <div className="flex justify-around space-x-20">
          <div className="flex flex-col space-y-3 text-white">
            {menuItems &&
              menuItems.map((item) =>
                item.slug && item.slug.startsWith("/#") ? (
                  <a
                    href={item._type === "home" ? "/" : `${item.slug}`}
                    key={item._id}
                    className="hover:text-brightRed"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={item._type === "home" ? "/" : `${item.slug}`}
                    key={item._id}
                    className="hover:text-brightRed"
                  >
                    {item.title}
                  </Link>
                )
              )}
          </div>
          <div className="flex flex-col space-y-3 text-white">
            {menuItemsTwo &&
              menuItemsTwo.map((item) =>
                item.slug && item.slug.startsWith("/#") ? (
                  <a
                    href={item._type === "home" ? "/" : `${item.slug}`}
                    key={item._id}
                    className="hover:text-brightRed"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={item._type === "home" ? "/" : `${item.slug}`}
                    key={item._id}
                    className="hover:text-brightRed"
                  >
                    {item.title}
                  </Link>
                )
              )}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex justify-center flex-col md:flex-row">
              <input
                type="text"
                className="px-4 py-2 md:py-0 mb-4 md:mb-0 rounded focus:outline-none"
                placeholder="Join our newsletter"
              />
              <button className="px-6 py-2 text-white rounded md:ml-2  bg-brightRed hover:bg-brightRedLight focus:outline-none">
                {btnText && btnText}
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            {copyright && copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
