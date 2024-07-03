import { TouchableOpacityProps } from "react-native";

import { CardButtonStyleType, Container, DynamicIcon, IcondefinedType, Title } from "./styles";

type CardButtontype = TouchableOpacityProps & {
    color?: CardButtonStyleType;
    title: string;
    haveIcon?: boolean;
    icon?: IcondefinedType;
}
export default function CardButton({ color = 'PRIMARY', title, haveIcon = true, icon = 'add', activeOpacity, ...rest }: CardButtontype) {
    return (
        <Container
            color={color}
            {...rest}
            activeOpacity={color === 'PRIMARY' ? 0.9 : 0.2}
        >
            {
                haveIcon ?
                    <DynamicIcon icon={icon} color={color} />
                    :
                    null
            }
            <Title color={color}>{title}</Title>
        </Container>
    );
}