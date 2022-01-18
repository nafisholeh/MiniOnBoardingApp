import React from "react";
import { View } from "react-native";
import { func } from "prop-types";

import { LinearGradientFullBackground } from "#commons/Image";
import {
  ViewEnd,
  ViewHorizontal,
  ViewInBottomWithSpacing,
} from "#commons/View";
import {
  Heading1,
  Heading2,
  TextTouchableOpacity,
  TextSmallTouchableOpacity,
  TextSmallButton,
} from "#commons/Text";
import { OnBoardingFooter, StepIndicator } from "#components";
import Colors from "#constants/colors";
import { moderateScale } from "#utils/screen";

const Heading2Transparent = Heading2.extend({ opacity: 0.5 });
const TextSmallTouchableTransparent = TextSmallTouchableOpacity.extend({
  opacity: 0.5,
});
const TextSmallInvisible = TextSmallButton.extend({
  opacity: 0,
});
const TextTouchableOpacityBottom = TextTouchableOpacity.extend({
  marginTop: moderateScale(36),
  marginBottom: moderateScale(39),
});
const ViewHorizontalStretch = ViewHorizontal.extend({
  width: "92%",
  justifyContent: "space-between",
});

const StepperOnBoarding = ({ openNextPage, skipToLastPage }) => {
  return (
    <>
      <LinearGradientFullBackground
        colors={[Colors.BLUE_ZODIAC, Colors.MIDNIGHT]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      ></LinearGradientFullBackground>
      <ViewEnd>
        <View>
          <OnBoardingFooter />
        </View>
      </ViewEnd>
      <ViewInBottomWithSpacing>
        <Heading1>Receive</Heading1>
        <Heading2Transparent>
          Receive crypto by scanning or sharing your unique QR code or address
        </Heading2Transparent>
        <TextTouchableOpacityBottom onPress={openNextPage}>
          Next
        </TextTouchableOpacityBottom>
        <ViewHorizontalStretch>
          <TextSmallInvisible>SKIP</TextSmallInvisible>
          <StepIndicator stepTotal={4} />
          <TextSmallTouchableTransparent onPress={skipToLastPage}>
            SKIP
          </TextSmallTouchableTransparent>
        </ViewHorizontalStretch>
      </ViewInBottomWithSpacing>
    </>
  );
};

StepperOnBoarding.propTypes = {
  openNextPage: func.isRequired,
  skipToLastPage: func.isRequired,
};

export default StepperOnBoarding;
