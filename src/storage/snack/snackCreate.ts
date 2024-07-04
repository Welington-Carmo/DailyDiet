import AsyncStorage from '@react-native-async-storage/async-storage';

import { dailyDietFormat } from 'src/Screens/Home';

import { snacksGetAll } from './snacksGetAll';
import { SNACK_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

export async function SnackCreate(newSnack: dailyDietFormat) {
    try {
        const storedSnacks: dailyDietFormat[] = await snacksGetAll();

        const snackAlredyExist = storedSnacks.filter(item => `${item.name.replace(' ', '')}-${item.hour}-${item.date}` === `${newSnack.name.replace(' ', '')}-${newSnack.hour}-${newSnack.date}`)[0];

        if (snackAlredyExist) {
            throw new AppError('Já existe uma refeição com os mesmos dados cadastrada');
        }

        const storage = JSON.stringify([...storedSnacks, newSnack]);
        await AsyncStorage.setItem(SNACK_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}