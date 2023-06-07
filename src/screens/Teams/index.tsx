import React from "react";
import { TitleContainer } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { StackTypes } from "../../@types/stackTypes";

import Title from "../../components/Title";
import Subtitle from "./../../components/Subtitle";
import Card from "../../components/TeamCard";

import theme from "../../styles/theme";
import { ScrollView } from "react-native";

type Props = {};

const TeamsScreen = (props: Props) => {
  const navigation = useNavigation<StackTypes>();

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <TitleContainer>
        <Title style={{ color: theme.colors.primary }}>
          Estatísticas de Times
        </Title>
        <Subtitle>La Liga</Subtitle>
      </TitleContainer>
      <Card />
    </ScrollView>
  );
};

export default TeamsScreen;
