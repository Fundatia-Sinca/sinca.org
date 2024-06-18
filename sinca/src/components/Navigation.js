"use client";
import React, { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

export function Navigation({ navigation }) {
  // State variable to track the menu's active state
  const [isMenuActive, setMenuActive] = useState(false);

  // Function to handle menu click and toggle the active state
  const handleMenuClick = () => {
    setMenuActive(!isMenuActive);
  };

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
          {navigation.data?.links.slice(0, -2).map((item) => (
            <li
              key={prismic.asText(item.label)}
              className="font-medium text-brand-darker hover:text-yellow-400 uppercase"
            >
              <PrismicNextLink field={item.link}>
                <PrismicText field={item.label} />
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="hidden lg:flex flex-wrap gap-6 md:gap-10 ml-auto uppercase">
        {navigation.data?.links.slice(-2).map((item) => (
          <li key={prismic.asText(item.label)} className="font-medium">
            <PrismicNextLink
              className={
                prismic.asText(item.label) == "Doneaza"
                  ? "py-3 px-5 bg-yellow-400 text-brand-darker hover:bg-brand-darker hover:text-white"
                  : "text-brand-darker hover:text-yellow-400"
              }
              field={item.link}
            >
              <PrismicText field={item.label} />
            </PrismicNextLink>
          </li>
        ))}
      </ul>
      {isMenuActive && (
        <nav className="w-full pt-4">
          <ul className="flex flex-col w-full">
            {navigation.data?.links.map((item) => (
              <li
                onClick={handleMenuClick}
                key={prismic.asText(item.label)}
                className="font-medium py-4 border-b border-border-brand last:border-none last:pb-0 text-slate-700 hover:text-slate-800"
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
