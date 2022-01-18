import { Text } from "react-native";
import styled from "shakl";

import Colors from "#constants/colors";
import { moderateScale } from "#utils/screen";

export const Heading1 = styled(Text)({
  textAlign: "center",
  fontWeight: "300",
  fontSize: 32,
  color: Colors.WHITE,
  marginVertical: moderateScale(10),
});

export const ButtonText = styled(Text)({
  textAlign: "center",
  fontWeight: "500",
  fontSize: 13,
  color: Colors.WHITE,
});
