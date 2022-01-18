import React from "react";
import { TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { string, number, bool, func } from "prop-types";

import { TextInButton } from "#commons/Text";
import Colors from "#constants/colors";
import { moderateScale } from "#utils/screen";

const OnBoardingButton = ({ title, onPress, marginTop, isSecondary }) => {
  return (
    <TouchableHighlight
      style={{
        marginTop: marginTop ?? 0,
        borderRadius: moderateScale(27),
      }}
      onPress={onPress}
      underlayColor={Colors.MIDNIGHT}
    >
      <LinearGradient
        colors={[Colors.MIDNIGHT_SMOOTH, Colors.MIDNIGHT]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderRadius: moderateScale(27),
          height: moderateScale(50),
          width: moderateScale(260),
          justifyContent: "center",
          opacity: isSecondary ? 0.3 : 1,
        }}
      >
        <TextInButton>{title}</TextInButton>
      </LinearGradient>
    </TouchableHighlight>
  );
};

OnBoardingButton.propTypes = {
  title: string,
  marginTop: number,
  isSecondary: bool,
  onPress: func.isRequired,
};

export default OnBoardingButton;
