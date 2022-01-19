import React from "react";
import { View } from "react-native";
import { func } from "prop-types";

import { ViewCenter, ViewEnd, ViewInBottomWithSpacing } from "#commons/View";
import { Heading1 } from "#commons/Text";
import { ImageFullBackground } from "#commons/Image";
import {
  OnBoardingFooter,
  OnBoardingLogoBackground,
  ExodusLogo,
  ExodusTitle,
  PrimaryButton,
} from "#components";
import Images from "#images";
import { moderateScale } from "#utils/screen";

const InitialOnBoarding = ({ openNextPage, skipToLastPage }) => {
  return (
    <>
      <ImageFullBackground source={Images.mask} />
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
        <PrimaryButton
          onPress={openNextPage}
          marginTop={moderateScale(17)}
          title="GET STARTED"
        ></PrimaryButton>
        <PrimaryButton
          onPress={skipToLastPage}
          marginTop={moderateScale(8)}
          isSecondary
          title="I already have a wallet"
        ></PrimaryButton>
      </ViewInBottomWithSpacing>
    </>
  );
};

InitialOnBoarding.propTypes = {
  openNextPage: func.isRequired,
  skipToLastPage: func.isRequired,
};

export default InitialOnBoarding;
