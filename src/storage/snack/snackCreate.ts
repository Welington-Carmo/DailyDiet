import AsyncStorage from '@react-native-async-storage/async-storage';

import { snacksGetAll } from './snacksGetAll';
import { SNACK_COLLECTION } from '@storage/storageConfig';

export async function SnackCreate(NewSnack: object) {
    try {
        const storedSnacks = await snacksGetAll();

        const storage = JSON.stringify([...storedSnacks, NewSnack]);
        await AsyncStorage.setItem(SNACK_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}