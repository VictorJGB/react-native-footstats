import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 350px;

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
  overflow: hidden;
`;

export const MatchContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  gap: 5px;

  width: 100%;
  height: 50%;

  background: ${({ theme }) => theme.colors.secondary};
`;
export const TeamContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StatsContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50%;

  padding: 30px 24px;
  gap: 10px;

  background-color: #fff;
`;

export const ScoreContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;
export const DivisionLine = styled.View`
  width: 0px;
  height: 50px;

  /* secondary-color */
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const StatsGroup = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50%;
`;

export const StatsItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
`;

export const ItemTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const ItemContent = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.black};
`;
