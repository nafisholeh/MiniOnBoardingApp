import React from "react";
import { View } from "react-native";
import { func, string } from "prop-types";
import FlexImage from "react-native-flex-image";

import { LinearGradientFullBackground } from "#commons/Image";
import {
  ViewEnd,
  ViewHorizontal,
  ViewInBottomWithSpacing,
  ViewCenter,
} from "#commons/View";
import {
  Heading1,
  Heading2,
  TextTouchableOpacity,
  TextSmallTouchableOpacity,
  TextSmallButton,
} from "#commons/Text";
import { OnBoardingFooter, StepIndicator } from "#components";
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

const StepperOnBoarding = ({ data, openNextPage, skipToLastPage }) => {
  const { heading, description, image } = data;
  return (
    <>
      <LinearGradientFullBackground />
      <ViewEnd>
        <View>
          <OnBoardingFooter />
        </View>
      </ViewEnd>
      <ViewCenter top="6%">
        {image ? (
          <FlexImage
            source={image}
            style={{ width: "100%", height: moderateScale(550) }}
          ></FlexImage>
        ) : null}
      </ViewCenter>
      <ViewInBottomWithSpacing>
        <Heading1>{heading}</Heading1>
        <Heading2Transparent>{description}</Heading2Transparent>
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
  data: {
    heading: string,
    description: string,
    image: string,
  },
};

export default StepperOnBoarding;
