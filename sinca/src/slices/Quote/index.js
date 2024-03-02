import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";

const Quote = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-brand">
      {prismic.isFilled.richText(slice.primary.quote) && (
        <figure className="grid gap-6">
          <blockquote>
            <p
              className={clsx(
                "text-4xl text-slate-800 font-medium leading-tight md:text-5xl relative md:leading-tight",
                !prismic.isFilled.keyText(slice.primary.source) &&
                  "text-center",
              )}
            >
              <svg className="absolute left-0 lg:-left-14 -top-8 lg:top-0 text-brand-brown w-8 h-8 lg:w-12 lg:h-12" height="48" width="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g><path d="M21.66145,33.81676c0,4.29661-3.96109,8.22346-8.91304,8.22346C4.56585,42.04022,1,35.98671,1,27.90615 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916C14.10766,12.9954,8.88433,17.58691,8.14413,25.28492h2.89106 c3.09587,0,6.31198,0.4991,8.45903,2.72402C21.02498,29.59761,21.66145,31.62025,21.66145,33.81676z M47,33.81676 c0,4.29661-3.96109,8.22346-8.91304,8.22346c-8.18256,0-11.74842-6.05352-11.74842-14.13408 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916c-6.98843,3.38646-12.21176,7.97797-12.95195,15.67598 c3.15316,0,5.76908-0.11425,8.09925,0.71955C45.21084,27.30299,47,30.10812,47,33.81676z" fill="currentColor"></path></g></svg>
              <PrismicText field={slice.primary.quote} />
            </p>
          </blockquote>
          {prismic.isFilled.keyText(slice.primary.source) && (
            <figcaption className="text-right">
              &mdash; {slice.primary.source}
            </figcaption>
          )}
        </figure>
      )}
    </Bounded>
  );
};

export default Quote;
