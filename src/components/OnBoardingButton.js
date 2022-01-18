import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { string, number, bool } from "prop-types";

import { ButtonText } from "#commons/Text";
import Colors from "#constants/colors";
import { moderateScale } from "#utils/screen";

const Button = ({ title, marginTop, isSecondary }) => {
  return (
    <LinearGradient
      colors={[Colors.MIDNIGHT_SMOOTH, Colors.MIDNIGHT]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        borderRadius: moderateScale(27),
        height: moderateScale(50),
        width: moderateScale(260),
        marginTop: marginTop ?? 0,
        justifyContent: "center",
        opacity: isSecondary ? 0.3 : 1,
      }}
    >
      <ButtonText>{title}</ButtonText>
    </LinearGradient>
  );
};

Button.propTypes = {
  title: string,
  marginTop: number,
  isSecondary: bool,
};

export default Button;
