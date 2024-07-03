import { useCallback, useState } from "react";
import { View } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { dailyDietFormat } from "../Home";

import GeneralHeader from "@components/GeneralHeader";
import CardButton from "@components/CardButton";
import Loading from "@components/Loading";
import CustomAlert from "@components/CustomAlert";

import { snacksGetAll } from "@storage/snack/snacksGetAll";
import { snackRemove } from "@storage/snack/snackRemoveByKey";

import { BallView, Container, Content, DateTitle, Description_Date, TextFlag, Title, ViewFlag } from "./styles";

type RouteParams = {
    key: string;
}

export default function Snack() {
    const [isLoading, setIsLoading] = useState(true);
    const [snack, setSnack] = useState<dailyDietFormat | null>(null);
    const [inDiet, setInDiet] = useState(true);
    const [alertVisible, setAlertVisible] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();
    const { key } = route.params as RouteParams;

    function handleBack() {
        navigation.goBack();
    }

    function handleEditSnack(key: string) {
        navigation.navigate('EditSnack', { key });
    }

    async function handleDeleteSnack(key: string) {
        try {
            await snackRemove(key);
            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
        } finally {
            navigation.navigate('Home');
        }
    }

    async function fetchSnack() {
        try {
            setIsLoading(true);
            const data = await snacksGetAll();
            const filteredData = data.filter(data => `${data.name}-${data.hour}-${data.date}` === key);
            if (filteredData.length > 0) {
                setSnack(filteredData[0]);
                setInDiet(filteredData[0].inDiet);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchSnack();
    }, [key]));

    if (isLoading) {
        return <Loading />;
    }

    if (!snack) {
        return null;
    }

    return (
        <Container inDiet={inDiet}>
            <GeneralHeader
                title="Refeição"
                color={inDiet ? 'SECONDARY' : 'TERTIARY'}
                onPress={handleBack}
            />
            <Content>
                <Title>{snack.name}</Title>

                <Description_Date>{snack.description}</Description_Date>

                <DateTitle>Data e hora</DateTitle>
                <Description_Date>{snack.date} às {snack.hour}</Description_Date>

                <ViewFlag>
                    <BallView inDiet={inDiet} />
                    <TextFlag>{inDiet ? 'dentro da dieta' : 'fora da dieta'}</TextFlag>
                </ViewFlag>

                <View style={{ flex: 1, justifyContent: 'flex-end', gap: 8 }}>
                    <CardButton
                        icon="edit"
                        title="Editar refeição"
                        onPress={() => handleEditSnack(key)}
                    />

                    <CardButton
                        icon="trash"
                        title="Excluir refeição"
                        color="SECONDARY"
                        onPress={() => setAlertVisible(true)}
                    />
                </View>
            </Content>
            <CustomAlert
                animationType="fade"
                visible={alertVisible}
                onClose={() => setAlertVisible(false)}
                onConfirm={() => handleDeleteSnack(`${snack.name}-${snack.hour}-${snack.date}`)}
                title="Deseja realmente excluir o registro da refeição?"
            />
        </Container>
    );
}
