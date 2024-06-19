/**
 * @typedef {import("@prismicio/client").Content.LocationStatsSlice} LocationStatsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LocationStatsSlice>} LocationStatsProps
 * @param {LocationStatsProps}
 */
const LocationStats = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for location_stats (variation: {slice.variation})
      Slices
    </section>
  );
};

export default LocationStats;
