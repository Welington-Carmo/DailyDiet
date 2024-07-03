import AsyncStorage from '@react-native-async-storage/async-storage';

import { SNACK_COLLECTION } from '@storage/storageConfig';
import { dailyDietFormat } from 'src/Screens/Home';

export async function snacksGetAll() {
    try {
        const storage = await AsyncStorage.getItem(SNACK_COLLECTION);
        const snacks: dailyDietFormat[] = storage ? JSON.parse(storage) : [];

        return snacks;
    } catch (error) {
        throw error
    }
}