import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToPersistentStorage = async (key, value) => {
  try {
    if (!key || !value) return;
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const loadFromPersistentStorage = async (key) => {
  try {
    if (!key) return;
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.error(e);
  }
};
