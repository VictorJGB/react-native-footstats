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

export const TeamContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px;
  gap: 8px;

  width: 100%;

  background: ${({ theme }) => theme.colors.secondary};
`;

export const Logo = styled.Image`
  max-width: 100%;
`;

export const TeamTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};

  font-size: 32px;

  color: #fff;
`;

export const TeamSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 24px;

  color: ${({ theme }) => theme.colors.white};
`;

export const StatsContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50%;

  padding: 30px 24px;
  gap: 10px;

  background-color: #fff;
`;

export const PtsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 25px;
`;

export const PtsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};

  font-size: 24px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const PtsContent = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};

  font-size: 16px;
  line-height: 23px;

  color: ${({ theme }) => theme.colors.black};
`;

export const DivisionLine = styled.View`
  width: 270px;
  height: 0px;

  /* secondary-color */
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const StatsGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 63px;

  width: 100%;
`;

export const StatsItem = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 4px;
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
