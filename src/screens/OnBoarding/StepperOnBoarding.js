import React from "react";
import { View } from "react-native";
import { func, string, shape, bool, oneOfType, number } from "prop-types";

import {
  LinearGradientFullBackground,
  ImageFitContainer,
} from "#commons/Image";
import { ViewHorizontal, ViewInsideFooter, ViewCenter } from "#commons/View";
import {
  Heading1,
  Heading2,
  TextTouchableOpacity,
  TextSmallTouchableOpacity,
  TextSmallButton,
} from "#commons/Text";
import { OnBoardingFooter, StepIndicator, PrimaryButton } from "#components";
import { verticalScale } from "#utils/screen";

const Heading2Transparent = Heading2.extend({ opacity: 0.5 });
const TextSmallTouchableTransparent = TextSmallTouchableOpacity.extend({
  opacity: 0.5,
});
const TextSmallInvisible = TextSmallButton.extend({
  opacity: 0,
});
const ViewHorizontalStretch = ViewHorizontal.extend({
  width: "92%",
  justifyContent: "space-between",
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
      <OnBoardingFooter />
      <ViewCenter top="6%" bottom="30%">
        {image ? <ImageFitContainer source={image} /> : null}
      </ViewCenter>
      <ViewInsideFooter>
        <View>
          <Heading1>{heading}</Heading1>
          <Heading2Transparent>{description}</Heading2Transparent>
        </View>
        {useTwoStackButtons ? (
          <View>
            <PrimaryButton
              onPress={openUserPage}
              title="GET STARTED"
            ></PrimaryButton>
            <PrimaryButton
              onPress={() => {}}
              marginTop={verticalScale(8)}
              isSecondary
              title="I already have a wallet"
            ></PrimaryButton>
          </View>
        ) : (
          <>
            <TextTouchableOpacity onPress={openNextPage}>
              Next
            </TextTouchableOpacity>
            <ViewHorizontalStretch>
              <TextSmallInvisible>SKIP</TextSmallInvisible>
              <StepIndicator activeIndex={currentPageIndex} stepTotal={4} />
              <TextSmallTouchableTransparent onPress={skipToLastPage}>
                SKIP
              </TextSmallTouchableTransparent>
            </ViewHorizontalStretch>
          </>
        )}
      </ViewInsideFooter>
    </>
  );
};

StepperOnBoarding.propTypes = {
  currentPageIndex: number,
  openNextPage: func.isRequired,
  skipToLastPage: func.isRequired,
  openUserPage: func.isRequired,
  data: shape({
    heading: string,
    description: string,
    image: oneOfType([string, number]),
  }),
  useTwoStackButtons: bool,
};

StepperOnBoarding.defaultProps = {
  currentPageIndex: 0,
  useTwoStackButtons: false,
};

export default StepperOnBoarding;
