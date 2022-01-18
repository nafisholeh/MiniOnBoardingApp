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

export const Heading2 = styled(Text)({
  textAlign: "center",
  fontWeight: "400",
  fontSize: moderateScale(17, 0.25),
  color: Colors.WHITE,
});

const TextButton = styled(Text)({
  textAlign: "center",
  fontWeight: "400",
  fontSize: moderateScale(24, 0.25),
  color: Colors.WHITE,
});

export const TextTouchableOpacity = styled.Touchable({}).withChild(TextButton);

export const TextSmallButton = styled(Text)({
  textAlign: "center",
  fontWeight: "400",
  fontSize: moderateScale(13, 0.25),
  color: Colors.WHITE,
});

export const TextSmallTouchableOpacity = styled
  .Touchable({})
  .withChild(TextSmallButton);

export const TextInButton = styled(Text)({
  textAlign: "center",
  fontWeight: "500",
  fontSize: moderateScale(13, 0.25),
  color: Colors.WHITE,
});
