import React, { useState } from "react";

import { ViewContainer } from "#commons/View";
import InitialOnBoarding from "./InitialOnBoarding";
import StepperOnBoarding from "./StepperOnBoarding";
import Images from "#images";

const lastPageIndex = 4;
const pageData = [
  {
    heading: "Receive",
    description:
      "Receive crypto by scanning or sharing your unique QR code or address",
    image: Images.receive,
  },
  {
    heading: "Send",
    description:
      "Send crypto in a few taps by scanning a QR code or pasting an address",
    image: Images.send,
  },
  {
    heading: "Exchange",
    description:
      "Instantly swap your crypto 75+ other assets securely from your wallet",
    image: Images.exchange,
  },
];

const OnBoarding = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const openNextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const skipToLastPage = () => {
    setPageIndex(lastPageIndex);
  };
  return (
    <ViewContainer>
      {pageIndex === 0 ? (
        <InitialOnBoarding
          openNextPage={openNextPage}
          skipToLastPage={skipToLastPage}
        />
      ) : null}
      {pageIndex >= 1 && pageIndex < 4 ? (
        <StepperOnBoarding
          data={pageData[pageIndex - 1]}
          openNextPage={openNextPage}
          skipToLastPage={skipToLastPage}
        />
      ) : null}
    </ViewContainer>
  );
};

export default OnBoarding;
