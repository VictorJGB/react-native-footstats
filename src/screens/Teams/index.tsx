import React from "react";

import { useNavigation } from "@react-navigation/native";

import { StackTypes } from "../../@types/stackTypes";

import Title from "../../components/Title";
import Subtitle from "./../../components/Subtitle";
import TeamsCard from "../../components/TeamCard";

import theme from "../../styles/theme";
import { Flex } from "@react-native-material/core";
import { ScrollView } from "react-native";

type Props = {};

const TeamsScreen = (props: Props) => {
  const navigation = useNavigation<StackTypes>();
  const BarcelonaImg = require("../../assets/barcelona.png");
  const MadridImg = require("../../assets/realmadrid.png");

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
        <TeamsCard
          image={BarcelonaImg}
          title="Barcelona"
          subtitle="1º Lugar"
          statsPTS={82}
          statsVictory={26}
          statsDefeat={4}
          statsDrawn={3}
        />
        <TeamsCard
          image={MadridImg}
          title="Real Madrid"
          subtitle="2º Lugar"
          statsPTS={80}
          statsVictory={20}
          statsDefeat={5}
          statsDrawn={10}
        />
      </Flex>
    </ScrollView>
  );
};

export default TeamsScreen;
