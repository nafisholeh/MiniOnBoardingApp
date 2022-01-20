import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "shakl";
import FlexImage from "react-native-flex-image";
import { SvgXml } from "react-native-svg";

import NUMBERS from "#constants/numbers";
import COLORS from "#constants/colors";
import STRINGS from "#constants/strings";
import { verticalScale, moderateScale } from "#utils/screen";

export const ImageFullBackground = styled(Image)({
  position: "absolute",
  flex: 1,
  height: "100%",
  width: "100%",
});

export const LinearGradientFullBackground = styled(LinearGradient)({
  position: "absolute",
  flex: 1,
  height: "100%",
  width: "100%",
}).attrs({
  colors: [COLORS.BLUE_ZODIAC, COLORS.MIDNIGHT],
  start: { x: -0.75, y: 0.5 },
  end: { x: 0, y: 0.7 },
  locations: [0.01, 0.99],
});

export const LinearGradientCardFullWidth = styled(LinearGradient)({
  width: "90%",
  height: "20%",
  borderRadius: verticalScale(10),
  backgroundColor: COLORS.MIDNIGHT,
  padding: moderateScale(10),
  justifyContent: "center",
}).attrs({
  colors: [COLORS.BLUE_ZODIAC, COLORS.MIDNIGHT],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
  locations: [0.01, 0.99],
});

export const ImageFitContainer = styled(FlexImage)({
  width: "100%",
  height: "100%",
});

export const ImageSVGIcon = styled(SvgXml)({}).attrs((props) => ({
  width: NUMBERS.ICON_SCALE[props.size ?? STRINGS.MEDIUM],
  height: "100%",
}));

export const ImageSVGIconAbsolute = ImageSVGIcon.extend((props) => ({
  position: "absolute",
  top: props.top ?? 0,
  left: props.left ?? 0,
}));
