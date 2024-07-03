import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    padding: 20px 0 0;
`;
export const Content = styled.View`
    margin-top: 20px;
    padding: 50px 27px 10px;
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 30px 0px 0px;
`;
export const Row = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;
export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-left: 2px;
    margin-bottom: 8px;
`;