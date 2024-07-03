import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type SnackProps = {
    inDiet: boolean
}

export const Container = styled(SafeAreaView)<SnackProps>(({ inDiet, theme }) => `
    flex: 1;
    background-color: ${inDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    padding-top: 20px;
`);

export const Content = styled.View`
    margin-top: 20px;
    padding: 50px 27px;
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 30px;
    gap: 12px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const Description_Date = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
    margin-bottom: 25px;
`;

export const DateTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const ViewFlag = styled.View`
    height: 34px;
    width: 150px;
    flex-direction: row;
    border-radius: 17px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const TextFlag = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;
export const BallView = styled.View<SnackProps>(({ theme, inDiet }) => `
    background-color: ${inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    height: 8px;
    width: 8px;
    border-radius: 5px;
`)