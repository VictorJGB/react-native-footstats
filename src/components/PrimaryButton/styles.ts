import styled from "styled-components/native";

import { Button } from "@react-native-material/core";

export const StyledButton = styled(Button)`
  width: 45%;
  height: 25%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;

  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;
