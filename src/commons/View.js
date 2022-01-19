import { View } from "react-native";
import styled from "shakl";

import { moderateScale } from "#utils/screen";

export const ViewContainer = styled(View)({
  flex: 1,
  justifyContent: "flex-end",
  resizeMode: "stretch",
});

export const ViewCenter = styled(View)({
  alignItems: "center",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  right: 0,
}).attrs((props) => ({
  top: props.top ?? 0,
}));

export const ViewEnd = styled(View)({
  flex: 1,
  justifyContent: "flex-end",
});

export const ViewInTop = styled(View)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  alignItems: "center",
});

export const ViewInTopWithSpacing = ViewInTop.extend({
  top: "12.5%",
  paddingHorizontal: "5%",
});

export const ViewInBottom = styled(View)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  alignItems: "center",
});

export const ViewInBottomWithSpacing = ViewInBottom.extend({
  marginBottom: moderateScale(40),
  paddingHorizontal: "5%",
});

export const ViewHorizontal = styled(View)({
  flexDirection: "row",
  alignItems: "center",
});
