import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Plus, Trash, PencilSimpleLine } from "phosphor-react-native";

export type CardButtonStyleType = 'PRIMARY' | 'SECONDARY';
export type IcondefinedType = 'add' | 'edit' | 'trash';

type CardButtontype = {
    color: CardButtonStyleType;
}

type IconProps = {
    icon: IcondefinedType;
    color: CardButtonStyleType;
    theme: any;
}

function getIcon(icon: IcondefinedType) {
    switch (icon) {
        case 'add':
            return Plus;
        case 'edit':
            return PencilSimpleLine;
        case 'trash':
            return Trash;
        default:
            return Plus;
    }
}

export const Container = styled(TouchableOpacity)<CardButtontype>(({ color, theme }) => `
    width: 100%;
    height: 50px;

    border-radius: 6px;
    border: 1px;

    align-items: center;
    justify-content: center;
    flex-direction: row;

    border-color: ${theme.COLORS.GRAY_700};
    background-color: ${color === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_100};
`);

const BaseIcon = styled.View``;

export const DynamicIcon = styled(BaseIcon).attrs<IconProps>(({ icon, color, theme }) => {
    const Icon = getIcon(icon);
    return {
        as: Icon,
        size: 18,
        color: color === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700
    }
})``;

export const Title = styled.Text<CardButtontype>(({ theme, color }) => `
    color: ${color === 'PRIMARY' ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-left: 10px;
`);

