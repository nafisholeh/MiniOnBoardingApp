import React from "react";
import { View, ImageBackground } from "react-native";

import { ViewCenter, ViewEnd, ViewInBottomWithSpacing } from "#commons/View";
import { Heading1 } from "#commons/Text";
import {
  OnBoardingFooter,
  OnBoardingLogoBackground,
  ExodusLogo,
  ExodusTitle,
  OnBoardingButton,
} from "#components";
import Images from "#images";
import { moderateScale } from "#utils/screen";

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
      <ViewInBottomWithSpacing>
        <Heading1>Secure & Easy to Use Crypto Wallet</Heading1>
        <OnBoardingButton
          marginTop={moderateScale(17)}
          title="GET STARTED"
        ></OnBoardingButton>
        <OnBoardingButton
          marginTop={moderateScale(8)}
          isSecondary
          title="I already have a wallet"
        ></OnBoardingButton>
      </ViewInBottomWithSpacing>
    </ImageBackground>
  );
};

export default OnBoarding;
