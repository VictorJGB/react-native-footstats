import React from "react";
import { TitleContainer } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { StackTypes } from "../../@types/stackTypes";

import Title from "../../components/Title";
import Subtitle from "./../../components/Subtitle";
import Card from "../../components/TeamCard";

import theme from "../../styles/theme";
import { Flex } from "@react-native-material/core";
import { ScrollView } from "react-native";

type Props = {};

const TeamsScreen = (props: Props) => {
  const navigation = useNavigation<StackTypes>();
  const TeamImg = require("../../assets/barcelona.png");

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flex fill={true} direction="column" justify="center" items="center">
        <Title style={{ color: theme.colors.primary }}>
          Estatísticas de Times
        </Title>
        <Subtitle>La Liga</Subtitle>
      </Flex>
      <Card
        image={TeamImg}
        title="Barcelona"
        subtitle="1º Lugar"
        statsPTS={82}
        statsVictory={26}
        statsDefeat={4}
        statsDrawn={3}
      />
    </ScrollView>
  );
};

export default TeamsScreen;
