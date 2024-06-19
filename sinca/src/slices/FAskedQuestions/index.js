import { PrismicRichText, PrismicLink } from '@prismicio/react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import PrismicRichText
const DynamicPrismicRichText = dynamic(() => import('@prismicio/react').then(mod => mod.PrismicRichText), {
  ssr: false,
});

/**
 * @typedef {import("@prismicio/client").Content.FAskedQuestionsSlice} FAskedQuestionsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FAskedQuestionsSlice>} FAskedQuestionsProps
 * @param {FAskedQuestionsProps}
 */
const FAskedQuestions = ({ slice }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="relative w-full bg-white px-6 pt-10 pb-8 mb-10 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10"
      >
        <div className="relative mx-auto px-5">
          <div className="absolute top-5 right-5 hidden sm:block">
            <PrismicLink
              field={slice.primary.contact_link}
              className="py-3 px-5 bg-brand-dark text-white hover:bg-brand-darker inline-block rounded-md"
            >
              Contact Us
            </PrismicLink>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
              <DynamicPrismicRichText field={slice.primary.title} />
            </h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">
              <DynamicPrismicRichText field={slice.primary.description} />
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            {slice.items.map((item, i) => (
              <div key={i} className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>
                      <DynamicPrismicRichText field={item.question_title} />
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    <DynamicPrismicRichText field={item.question_answer} />
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default FAskedQuestions;
