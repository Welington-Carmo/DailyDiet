import styled, { css } from "styled-components/native";

export type BoxContentsStyleType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type BoxContentsProps = {
    type: BoxContentsStyleType;
}

export const BoxContents = styled.View<BoxContentsProps>(({ theme, type }) => `
    height: ${type === 'PRIMARY' ? '100px' : '115px'};
    width: ${type === 'PRIMARY' ? 'auto' : '48%'};
    background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_200 : type === 'SECONDARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    gap: 8px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-bottom: 16px;
`);

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.X2L}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const SubTitle = styled.Text<BoxContentsProps>(({ type, theme }) => `
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    width: ${type === 'SECONDARY' ? '125px' : type === 'TERTIARY' ? '115px' : 'auto'};
    text-align: center;
`);