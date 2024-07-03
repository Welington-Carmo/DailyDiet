import { useState } from 'react';
import { Alert, ScrollView } from 'react-native';

import Input from "@components/Input";
import InDietButton from '@components/InDietButton';
import CardButton from '@components/CardButton';
import GeneralHeader from "@components/GeneralHeader";

import { Container, Content, Row, Title } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { SnackCreate } from '@storage/snack/snackCreate';

export default function NewSnack() {
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [inDiet, setInDiet] = useState(true);
    const snack = { name, description, date, inDiet, hour }

    const navigation = useNavigation();

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
        if (formattedHour.length <= 10) {
            setHour(formattedHour);
        }
    }

    async function handleAddSnack() {
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
            return Alert.alert('Cadastrar refeição', 'preencha todos os campos corretamente para realizar o cadastro.');
        }
        if (name.trim().length >= 30) {
            return Alert.alert('Cadastrar refeição', 'o Título está muito grande');
        }

        try {
            await SnackCreate(snack);
            navigation.navigate('FeedBack', { inDiet })
        } catch (error) {
            throw error;
        }
    }

    function handleBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <GeneralHeader title="Nova refeição" onPress={() => handleBack()} />
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
                            placeholder='dd/mm/aaaa'
                            keyboardType='numeric'
                            title="Data"
                            type="TERTIARY"
                            value={date}
                            onChangeText={handleDate}
                        />

                        <Input
                            placeholder='HH:MM'
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
                    <CardButton title='Cadastrar refeição' haveIcon={false} onPress={handleAddSnack} />
                </ScrollView>
            </Content>
        </Container>

    );
}
