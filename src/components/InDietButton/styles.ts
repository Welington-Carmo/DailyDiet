import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleType = 'PRIMARY' | 'SECONDARY';

type ContainerProps = {
    isSelected: boolean;
    color: ButtonStyleType;
};

type BallViewProps = {
    color: ButtonStyleType;
};

export const Container = styled(TouchableOpacity)<ContainerProps>(({ isSelected, color, theme }) => `
    flex-direction: row;
    width: 48.5%;
    height: 55px;
    align-items: center;
    justify-content: center;
    background-color: ${isSelected && color === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : isSelected && color === 'SECONDARY' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200};
    border-radius: 8px;
    border: ${isSelected ? '1px' : 0};
    border-color: ${color === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`);

export const BallView = styled.View<BallViewProps>(({ theme, color }) => `
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background-color: ${color === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    margin-right: 10px;
`);

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;
