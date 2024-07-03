import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 27px 27px 2px;
`;
export const NewFoodTitle = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`};
margin-bottom: 10px;
`;

export const DataDayTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 20px;
`;

