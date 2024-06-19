import clsx from "clsx";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";

const Text = ({ slice }) => {
  return (
    <Bounded as="section" className="leading-relaxed">
      <div
        className={clsx(
          slice.variation === "twoColumns" && "md:columns-2 md:gap-6"
        )}
      >
        <section class=" antialiased">
          <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div class="mx-auto max-w-5xl">
              <h2 class="text-xl font-semibold text-brand-darker  sm:text-2xl">
                <PrismicRichText field={slice.primary.title} />
              </h2>
              <div class="my-8 xl:mb-16 xl:mt-12">
                <PrismicNextImage
                  field={slice.primary.main_photo}
                  className="w-full rounded-lg"
                />
              </div>
              <div class="mx-auto max-w-2xl text-xl lg:text-3xl space-y-6 font-semibold text-brand-darker ">
                <PrismicRichText field={slice.primary.paragraph_title} />
                <ul className="list-outside list-disc text-xl space-y-4 pl-4  font-normal text-brand-dark ">
                  {slice.items.map((item, index) => (
                    <li key={index}>
                      <PrismicRichText field={item.paragraph} />
                    </li>
                  ))}
                </ul>
              </div>
              <div class="my-6 md:my-12">
                <iframe
                  class="h-[260px] md:h-[540px] w-full rounded-lg"
                  src="https://www.youtube.com/embed/KaLxCiilHns"
                  title="Flowbite Crash Course in 20 mins | Introduction to UI components using Tailwind CSS"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="mx-auto max-w-3xl space-y-6 text-xl font-normal text-brand-dark ">
                <PrismicRichText field={slice.primary.contact} />
                <PrismicRichText field={slice.primary.ceo} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Bounded>
  );
};

export default Text;
