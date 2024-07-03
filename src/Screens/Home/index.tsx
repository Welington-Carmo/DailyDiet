import { SectionList, View } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import HeaderHome from "@components/HeaderHome";
import Percent from "@components/Percent";
import CardButton from "@components/CardButton";
import CardFood from "@components/CardFood";
import Gradient from "@components/Gradient";
import Loading from "@components/Loading";
import ListEmpty from "@components/ListEmpty";

import { snacksGetAll } from "@storage/snack/snacksGetAll";

import { Container, DataDayTitle, NewFoodTitle } from "./styles";

export type dailyDietFormat = {
    name: string,
    description: string,
    hour: string,
    date: string,
    inDiet: boolean
}

type Section = {
    title: string;
    data: dailyDietFormat[];
}

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [dailyDiets, setDailyDiets] = useState<dailyDietFormat[]>([]);
    const [sections, setSections] = useState<Section[]>([]);
    const [percent, setPercent] = useState(0);

    const navigation = useNavigation();

    async function fetchSnacks() {
        try {
            setIsLoading(true);
            const data: dailyDietFormat[] = await snacksGetAll();
            const groupedByDate = data.sort((a, b) => {
                const [dayA, monthA, yearA] = a.date.split('/');
                const [dayB, monthB, yearB] = b.date.split('/');

                const dateA = `${yearA}${monthA}${dayA}`;
                const dateB = `${yearB}${monthB}${dayB}`;

                if (dateA === dateB) {
                    return a.hour.localeCompare(b.hour);
                }
                return dateB.localeCompare(dateA);
            });
            setDailyDiets(groupedByDate)

            const groupedSections = groupByDate(groupedByDate);
            setSections(groupedSections);

            const inDietQuantity = data.filter(data => data.inDiet === true);
            const calc = inDietQuantity.length * 100 / data.length;
            setPercent(calc);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    function groupByDate(data: dailyDietFormat[]): Section[] {
        const sectionsMap: { [key: string]: Section } = {};

        data.forEach((item) => {
            const { date } = item;
            if (!sectionsMap[date]) {
                sectionsMap[date] = {
                    title: date,
                    data: [],
                };
            }
            sectionsMap[date].data.push(item);
        });
        return Object.values(sectionsMap);
    }

    function handleStatistcs() {
        navigation.navigate('Statistcs');
    }

    function handleNewSnack() {
        navigation.navigate('NewSnack');
    }

    function handleSnack(key: string) {
        navigation.navigate('Snack', { key });
    }

    useFocusEffect(useCallback(() => {
        fetchSnacks();
    }, []))


    return (
        <Container>
            <HeaderHome />

            <Percent percent={percent} onPress={() => handleStatistcs()} />

            <NewFoodTitle>Refeições</NewFoodTitle>
            <CardButton title="Nova refeição" onPress={() => handleNewSnack()} />
            {
                isLoading ?
                    <Loading />
                    :
                    <>
                        <SectionList
                            sections={sections}
                            keyExtractor={(item) => `${item.name}-${item.hour}-${item.date}`}
                            renderItem={({ item }) => (
                                <CardFood
                                    hour={item.hour}
                                    foodTitle={item.name}
                                    ofDiet={item.inDiet}
                                    onPress={() => handleSnack(`${item.name}-${item.hour}-${item.date}`)} />
                            )}
                            renderSectionHeader={({ section: { title } }) => (
                                <DataDayTitle>{title}</DataDayTitle>
                            )}
                            contentContainerStyle={dailyDiets.length === 0 && { flex: 1 }}
                            ListEmptyComponent={() => (
                                <ListEmpty message="Anote suas refeições e controle seu dia" />
                            )}
                            ListFooterComponent={() => (
                                <View style={{ height: 95 }} />
                            )}
                            showsVerticalScrollIndicator={false}
                        />
                        <Gradient />
                    </>
            }

        </Container>
    )
}