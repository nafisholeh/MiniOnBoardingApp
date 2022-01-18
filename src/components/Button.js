import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { string, number } from "prop-types";

import { ButtonText } from "#commons/Text";
import Colors from "#constants/colors";
import { moderateScale } from "#utils/screen";

const Button = ({ title, marginTop }) => {
  return (
    <LinearGradient
      colors={[Colors.MIDNIGHT_SMOOTH, Colors.MIDNIGHT]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        paddingVertical: moderateScale(15),
        borderRadius: moderateScale(27),
        width: moderateScale(260),
        marginTop: marginTop ?? 0,
      }}
    >
      <ButtonText>{title}</ButtonText>
    </LinearGradient>
  );
};

Button.propTypes = {
  title: string,
  marginTop: number,
};

export default Button;
