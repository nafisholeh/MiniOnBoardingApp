import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "shakl";
import FlexImage from "react-native-flex-image";

import Colors from "#constants/colors";

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
  colors: [Colors.BLUE_ZODIAC, Colors.MIDNIGHT],
  start: { x: -0.75, y: 0.5 },
  end: { x: 0, y: 0.7 },
  locations: [0.01, 0.99],
});

export const ImageFitContainer = styled(FlexImage)({
  width: "100%",
});
