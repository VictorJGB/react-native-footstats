import React from "react";

import { Text } from "react-native";

import { Container, TitleContainer, ButtonsContainer, HomeBtn } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { StackTypes } from "../../@types/stackTypes";
import theme from "../../styles/theme";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

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
        <HomeBtn
          btnTitle="Times"
          iconName="group"
          onBtnPress={() => {
            navigation.navigate("Teams");
          }}
        />
        <HomeBtn
          btnTitle="Jogadores"
          iconName="person"
          onBtnPress={() => {
            navigation.navigate("Players");
          }}
        />
        <HomeBtn
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
