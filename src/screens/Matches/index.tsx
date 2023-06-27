import { ScrollView, Text } from "react-native";
import React from "react";

import MatchCard from "../../components/MatchCard";
import { Flex } from "@react-native-material/core";
import theme from "../../styles/theme";

type Props = {};

const MatchesScreen = (props: Props) => {
  const BarcelonaImg = require("../../assets/barcelona.png");
  const MadridImg = require("../../assets/realmadrid.png");
  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Flex items="center" justify="center">
        <Text
          style={{
            fontSize: 26,
            fontFamily: theme.fonts.bold,
            color: theme.colors.primary,
          }}
        >
          Estatísticas de Partidas
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: theme.fonts.medium,
            color: theme.colors.black,
          }}
        >
          La Liga
        </Text>
      </Flex>
      <MatchCard
        homeTeamImage={BarcelonaImg}
        awayTeamImage={MadridImg}
        homeTeamName="Barcelona"
        awayTeamName="Real Madrid"
        match_date="27/06/2023"
        match_hour="12:00"
        homeTeamScore={2}
        awayTeamScore={1}
        match_referee="João Luiz"
        match_stadium="Bicentenário"
      />
    </ScrollView>
  );
};

export default MatchesScreen;
