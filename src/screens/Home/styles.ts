import styled from "styled-components/native";
import PrimaryButton from "../../components/PrimaryButton";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  width: 100%;
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 6px;
`;

export const ButtonsContainer = styled.View`
  flex: 1 1 60%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 20px;
  text-align: center;
`;

export const HomeBtn = styled(PrimaryButton)`
  width: 180px;
  height: 60px;
`;
