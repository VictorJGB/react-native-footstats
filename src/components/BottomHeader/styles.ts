import styled from "styled-components/native";

export const Container = styled.View`
  bottom: 0;
  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  gap: 10px;

  background-color: ${({ theme }) => theme.colors.primary};
`;
