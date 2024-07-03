import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type DynamicInputStyleType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type DynamicInputProps = {
    type: DynamicInputStyleType;
}

export const Container = styled.View<DynamicInputProps>(({ type }) => `
    gap: 8px;
    width: ${type === 'TERTIARY' ? '47%' : 'auto'};
    margin-bottom: 30px;
`)

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-left: 2px;
`;

export const DynamicInput = styled(TextInput).attrs<DynamicInputProps>(({ type }) => ({
    textAlignVertical: type === 'SECONDARY' ? 'top' : 'center'
}))<DynamicInputProps>(({ theme, type }) => `
    border-color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.MD}px;
    height: ${type === 'SECONDARY' && 142}px;
    border-width: 1px;
    border-radius: 6px;
    padding: 14px;
`)
