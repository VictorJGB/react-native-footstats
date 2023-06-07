import styled from "styled-components/native";

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  text-align: center;
`;
