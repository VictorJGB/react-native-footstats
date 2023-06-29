import { ScrollView } from "react-native";

import React, { useEffect, useState } from "react";

import { Flex, Text } from "@react-native-material/core";

import RNPickerSelect, { Item } from "react-native-picker-select";

import theme from "../../styles/theme";

import PlayerCard from "../../components/PlayerCard";

import { usePlayers } from "../../hooks/usePlayers";

import Players from "../../interfaces/Players";
import Teams from "../../interfaces/Teams";

import { useTeams } from "../../hooks/useTeams";

type Props = {};

const PlayersScreen = (props: Props) => {
  const MessiPng = require("../../assets/messi.png");

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
      <Flex w={"100%"} items="center" justify="center">
        {/* Title */}
        <Text
          variant="h1"
          color={theme.colors.primary}
          style={{ fontSize: 26, fontWeight: "600" }}
        >
          Estatísticas de Jogadores
        </Text>
        <Text
          variant="h2"
          color={theme.colors.black}
          style={{ fontSize: 20, fontWeight: "500" }}
        >
          La Liga
        </Text>
      </Flex>
      {/* Cards Container */}
      <Flex w={"100%"} items="center" justify="center" style={{ gap: 30 }}>
        <PlayerCard
          image={MessiPng}
          title="Jogador"
          subtitle="Nº 10"
          statsScore={90}
          statsGoalsMarked={10}
          statsMatchPlayed={20}
          statsRedCards={3}
          statsYellowCards={5}
        />
      </Flex>
    </ScrollView>
  );
};

export default PlayersScreen;
