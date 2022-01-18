import React, { useState } from "react";

import { ViewContainer } from "#commons/View";
import InitialOnBoarding from "./InitialOnBoarding";

const OnBoarding = () => {
  const [pageIndex, setPageIndex] = useState(0);
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
    </ViewContainer>
  );
};

export default OnBoarding;
