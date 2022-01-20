import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoarding from "./src/screens/OnBoarding";
import CreateWallet from "./src/screens/CreateWallet";
import Dashboard from "./src/screens/Dashboard";
import STRINGS from "#constants/strings";
import { loadFromPersistentStorage } from "#utils/storage";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isPostOnboarding, setIsPostOnboarding] = useState(null);
  useEffect(async () => {
    const loadedBIPS = await loadFromPersistentStorage(
      STRINGS.BIPS_STORAGE_KEY
    );
    setIsPostOnboarding(!!loadedBIPS);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isPostOnboarding ? (
          <Stack.Screen name="Dashboard" component={Dashboard} />
        ) : (
          <>
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="CreateWallet" component={CreateWallet} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
