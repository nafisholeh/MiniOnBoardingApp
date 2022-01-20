import { View } from "react-native";
import styled from "shakl";

import { isTablet } from "#utils/screen";

export const ViewContainer = styled(View)({
  flex: 1,
  justifyContent: "flex-end",
  resizeMode: "stretch",
});

export const ViewContainerTop = styled(View)({
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
});

export const ViewContentContainer = styled(View)({
  flex: 1,
  width: "97%",
  marginVertical: "10%",
  paddingVertical: "4%",
  alignItems: "center",
});

export const ViewCenter = styled(View)({
  alignItems: "center",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  right: 0,
}).attrs((props) => ({
  top: props.top,
  bottom: props.bottom,
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
  bottom: "5%",
  left: 0,
  right: 0,
  alignItems: "center",
});

export const ViewInsideFooter = ViewInBottom.extend({
  paddingHorizontal: isTablet() ? "15%" : "5%",
  height: "30%",
  justifyContent: "space-between",
});

export const ViewHorizontal = styled(View)({
  flexDirection: "row",
  alignItems: "center",
});
