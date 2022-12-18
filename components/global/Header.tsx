"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HeaderPayload, MenuItem } from "types";

interface IProps {
  data: HeaderPayload;
}

const Header = ({ data }: IProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-white lg:bg-transparent w-full top-0 flex items-center justify-between px-2 py-3 z-10">
      <div className="lg:container w-full px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start items-center">
          <Link
            href="/"
            className="text-3xl font-bold leading-relaxed inline-block py-2 whitespace-nowrap text-black hover:text-darkGrayishBlue transition-all"
          >
            {data.logo}
          </Link>
          <button
            className={
              navbarOpen
                ? "open text-black cursor-pointer text-xl leading-none hamburger block px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
                : "text-black cursor-pointer text-xl leading-none hamburger block px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
            }
            type="button"
            onClick={() => setNavbarOpen((prevState) => !prevState)}
            aria-label="Hamburger Menu"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center py-4 lg:bg-transparent lg:py-0" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none m-auto lg:mr-0 transition-all">
            {data.menuItems &&
              data.menuItems.map((item: MenuItem) => (
                <li className="nav-item" key={item._id}>
                  {item.slug && item.slug.startsWith("/#") ? (
                    <a
                      href={item._type === "home" ? "/" : `${item.slug}`}
                      className="px-2 py-2 flex lg:ml-2 m-auto items-center text-base text-base leading-snug text-black hover:text-darkGrayishBlue transition-all"
                    >
                      <span className="lg:ml-2 m-auto">{item.title}</span>
                    </a>
                  ) : (
                    <Link
                      href={item._type === "home" ? "/" : `${item.slug}`}
                      className="px-2 py-2 flex lg:ml-2 m-auto items-center text-base text-base leading-snug text-black hover:text-darkGrayishBlue transition-all"
                    >
                      <span className="lg:ml-2 m-auto">{item.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            {data.buttonItems &&
              data.buttonItems.map((item) => (
                <li className="nav-item" key={item._id}>
                  {item.slug && item.slug.startsWith("/#") ? (
                    <a
                      href={item._type === "home" ? "/" : `${item.slug}`}
                      className="p-3 px-6 pt-2 mt-2 lg:mt-0 lg:ml-4 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight block"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      href={item._type === "home" ? "/" : `${item.slug}`}
                      className="p-3 px-6 pt-2 mt-2 lg:mt-0 lg:ml-4 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight block"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
