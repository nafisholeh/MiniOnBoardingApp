import React from "react";
import { View, ImageBackground } from "react-native";

import {
  OnBoardingFooter,
  OnBoardingLogoBackground,
  ExodusLogo,
  ExodusTitle,
} from "#components";
import Images from "#images";

import styles from "./Onboarding.style";

const OnBoarding = () => {
  return (
    <ImageBackground
      source={Images.mask}
      imageStyle={styles.maskImages}
      style={styles.mask}
    >
      <View style={styles.container}>
        <View>
          <OnBoardingFooter />
        </View>
        <View style={styles.logoBackground}>
          <OnBoardingLogoBackground />
        </View>
        <View style={styles.logo}>
          <ExodusLogo />
        </View>
        <View style={styles.exodusTitle}>
          <ExodusTitle />
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnBoarding;
