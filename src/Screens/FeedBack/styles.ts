import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

type FeedBackProps = {
    inDiet: boolean
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    align-items: center;
    justify-content: center;
    padding: 0 35px;
`;

export const Title = styled.Text<FeedBackProps>(({ theme, inDiet }) => `
    color: ${inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.X2L}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
`);

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    text-align: center;
    margin-bottom: 60px
`;
export const SectionText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;