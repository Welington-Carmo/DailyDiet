import { StatusBar } from "react-native";
import styled, { css } from "styled-components/native";

export const ExternContainer = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0px 20px;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const CustomStatusBar = styled(StatusBar).attrs({
    translucent: true,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
})``;

export const Container = styled.View`
    width: 100%;
    padding: 40px 20px 20px;
    gap: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    text-align: center;
`;

export const ContainerButtons = styled.View`
    flex-direction: row;
    gap: 10px;
`
export const WidthButon = styled.View`
    width: 42%;
`