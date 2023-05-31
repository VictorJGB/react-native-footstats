import React from "react";

import { Text } from "react-native";

import {
  Container,
  Title,
  Subtitle,
  TitleContainer,
  ButtonsContainer,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import { StackTypes } from "../../@types/stackTypes";
import theme from "../../styles/theme";
import PrimaryButton from "../../components/PrimaryButton";

type Props = {};

const HomeScreen = (props: Props) => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Container>
      <TitleContainer>
        <Title>
          Bem vindo ao{" "}
          <Text style={{ color: theme.colors.primary }}>Footstats</Text>
        </Title>
        <Subtitle>Seu aplicativo de estatísticas esportivas</Subtitle>
      </TitleContainer>
      <ButtonsContainer>
        <PrimaryButton
          btnTitle="Times"
          iconName="group"
          onBtnPress={() => {
            navigation.navigate("Teams");
          }}
        />
        <PrimaryButton
          btnTitle="Jogadores"
          iconName="person"
          onBtnPress={() => {
            navigation.navigate("Players");
          }}
        />
        <PrimaryButton
          btnTitle="Partidas"
          iconName="date-range"
          onBtnPress={() => {
            navigation.navigate("Matches");
          }}
        />
      </ButtonsContainer>
    </Container>
  );
};

export default HomeScreen;
