import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (size) => (width / guidelineBaseWidth) * size;

export const verticalScale = (size) => (height / guidelineBaseHeight) * size;

export const verticalScaleToPercent = (size) => {
  return `${verticalScale(size)}%`;
};

export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const isTablet = () => {
  if (!width || !height) return false;
  return height / width <= 1.6;
};
