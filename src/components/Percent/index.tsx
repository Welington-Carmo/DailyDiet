import { TouchableOpacityProps } from "react-native";

import ArrowButton from "@components/ArrowButton";

import { ArrowIconDefinedType } from "@components/ArrowButton/styles";

import theme from "@theme/index";

import { Container, ContainerButton, SubTitle, Title } from "./styles";

type PercentProps = TouchableOpacityProps & {
    percent: number;
    arrowDirection?: ArrowIconDefinedType;
}
export default function Percent({ percent, arrowDirection = 'upRight', ...rest }: PercentProps) {
    const COLORS = theme.COLORS;

    const percentText = `${percent.toFixed(2)}%`.split('.').join(',');
    return (
        <Container
            style={{ backgroundColor: percent < 50 ? COLORS.RED_LIGHT : COLORS.GREEN_LIGHT }}
        >
            <ContainerButton>
                <ArrowButton {...rest} direction={arrowDirection} />
            </ContainerButton>
            <Title>{percentText}</Title>
            <SubTitle>das refeições dentro da dieta</SubTitle>
        </Container>
    );
}