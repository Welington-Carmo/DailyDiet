import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

type backgroundStyleType = 'RED' | 'GREEN';

type ContainerProps = {
    type: backgroundStyleType;
}

export const Container = styled(SafeAreaView)<ContainerProps>(({ theme, type }) => `
    flex: 1;
    background-color: ${type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    padding-top: 16px;
`);

export const Content = styled.View`
    margin-top: 20px;
    padding: 32px 27px;
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 30px;
`;
export const Title = styled.Text`
    ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 27px;
    text-align: center;
    `}
`;
export const ContainerBox = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`