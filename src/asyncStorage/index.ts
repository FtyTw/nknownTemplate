import AsyncStorage from '@react-native-async-storage/async-storage';
import {logError} from '@helpers';

export const STORAGE_KEYS = {
  AUTH_KEY: 'token',
};

export const setValue = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    logError(e as Error);
  }
};

export const getValue = async (key: string) => {
  try {
    const result = await AsyncStorage.getItem(key);
    if (result) {
      return JSON.parse(result);
    }
  } catch (e) {
    logError(e as Error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    logError(e as Error);
  }
};
