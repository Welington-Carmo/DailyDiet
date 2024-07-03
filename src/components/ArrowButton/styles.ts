import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

export type ArrowButtonStyleType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
export type ArrowIconDefinedType = 'left' | 'upRight';

type ArrowButtonProps = {
    type: ArrowButtonStyleType;
    direction: ArrowIconDefinedType;
}

function getIcon(direction: ArrowIconDefinedType) {
    switch (direction) {
        case 'left':
            return ArrowLeft;
        case 'upRight':
            return ArrowUpRight;
        default:
            return ArrowUpRight;
    }
}

const BaseIcon = styled.View``;

export const DynamicArrowButton = styled(BaseIcon).attrs<ArrowButtonProps>(({ theme, type, direction }) => {
    const Icon = getIcon(direction);
    return {
        as: Icon,
        size: 24,
        color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK
            : type === 'SECONDARY' ? theme.COLORS.RED_DARK
                : theme.COLORS.GRAY_600,
    };
})``;