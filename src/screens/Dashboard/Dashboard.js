import React, { useEffect, useState } from "react";

import { ViewContainerTop, ViewContentContainer } from "#commons/View";
import { LinearGradientCardFullWidth } from "#commons/Image";
import { Heading1, Heading2 } from "#commons/Text";
import { LinearGradientFullBackground } from "#commons/Image";
import { loadFromPersistentStorage } from "#utils/storage";
import STRINGS from "#constants/strings";

const Dashboard = () => {
  const [balance, setBalance] = useState(null);
  useEffect(async () => {
    const currentBalance = await loadFromPersistentStorage(
      STRINGS.BALANCE_STORAGE_KEY
    );
    setBalance(currentBalance);
  }, []);
  return (
    <ViewContainerTop>
      <LinearGradientFullBackground />
      <ViewContentContainer>
        <LinearGradientCardFullWidth>
          <Heading1>{balance ? `$ ${balance}` : "-"}</Heading1>
          <Heading2>Balance</Heading2>
        </LinearGradientCardFullWidth>
      </ViewContentContainer>
    </ViewContainerTop>
  );
};

export default Dashboard;
