export const isTablet = (width, height) => {
  if (!width || !height) return false;
  return height / width <= 1.8;
};
