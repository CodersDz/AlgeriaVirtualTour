const size = {
  mobile: "600px",
  maxTablet: "1023px",
  laptop: "1024px",
  desktop: "1680px",
};
const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile})`,
  maxTablet: `(max-width: ${size.maxTablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
export default device;
