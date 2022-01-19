import AsyncStorage from "@react-native-async-storage/async-storage";

import STRINGS from "#constants/strings";

export const storeRandomBIPS = async (value) => {
  try {
    if (!value) return;
    await AsyncStorage.setItem(STRINGS.BIPS_STORAGE_KEY, value);
  } catch (e) {
    console.error(e);
  }
};

export const retrieveRandomBIPS = async () => {
  try {
    const value = await AsyncStorage.getItem(STRINGS.BIPS_STORAGE_KEY);
    return value;
  } catch (e) {
    console.error(e);
  }
};
