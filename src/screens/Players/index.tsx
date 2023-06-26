import { ScrollView } from "react-native";
import React from "react";
import { Flex, Text } from "@react-native-material/core";
import theme from "../../styles/theme";
import PlayerCard from "../../components/PlayerCard";

type Props = {};

const PlayersScreen = (props: Props) => {
  const BarcelonaImg = require("../../assets/barcelona.png");
  const MadridImg = require("../../assets/realmadrid.png");

  return (
    <ScrollView>
      <Flex w={"100%"} items="center" justify="center">
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
      <Flex w={"100%"} items="center" justify="center" style={{ gap: 30 }}>
        <PlayerCard
          image={BarcelonaImg}
          title="Jogador"
          subtitle="Nº 10"
          statsScore={90}
          statsGoalsMarked={10}
          statsMatchPlayed={20}
          statsRedCards={3}
          statsYellowCards={5}
        />
        <PlayerCard
          image={MadridImg}
          title="Jogador"
          subtitle="Nº 19"
          statsScore={79}
          statsGoalsMarked={9}
          statsMatchPlayed={30}
          statsRedCards={1}
          statsYellowCards={2}
        />
      </Flex>
    </ScrollView>
  );
};

export default PlayersScreen;
