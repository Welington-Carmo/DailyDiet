import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import CardButton from "@components/CardButton";

import { Container, SectionText, SubTitle, Title } from "./styles";

type RouteParams = {
    inDiet: boolean
}
export default function FeedBack() {
    const route = useRoute();
    const { inDiet } = route.params as RouteParams;
    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate('Home');
    }

    return (
        <Container>
            <Title inDiet={inDiet}> {inDiet ? 'Continue assim!' : 'Que pena'} </Title>
            {
                inDiet ?
                    <>
                        <SubTitle>Você continua <SectionText>dentro da dieta. </SectionText>Muito bem!</SubTitle>
                        <Image source={require('@assets/img-in-diet.png')} style={{ marginBottom: 30 }} />
                    </>
                    :
                    <>
                        <SubTitle>Você <SectionText>saiu da dieta </SectionText>dessa vez, mas continue se esforçando e não desista!</SubTitle>
                        <Image source={require('@assets/img-out-diet.png')} style={{ marginBottom: 30 }} />
                    </>
            }
            <CardButton title="Ir para tela inicial" haveIcon={false} onPress={() => handleBack()} />
        </Container>
    )
}