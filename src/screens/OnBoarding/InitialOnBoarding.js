import React from "react";
import { View } from "react-native";
import { func } from "prop-types";

import { ViewCenter, ViewInsideFooter } from "#commons/View";
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
      <OnBoardingFooter />
      <ViewCenter bottom="36%">
        <OnBoardingLogoBackground />
      </ViewCenter>
      <ViewCenter bottom="55%">
        <ExodusLogo />
      </ViewCenter>
      <ViewCenter bottom="48%">
        <ExodusTitle />
      </ViewCenter>
      <ViewInsideFooter>
        <Heading1>Secure & Easy to Use Crypto Wallet</Heading1>
        <View>
          <PrimaryButton
            onPress={openNextPage}
            title="GET STARTED"
          ></PrimaryButton>
          <PrimaryButton
            onPress={skipToLastPage}
            marginTop={moderateScale(8)}
            isSecondary
            title="I already have a wallet"
          ></PrimaryButton>
        </View>
      </ViewInsideFooter>
    </>
  );
};

InitialOnBoarding.propTypes = {
  openNextPage: func.isRequired,
  skipToLastPage: func.isRequired,
};

export default InitialOnBoarding;
