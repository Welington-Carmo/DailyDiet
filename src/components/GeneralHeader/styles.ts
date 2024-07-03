import styled, { css } from "styled-components/native";

export type generalHeaderStyletype = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type generalHeaderProps = {
    color: generalHeaderStyletype;
}

export const Container = styled.View<generalHeaderProps>(({ theme, color }) => `
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 6px;
    background-color: ${color === 'PRIMARY' ? theme.COLORS.GRAY_300 : color === 'SECONDARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`);

export const BackButtonContainer = styled.View`
  position: absolute;
  left: 16px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;