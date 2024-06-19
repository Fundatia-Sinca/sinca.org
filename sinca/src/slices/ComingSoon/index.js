import { PrismicRichText } from "@prismicio/react";
/**
 * @typedef {import("@prismicio/client").Content.ComingSoonSlice} ComingSoonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ComingSoonSlice>} ComingSoonProps
 * @param {ComingSoonProps}
 */
const ComingSoon = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex items-center justify-center text-center mb-36 text-2xl text-brand-dark font-bold">
        {/* This page is still under construction. Check back soon! */}
        <PrismicRichText field={slice.primary.title} />
      </div>
    </section>
  );
};

export default ComingSoon;
