import AsyncStorage from '@react-native-async-storage/async-storage';

import { SNACK_COLLECTION } from '@storage/storageConfig';
import { snacksGetAll } from './snacksGetAll';

export async function snackRemove(Key: string) {
    try {
        const storedSnacks = await snacksGetAll();

        const filtered = storedSnacks.filter(snack => `${snack.name}-${snack.hour}-${snack.date}` !== Key)
        const snacks = JSON.stringify(filtered);

        await AsyncStorage.setItem(SNACK_COLLECTION, snacks);
    } catch (error) {
        throw error;
    }
}