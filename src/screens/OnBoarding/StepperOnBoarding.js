import React from "react";
import { View } from "react-native";
import { func } from "prop-types";

import { LinearGradientFullBackground } from "#commons/Image";
import { ViewEnd, ViewInBottomWithSpacing } from "#commons/View";
import { Heading1, Heading2, TextTouchableOpacity } from "#commons/Text";
import { OnBoardingFooter, StepIndicator } from "#components";
import Colors from "#constants/colors";
import { moderateScale } from "#utils/screen";

const Heading2Transparent = Heading2.extend({ opacity: 0.5 });
const TextTouchableOpacityBottom = TextTouchableOpacity.extend({
  marginTop: moderateScale(36),
  marginBottom: moderateScale(39),
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
        <StepIndicator stepTotal={4} />
      </ViewInBottomWithSpacing>
    </>
  );
};

StepperOnBoarding.propTypes = {
  openNextPage: func.isRequired,
  skipToLastPage: func.isRequired,
};

export default StepperOnBoarding;
