import React from "react";
import { View, ImageBackground } from "react-native";

import { ViewCenter, ViewEnd, ViewInBottom } from "#commons/View";
import { Heading1 } from "#commons/Text";
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
      <ViewEnd>
        <View>
          <OnBoardingFooter />
        </View>
        <ViewCenter top="33%">
          <OnBoardingLogoBackground />
        </ViewCenter>
        <ViewCenter top="39%">
          <ExodusLogo />
        </ViewCenter>
        <ViewCenter top="50%">
          <ExodusTitle />
        </ViewCenter>
      </ViewEnd>
      <ViewInBottom>
        <Heading1>Secure & Easy to Use Crypto Wallet</Heading1>
      </ViewInBottom>
    </ImageBackground>
  );
};

export default OnBoarding;
