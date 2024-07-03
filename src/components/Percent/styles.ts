import styled, { css } from "styled-components/native";

export const Container = styled.View`
    height: 106px;
    border-radius: 8px;
    padding: 10px;
    align-items: center;
`;

export const ContainerButton = styled.View`
    height: 13px;
    width: 320px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.X2L}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-bottom: 2px;
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_600};
        font-size: ${theme.FONT_SIZE.SM}px;
    `};
`;