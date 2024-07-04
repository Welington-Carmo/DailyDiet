import { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { dailyDietFormat } from "../Home";

import Input from "@components/Input";
import InDietButton from '@components/InDietButton';
import CardButton from '@components/CardButton';
import GeneralHeader from "@components/GeneralHeader";
import Loading from "@components/Loading";

import { snacksGetAll } from "@storage/snack/snacksGetAll";
import { snackRemove } from "@storage/snack/snackRemoveByKey";
import { SnackCreate } from "@storage/snack/snackCreate";
import { AppError } from "@utils/AppError";

import { Container, Content, Row, Title } from "./styles";

type RouteParams = {
    key: string;
}

export default function EditSnack() {
    const [isLoading, setIsLoading] = useState(true)
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [inDiet, setInDiet] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const { key } = route.params as RouteParams;

    function handleBack() {
        navigation.goBack();
    }
    const handleDate = (text: string) => {
        const validDate = text.replace(/[^0-9]/g, '');

        let formattedDate = '';

        if (validDate === '') {
            formattedDate = '';
        } else if (validDate.length <= 2) {
            formattedDate = validDate;
        } else if (validDate.length <= 4) {
            formattedDate = `${validDate.substring(0, 2)}/${validDate.substring(2)}`;
        } else {
            formattedDate = `${validDate.substring(0, 2)}/${validDate.substring(2, 4)}/${validDate.substring(4, 8)}`;
        }
        if (formattedDate.length <= 10) {
            setDate(formattedDate);
        }
    };

    const handleHour = (text: string) => {
        const validHour = text.replace(/[^0-9]/g, '');

        let formattedHour = '';

        if (validHour === '') {
            formattedHour = '';
        } else if (validHour.length <= 2) {
            formattedHour = validHour;
        } else {
            formattedHour = `${validHour.substring(0, 2)}:${validHour.substring(2)}`;
        }
        if (formattedHour.length <= 5) {
            setHour(formattedHour);
        }
    }

    async function fechSnack() {
        try {
            setIsLoading(true);
            const data = await snacksGetAll();
            const filteredData = data.filter(data => `${data.name}-${data.hour}-${data.date}` === key);
            if (filteredData.length > 0) {
                setName(filteredData[0].name);
                setDescription(filteredData[0].description);
                setDate(filteredData[0].date);
                setHour(filteredData[0].hour);
                setInDiet(filteredData[0].inDiet);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleSaveEdit() {
        if (date.length < 10 ||
            name.replace(' ', '') === '' ||
            hour.length < 5 ||
            description.replace(' ', '') === '' ||
            parseInt(date.split('/')[0]) > 31 ||
            parseInt(date.split('/')[1]) > 12 ||
            parseInt(date.split('/')[2]) < 2024 ||
            parseInt(hour.split(':')[0]) > 23 ||
            parseInt(hour.split(':')[1]) > 59
        ) {
            return Alert.alert('Editar refeição', 'preencha todos os campos para realizar o cadastro.');
        };
        if (name.trim().length >= 30) {
            return Alert.alert('Editar refeição', 'o Título está muito grande');
        };

        const snack: dailyDietFormat = { name, description, date, inDiet, hour };
        const newKey = `${name}-${hour}-${date}`;

        try {
            await snackRemove(key);
            await SnackCreate(snack);
            navigation.navigate('Snack', { key: newKey });
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Editar Refeição', error.message);
            } else {
                Alert.alert('Editar Refeição', 'Não foi possível editar a refeição.');
            }
        }
    }

    useEffect(() => {
        fechSnack();
    }, []);

    if (isLoading) {
        return <Loading />
    }
    return (
        <Container>
            <GeneralHeader title="Editar refeição" onPress={() => handleBack()} />
            <Content>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input
                        title="Nome"
                        value={name}
                        onChangeText={setName}
                    />

                    <Input
                        title="Descrição"
                        type="SECONDARY"
                        multiline
                        value={description}
                        onChangeText={setDescription}
                    />

                    <Row>
                        <Input
                            placeholder="dd/mm/aaaa"
                            keyboardType='numeric'
                            title="Data"
                            type="TERTIARY"
                            value={date}
                            onChangeText={handleDate}
                        />

                        <Input
                            placeholder="HH:MM"
                            keyboardType='numeric'
                            title="Hora"
                            type="TERTIARY"
                            value={hour}
                            onChangeText={handleHour}
                        />
                    </Row>

                    <Title>Está dentro da dieta?</Title>

                    <Row style={{ marginBottom: 100 }}>
                        <InDietButton isSelected={inDiet} onPress={() => { setInDiet(true) }} />

                        <InDietButton type="SECONDARY" isSelected={!inDiet} onPress={() => { setInDiet(false) }} />
                    </Row>

                    <CardButton title='Salvar alterações' haveIcon={false} onPress={handleSaveEdit} />
                </ScrollView>
            </Content>
        </Container>
    );
}
