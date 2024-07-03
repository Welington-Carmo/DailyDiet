import { TouchableHighlightProps } from "react-native";

import theme from "@theme/index";

import { BallView, Container, ContainerButton, FoodTitle, Hour } from "./styles";

type CardFoodProps = TouchableHighlightProps & {
    hour: string;
    foodTitle: string;
    ofDiet: boolean;
}

export default function CardFood({ hour, foodTitle, ofDiet, ...rest }: CardFoodProps) {
    const COLORS = theme.COLORS;
    return (
        <Container
            activeOpacity={0.8}
            underlayColor={COLORS.GRAY_200}
            {...rest}>
            <ContainerButton>
                <Hour>
                    {hour}
                </Hour>

                <FoodTitle>
                    {foodTitle}
                </FoodTitle>
                <BallView style={{ backgroundColor: ofDiet ? COLORS.GREEN_MID : COLORS.RED_MID }} />
            </ContainerButton>
        </Container>
    );
}