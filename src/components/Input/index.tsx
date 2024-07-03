import { TextInputProps } from "react-native";

import { Container, DynamicInput, DynamicInputStyleType, Title } from "./styles";

type inputProps = TextInputProps & {
    title: string;
    type?: DynamicInputStyleType;
}

export default function Input({ title, type = 'PRIMARY', ...rest }: inputProps) {
    return (
        <Container type={type}>
            <Title>{title}</Title>
            <DynamicInput
                type={type}
                {...rest}
            />
        </Container>
    );
}