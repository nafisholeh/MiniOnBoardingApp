import React from "react";
import { View } from "react-native";
import { func, string, bool, number } from "prop-types";

import {
  LinearGradientFullBackground,
  ImageFitContainer,
} from "#commons/Image";
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
import { OnBoardingFooter, StepIndicator, PrimaryButton } from "#components";
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
const ImageFitCover = ImageFitContainer.extend({
  height: moderateScale(550),
});

const StepperOnBoarding = ({
  currentPageIndex,
  data,
  openNextPage,
  skipToLastPage,
  openUserPage,
  useTwoStackButtons,
}) => {
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
        {image ? <ImageFitCover source={image} /> : null}
      </ViewCenter>
      <ViewInBottomWithSpacing>
        <Heading1>{heading}</Heading1>
        <Heading2Transparent>{description}</Heading2Transparent>
        {useTwoStackButtons ? (
          <>
            <PrimaryButton
              onPress={openUserPage}
              marginTop={moderateScale(17)}
              title="GET STARTED"
            ></PrimaryButton>
            <PrimaryButton
              onPress={openUserPage}
              marginTop={moderateScale(8)}
              isSecondary
              title="I already have a wallet"
            ></PrimaryButton>
          </>
        ) : (
          <>
            <TextTouchableOpacityBottom onPress={openNextPage}>
              Next
            </TextTouchableOpacityBottom>
            <ViewHorizontalStretch>
              <TextSmallInvisible>SKIP</TextSmallInvisible>
              <StepIndicator activeIndex={currentPageIndex} stepTotal={4} />
              <TextSmallTouchableTransparent onPress={skipToLastPage}>
                SKIP
              </TextSmallTouchableTransparent>
            </ViewHorizontalStretch>
          </>
        )}
      </ViewInBottomWithSpacing>
    </>
  );
};

StepperOnBoarding.propTypes = {
  currentPageIndex: number,
  openNextPage: func.isRequired,
  skipToLastPage: func.isRequired,
  openUserPage: func.isRequired,
  data: {
    heading: string,
    description: string,
    image: string,
  },
  useTwoStackButtons: bool,
};

StepperOnBoarding.defaultProps = {
  currentPageIndex: 0,
  useTwoStackButtons: false,
};

export default StepperOnBoarding;
