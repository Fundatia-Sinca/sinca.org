"use client";
import React, { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

export function Navigation({ navigation }) {
  const [isMenuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!isMenuActive);
  };

  const mainLinks = navigation.data.slices.slice(0, -2);
  const specialLinks = navigation.data.slices.slice(-2);

  return (
    <>
      <button
        className="lg:hidden font-medium text-slate-700"
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
      <nav className="hidden lg:block">
        <ul className="flex flex-wrap gap-6 md:gap-10">
          {mainLinks.map((slice) => (
            <li
              key={prismic.asText(slice.primary.name)}
              className="font-medium text-brand-darker  uppercase relative group"
            >
              <PrismicNextLink field={slice.primary.link} className="hover:text-yellow-400">
                <PrismicText field={slice.primary.name} />
              </PrismicNextLink>
              {slice.items.length > 0 && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 rounded hidden space-y-5 p-5 bg-white shadow-lg group-hover:block">
                  {slice.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <PrismicNextLink field={item.child_link} className="hover:text-yellow-400">
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
      <ul className="hidden lg:flex flex-wrap gap-6 md:gap-10 ml-auto uppercase">
        {specialLinks.map((slice) => (
          <li key={prismic.asText(slice.primary.name)} className="font-medium">
            <PrismicNextLink
              className={
                prismic.asText(slice.primary.name) === "Donează"
                  ? "py-3 px-5 bg-yellow-400 text-brand-darker hover:bg-brand-darker hover:text-white"
                  : "text-brand-darker hover:text-yellow-400"
              }
              field={slice.primary.link}
            >
              <PrismicText field={slice.primary.name} />
            </PrismicNextLink>
          </li>
        ))}
      </ul>
      {isMenuActive && (
        <nav className="w-full pt-4">
          <ul className="flex flex-col w-full">
            {navigation.data.slices.map((slice) => (
              <li
                onClick={handleMenuClick}
                key={prismic.asText(slice.primary.name)}
                className="font-medium py-4 border-b border-border-brand last:border-none last:pb-0 text-slate-700 hover:text-slate-800"
              >
                <PrismicNextLink field={slice.primary.link}>
                  <PrismicText field={slice.primary.name} />
                </PrismicNextLink>
                {slice.items.length > 0 && (
                  <ul className="ms-5 mt-2 space-y-4">
                    {slice.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <PrismicNextLink field={item.child_link}>
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
