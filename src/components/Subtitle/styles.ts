import styled from "styled-components/native";

export const StyledSubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 20px;
  text-align: center;
`;
