import React from "react";
import { View } from "react-native";
import styled from "shakl";
import { number } from "prop-types";

import { ViewHorizontal } from "#commons/View";
import { moderateScale } from "#utils/screen";
import Colors from "#constants/colors";

const NormalIndicator = styled(View)({
  width: moderateScale(8),
  height: moderateScale(8),
  borderRadius: moderateScale(4),
  backgroundColor: Colors.WHITE,
  opacity: 0.2,
});

const ActiveIndicator = styled(View)({
  width: moderateScale(10),
  height: moderateScale(10),
  borderRadius: moderateScale(5),
  backgroundColor: Colors.WHITE,
});

const ViewWrapIndicators = ViewHorizontal.extend({
  width: "27%",
  justifyContent: "space-around",
});

const StepIndicator = ({ stepTotal, activeIndex }) => {
  return (
    <ViewWrapIndicators>
      {[...Array(stepTotal)].map((_, index) =>
        index === activeIndex ? (
          <ActiveIndicator key={index}></ActiveIndicator>
        ) : (
          <NormalIndicator key={index}></NormalIndicator>
        )
      )}
    </ViewWrapIndicators>
  );
};

StepIndicator.propTypes = {
  activeIndex: number.isRequired,
  stepTotal: number.isRequired,
};

StepIndicator.defaultProps = {
  activeIndex: 0,
  stepTotal: 3,
};

export default StepIndicator;
