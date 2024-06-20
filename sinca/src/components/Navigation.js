"use client";
import React, { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

export function Navigation({ navigation }) {
  const [isMenuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!isMenuActive);
    setActiveParent(null);
  };

  const mainLinks = navigation.data.slices.slice(0, -2);
  const specialLinks = navigation.data.slices.slice(-2);

  const [activeParent, setActiveParent] = useState(null); 

  const toggleChildLinks = (index) => {
    if (activeParent === index) {
      setActiveParent(null); 
    } else {
      setActiveParent(index); 
    }
  };

  return (
    <>
      <button
        className="custom-lg:hidden font-medium text-slate-700"
        onClick={handleMenuClick}
      >
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect
            y="20"
            width="80"
            height="10"
            rx="10"
            ry="10"
            fill="#303f55"
          ></rect>
          <rect
            y="40"
            width="80"
            height="10"
            rx="5"
            ry="5"
            fill="#61728b"
          ></rect>
          <rect
            y="60"
            width="80"
            height="10"
            rx="15"
            ry="5"
            fill="#303f55"
          ></rect>
        </svg>
      </button>
      <nav className="hidden custom-lg:block">
        <ul className="flex flex-wrap gap-6 md:gap-10">
          {mainLinks.map((slice) => (
            <li
              key={prismic.asText(slice.primary.name)}
              className="font-medium text-brand-dark  uppercase relative group"
            >
              <PrismicNextLink
                field={slice.primary.link}
                className="hover:text-brand-brown"
              >
                <PrismicText field={slice.primary.name} />
              </PrismicNextLink>
              {slice.items.length > 0 && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 text-center rounded hidden space-y-5 p-5 pt-8 bg-white shadow-lg  group-hover:block whitespace-nowrap">
                  {slice.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <PrismicNextLink
                        field={item.child_link}
                        className="hover:text-brand-brown" 
                      >
                        <PrismicText field={item.child_name} />
                      </PrismicNextLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <ul className="hidden custom-lg:flex flex-wrap gap-6 md:gap-10 ml-auto uppercase">
        {specialLinks.map((slice) => (
          <li key={prismic.asText(slice.primary.name)} className="font-medium">
            <PrismicNextLink
              className={
                prismic.asText(slice.primary.name) === "Donează"
                  ? "py-3 px-5 rounded  bg-brand-brown text-brand-light hover:bg-brand-light hover:text-brand-brown"
                  : "text-brand-dark hover:text-brand-brown"
              }
              field={slice.primary.link}
            >
              <PrismicText field={slice.primary.name} />
            </PrismicNextLink>
          </li>
        ))}
      </ul>
      {isMenuActive && (
        <nav className="custom-lg:hidden w-full pt-4 pb-4">
          <ul className="flex flex-col w-full">
            {navigation.data.slices.map((slice, index) => (
              <li
                key={prismic.asText(slice.primary.name)}
                className="font-medium py-4 border-b border-border-brand last:border-none last:pb-0 text-brand-dark  relative"
              >
                <div
                  onClick={() => toggleChildLinks(index)} 
                  className="flex items-center justify-between cursor-pointer"
                >
                  <PrismicText field={slice.primary.name} />
                  {slice.items.length > 0 && (
                    <svg
                      className={`w-4 h-4 ml-2 transform ${
                        activeParent === index ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 7.414l3.293 3.293a1 1 0 01-1.414 1.414l-2.586-2.586-2.586 2.586a1 1 0 01-1.414-1.414L10 7.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                {activeParent === index && slice.items.length > 0 && (
                  <ul className="ms-5 mt-4 space-y-4">
                    {" "}
                    <PrismicNextLink field={slice.primary.link}  onClick={handleMenuClick}>
                      <PrismicText field={slice.primary.name} />
                    </PrismicNextLink>
                    {slice.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <PrismicNextLink field={item.child_link} onClick={handleMenuClick}>
                          <PrismicText field={item.child_name} />
                        </PrismicNextLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
