import { View } from "react-native";
import styled from "shakl";

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

export const ViewInBottom = styled(View)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
});
