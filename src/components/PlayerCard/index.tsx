import React from "react";

import {
  Container,
  PlayerContainer,
  PlayerImg,
  PlayerTitle,
  PlayerSubtitle,
  StatsContainer,
  ScoreContainer,
  ScoreTitle,
  ScoreContent,
  DivisionLine,
  StatsGroup,
  StatsItem,
  ItemTitle,
  ItemContent,
} from "./styles";
import { ImageSourcePropType } from "react-native";
import { Flex } from "@react-native-material/core";

type Props = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  statsScore: number;
  statsMatchPlayed: number;
  statsGoalsMarked: number;
  statsYellowCards: number;
  statsRedCards: number;
};

const PlayerCard = (props: Props) => {
  return (
    <Container>
      {/* Team Info */}
      <PlayerContainer>
        <Flex basis={"30%"} grow={1} shrink={1} items="center" justify="center">
          <PlayerImg source={props.image} />
        </Flex>
        <Flex basis={"20%"} grow={1} shrink={1} items="center" justify="center">
          <PlayerTitle>{props.title}</PlayerTitle>
          <PlayerSubtitle>{props.subtitle}</PlayerSubtitle>
        </Flex>
      </PlayerContainer>

      {/* Team Stats Info */}
      <StatsContainer>
        {/* Points */}
        <ScoreContainer>
          <ScoreTitle>Pontos</ScoreTitle>
          <ScoreContent>{props.statsScore}</ScoreContent>
        </ScoreContainer>

        <DivisionLine />

        <StatsGroup>
          {/* Partidas Jogadas */}
          <StatsItem>
            <ItemTitle>PJ</ItemTitle>
            <ItemContent>{props.statsMatchPlayed}</ItemContent>
          </StatsItem>
          {/* Gols Marcados */}
          <StatsItem>
            <ItemTitle>GM</ItemTitle>
            <ItemContent>{props.statsGoalsMarked}</ItemContent>
          </StatsItem>
          {/* Cartões Amarelos */}
          <StatsItem>
            <ItemTitle>CA</ItemTitle>
            <ItemContent>{props.statsYellowCards}</ItemContent>
          </StatsItem>
          {/* Cartões Vermelhos */}
          <StatsItem>
            <ItemTitle>CV</ItemTitle>
            <ItemContent>{props.statsRedCards}</ItemContent>
          </StatsItem>
        </StatsGroup>
      </StatsContainer>
    </Container>
  );
};

export default PlayerCard;
