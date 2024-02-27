'use client';
import React, { useState } from 'react';
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
          onClick={handleMenuClick}>
            Menu
        </button>
        <nav className="hidden lg:block">
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.slice(0, -2).map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="font-medium text-slate-700 hover:text-slate-800"
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="hidden lg:flex flex-wrap gap-6 md:gap-10 ml-auto">
        {navigation.data?.links.slice(-2).map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="font-medium"
              >
                <PrismicNextLink 
                  className={prismic.asText(item.label)== 'Doneaza' ? 'py-3 px-5 bg-brand-dark text-white hover:bg-brand-darker' : 'text-slate-700 hover:text-slate-800'} field={item.link}>
                  <PrismicText field={item.label}/>
                </PrismicNextLink>
              </li>
            ))}
        </ul>
        {isMenuActive && <nav className="w-full pt-4">
            <ul className="flex flex-col w-full">
                {navigation.data?.links.map((item) => (
                <li
                    key={prismic.asText(item.label)}
                    className="font-medium py-4 border-b border-border-brand last:border-none last:pb-0 text-slate-700 hover:text-slate-800"
                >
                    <PrismicNextLink field={item.link}>
                        <PrismicText field={item.label} />
                    </PrismicNextLink>
                </li>
                ))}
            </ul>
        </nav>}
    </>
  );
};