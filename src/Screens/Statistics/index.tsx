import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Percent from "@components/Percent";
import Record from "@components/Record";
import Loading from "@components/Loading";
import { snacksGetAll } from "@storage/snack/snacksGetAll";
import { dailyDietFormat } from "../Home";

import { Container, ContainerBox, Content, Title } from "./styles";

export default function Statistics() {
    const [isLoading, setIsLoading] = useState(true);
    const [percent, setPercent] = useState(0);
    const [snacksInDiet, setSnacksInDiet] = useState(0);
    const [data, setData] = useState<dailyDietFormat[]>([]);
    const [sequence, setSequence] = useState(0);

    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack();
    }
    async function fetchSnacks() {
        try {
            setIsLoading(true);
            const database: dailyDietFormat[] = await snacksGetAll();

            const inDietQuantity = database.filter(data => data.inDiet === true).length;
            var calc = (inDietQuantity * 100) / database.length;

            const groupedByDate = database.sort((a, b) => {
                const [dayA, monthA, yearA] = a.date.split('/');
                const [dayB, monthB, yearB] = b.date.split('/');

                const dateA = `${yearA}${monthA}${dayA}`;
                const dateB = `${yearB}${monthB}${dayB}`;

                if (dateA === dateB) {
                    return a.hour.localeCompare(b.hour);
                }
                return dateB.localeCompare(dateA);
            });
            var maxSequence = 0;
            var x = 0;
            groupedByDate.forEach(item => {
                if (item.inDiet) {
                    x++
                    if (maxSequence < x) {
                        maxSequence = x;
                    }
                } else {
                    x = 0;
                }
            });
            setSequence(maxSequence);
            setData(database);
            setPercent(calc);
            setSnacksInDiet(inDietQuantity);

            setIsLoading(false);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchSnacks();
    }, []);

    return (
        isLoading ? (
            <Loading />
        ) : (
            <Container type={percent >= 50 ? 'GREEN' : 'RED'}>
                <Percent percent={percent} arrowDirection='left' onPress={handleBack} />
                <Content>
                    <Title>Estatísticas gerais</Title>
                    <Record title={`${sequence}`} subTitle="melhor sequência dentro da dieta" />
                    <Record title={`${data.length}`} subTitle="refeições cadastradas" />
                    <ContainerBox>
                        <Record title={`${snacksInDiet}`} subTitle="refeições dentro da dieta" type="SECONDARY" />
                        <Record title={`${data.length - snacksInDiet}`} subTitle="refeições fora da dieta" type="TERTIARY" />
                    </ContainerBox>
                </Content>
            </Container>
        )
    );
}