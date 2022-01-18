import { Text } from "react-native";
import styled from "shakl";

import { WHITE } from "#constants/colors";
import { moderateScale } from "#utils/screen";

export const Heading1 = styled(Text)({
  textAlign: "center",
  fontWeight: "300",
  fontSize: 32,
  color: WHITE,
  marginVertical: moderateScale(10),
});
