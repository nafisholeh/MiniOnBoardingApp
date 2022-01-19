import React from "react";

import {
  ViewInsideFooter,
  ViewContainer,
  ViewInTopWithSpacing,
} from "#commons/View";
import {
  LinearGradientFullBackground,
  ImageSVGIconAbsolute,
} from "#commons/Image";
import { Heading1, Heading2 } from "#commons/Text";
import { PrimaryButton } from "#components";
import { moderateScale } from "#utils/screen";
import Colors from "#constants/colors";
import Images from "#images";
import STRINGS from "#constants/strings";

const ViewInsideFooterSingleChild = ViewInsideFooter.extend({
  justifyContent: "flex-end",
});

const CreateWallet = () => {
  const openDashboard = () => {};
  return (
    <ViewContainer>
      <LinearGradientFullBackground />
      <ViewInTopWithSpacing>
        <Heading1>150+</Heading1>
        <Heading2>Cryptocurrency Assets</Heading2>
      </ViewInTopWithSpacing>
      {/* upper row */}
      <ImageSVGIconAbsolute
        xml={Images.CRYPTO_ETC}
        size={STRINGS.MEDIUM}
        top="-13%"
        left="-10%"
      />
      <ImageSVGIconAbsolute
        xml={Images.CRYPTO_LTC}
        size={STRINGS.MEDIUM}
        top="-13%"
        left="20%"
      />
      <ImageSVGIconAbsolute
        xml={Images.CRYPTO_BCH}
        size={STRINGS.MEDIUM}
        top="-13%"
        left="60%"
      />
      <ImageSVGIconAbsolute
        xml={Images.CRYPTO_LINK}
        size={STRINGS.MEDIUM}
        top="-13%"
        left="90%"
      />
      {/* center row */}
      <ImageSVGIconAbsolute
        xml={Images.CRYPTO_BTC}
        size={STRINGS.LARGE}
        left="35%"
      />
      <ImageSVGIconAbsolute
        xml={Images.CRYPTO_XMR}
        size={STRINGS.MEDIUM}
        left="75%"
      />
      <ImageSVGIconAbsolute
        xml={Images.CRYPTO_USDT}
        size={STRINGS.MEDIUM}
        left="5%"
      />
      {/* lower row */}
      <ImageSVGIconAbsolute
        xml={Images.CRYPTO_XTZ}
        size={STRINGS.MEDIUM}
        top="13%"
        left="-10%"
      />
      <ImageSVGIconAbsolute
        xml={Images.CRYPTO_EOS}
        size={STRINGS.MEDIUM}
        top="13%"
        left="20%"
      />
      <ImageSVGIconAbsolute
        xml={Images.CRYPTO_XRP}
        size={STRINGS.MEDIUM}
        top="13%"
        left="60%"
      />
      <ImageSVGIconAbsolute
        xml={Images.CRYPTO_ZEC}
        size={STRINGS.MEDIUM}
        top="13%"
        left="90%"
      />
      <ViewInsideFooterSingleChild>
        <PrimaryButton
          onPress={openDashboard}
          marginTop={moderateScale(17)}
          title="CREATE WALLET"
          colors={[Colors.PURPLE_MOUNTAIN_MAJESTY, Colors.HAN_PURPLE]}
        ></PrimaryButton>
      </ViewInsideFooterSingleChild>
    </ViewContainer>
  );
};

export default CreateWallet;
