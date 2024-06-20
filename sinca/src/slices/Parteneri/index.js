import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/Carousel"), { ssr: false });

/**
 * @typedef {import("@prismicio/client").Content.ParteneriSlice} ParteneriSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ParteneriSlice>} ParteneriProps
 * @param {ParteneriProps}
 */
const Parteneri = ({ slice }) => {
  const items = slice.items;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-14 lg:py-24 px-8 lg:px-0"
    >
      <div className="max-w-screen-xl m-auto text-center">
        <div class="m-auto max-w-6xl sm:py-8">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 flex flex-col">
            {isFilled.richText(slice.primary.title) && (<div class="md:text-5xl text-2xl text-left uppercase font-black">
              <PrismicText field={slice.primary.title} />
              </div>)}
       
              {isFilled.richText(slice.primary.text) && (<div class="text-xl text-left mt-4">
              <PrismicRichText field={slice.primary.text} />
              </div> )}
              <div class="my-5 h-16">
                <div
                  class="shadow-md font-medium py-2 px-4 text-dark
               cursor-pointer bg-brand-brown text-brand-light hover:bg-brand-light hover:text-brand-brown rounded text-lg text-center w-48"
                >
                  Join us now
                </div>
              </div>
            </div>
            <div class="flex md:justify-end w-full md:w-1/2 mt-5 mb-5 sm:mb-0 sm:-mt-5 relative"> 
              <div class="shadow-2xl max-w-md z-10 rounded-full ml-4 relative"> 
                {isFilled.richText(slice.primary.review) && (
                  <div class="text-md p-10 bg-white text-left relative"> 
                    <svg
                      className="absolute left-2 top-2 text-brand-darker w-8 h-8"
                      height="48"
                      width="48"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M21.66145,33.81676c0,4.29661-3.96109,8.22346-8.91304,8.22346C4.56585,42.04022,1,35.98671,1,27.90615 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916C14.10766,12.9954,8.88433,17.58691,8.14413,25.28492h2.89106 c3.09587,0,6.31198,0.4991,8.45903,2.72402C21.02498,29.59761,21.66145,31.62025,21.66145,33.81676z M47,33.81676 c0,4.29661-3.96109,8.22346-8.91304,8.22346c-8.18256,0-11.74842-6.05352-11.74842-14.13408 c0-9.27484,9.34862-18.21943,17.83035-21.94637l2.26574,3.64916c-6.98843,3.38646-12.21176,7.97797-12.95195,15.67598 c3.15316,0,5.76908-0.11425,8.09925,0.71955C45.21084,27.30299,47,30.10812,47,33.81676z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <PrismicRichText field={slice.primary.review} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 lg:pt-20">
          <Carousel items={items} />
        </div>
      </div>
    </section>
  );
};

export default Parteneri;
