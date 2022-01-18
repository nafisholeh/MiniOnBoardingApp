import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "shakl";

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
});
