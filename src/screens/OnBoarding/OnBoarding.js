import React from "react";
import { ImageBackground } from "react-native";

import { OnBoardingFooter } from "#components";
import Images from "#images";

import styles from "./Onboarding.style";

const OnBoarding = () => {
  return (
    <ImageBackground
      source={Images.mask}
      imageStyle={styles.maskImages}
      style={styles.mask}
    >
      <OnBoardingFooter />
    </ImageBackground>
  );
};

export default OnBoarding;
