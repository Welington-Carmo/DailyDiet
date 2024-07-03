import { TouchableOpacityProps } from "react-native"

import { BallView, ButtonStyleType, Container, Title } from "./styles"

type inDietButtonProps = TouchableOpacityProps & {
    type?: ButtonStyleType;
    haveIcon?: boolean;
    isSelected?: boolean;
};
export default function InDietButton({ type = 'PRIMARY', haveIcon = true, isSelected = false, ...rest }: inDietButtonProps) {
    return (
        <Container
            {...rest}
            isSelected={isSelected}
            color={type}
        >
            {
                haveIcon ?
                    <BallView color={type} />
                    :
                    null
            }
            <Title>{type === 'PRIMARY' ? 'Sim' : 'Não'}</Title>
        </Container>
    );
}