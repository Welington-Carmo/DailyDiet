import { TouchableHighlight } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableHighlight)`
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const ContainerButton = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Hour = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XS}px;
        color: ${theme.COLORS.GRAY_700};
        
        border-color: ${theme.COLORS.GRAY_400}; 
    `};
    padding-right: 8px;
    border-right-width: 1px;
`;

export const FoodTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_600};
    `};
    flex: 1;
    margin-left: 8px;
`;

export const BallView = styled.View`
    width: 14px;
    height: 14px;
    border-radius: 7px;
`;