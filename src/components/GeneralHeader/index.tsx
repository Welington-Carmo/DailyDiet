import { TouchableOpacityProps } from "react-native";

import ArrowButton from "@components/ArrowButton";

import { BackButtonContainer, Container, Title, generalHeaderStyletype } from "./styles";

type GeneralHeaderProps = TouchableOpacityProps & {
    title: string;
    color?: generalHeaderStyletype;
}
export default function GeneralHeader({ title, color = 'PRIMARY', ...rest }: GeneralHeaderProps) {
    return (
        <Container color={color}>
            <BackButtonContainer>
                <ArrowButton color="TERTIARY" direction="left" {...rest} />
            </BackButtonContainer>
            <Title>{title}</Title>
        </Container>
    );
}