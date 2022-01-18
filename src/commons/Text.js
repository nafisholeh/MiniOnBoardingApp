import { Text } from "react-native";
import styled from "shakl";

import Colors from "#constants/colors";
import { moderateScale } from "#utils/screen";

export const Heading1 = styled(Text)({
  textAlign: "center",
  fontWeight: "300",
  fontSize: moderateScale(32, 0.25),
  color: Colors.WHITE,
  marginVertical: moderateScale(10),
});

export const ButtonText = styled(Text)({
  textAlign: "center",
  fontWeight: "500",
  fontSize: moderateScale(13, 0.25),
  color: Colors.WHITE,
});

export const ButtonSecondaryText = ButtonText.extend({
  fontSize: moderateScale(14, 0.25),
});
