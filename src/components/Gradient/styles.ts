import styled from "styled-components/native";

export const GradientContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 120px;
`;

export const Opacaty = styled.View`
  height: 4px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;