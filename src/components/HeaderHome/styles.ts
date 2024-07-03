import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    margin-bottom: 40px;
`;
export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;
export const ImageBox = styled.View`
    align-items: flex-end;
    flex: 1;
`;
export const PerfilImage = styled.Image`
    width: 46px;
    height: 46px;
    border-radius: 23px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
