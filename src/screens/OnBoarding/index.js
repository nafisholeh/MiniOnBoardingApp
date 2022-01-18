import React, { useState } from "react";

import { ViewContainer } from "#commons/View";
import InitialOnBoarding from "./InitialOnBoarding";
import StepperOnBoarding from "./StepperOnBoarding";

const OnBoarding = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const openNextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const skipToLastPage = () => {};
  return (
    <ViewContainer>
      {pageIndex === 0 ? (
        <InitialOnBoarding
          openNextPage={openNextPage}
          skipToLastPage={skipToLastPage}
        />
      ) : null}
      {pageIndex === 1 ? (
        <StepperOnBoarding
          openNextPage={openNextPage}
          skipToLastPage={skipToLastPage}
        />
      ) : null}
    </ViewContainer>
  );
};

export default OnBoarding;
