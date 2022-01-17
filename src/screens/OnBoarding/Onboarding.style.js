import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: "39%",
  },
  logoBackground: {
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: "33%",
  },
  mask: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "stretch",
  },
  maskImages: {
    height: null,
    resizeMode: "center",
    width: null,
  },
});
