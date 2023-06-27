import React from "react";

import { useNavigation } from "@react-navigation/native";

import { StackTypes } from "../../@types/stackTypes";

import Title from "../../components/Title";
import Subtitle from "./../../components/Subtitle";
import TeamCard from "../../components/TeamCard";

import theme from "../../styles/theme";

import { Flex } from "@react-native-material/core";

import { ScrollView } from "react-native";

import Teams from "../../interfaces/Teams";
import { useTeams } from "../../hooks/useTeams";

type Props = {};

const TeamsScreen = (props: Props) => {
  const { data: teams } = useTeams<Teams[]>();

  const navigation = useNavigation<StackTypes>();
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex
        w={"100%"}
        h={"20%"}
        direction="column"
        justify="center"
        items="center"
      >
        <Title style={{ color: theme.colors.primary }}>
          Estatísticas de Times
        </Title>
        <Subtitle>La Liga</Subtitle>
      </Flex>
      {/* Cards Container */}
      <Flex w={"100%"} items="center" justify="center" style={{ gap: 30 }}>
        {teams != null
          ? teams.map((team) => {
              <TeamCard
                image={team.team_badge}
                title={team.team_name}
                subtitle={team.overall_league_position}
                statsPTS={team.overall_league_PTS}
                statsVictory={team.overall_league_W}
                statsDefeat={team.overall_league_L}
                statsDrawn={team.overall_league_D}
              />;
            })
          : null}
      </Flex>
    </ScrollView>
  );
};

export default TeamsScreen;
