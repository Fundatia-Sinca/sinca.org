/**
 * @typedef {import("@prismicio/client").Content.EchipaSlice} EchipaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EchipaSlice>} EchipaProps
 * @param {EchipaProps}
 */
const Echipa = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for echipa (variation: {slice.variation}) Slices
    </section>
  );
};

export default Echipa;
