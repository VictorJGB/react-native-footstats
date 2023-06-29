import React from "react";

import {
  Container,
  TeamContainer,
  Logo,
  TeamTitle,
  TeamSubtitle,
  StatsContainer,
  PtsContainer,
  PtsTitle,
  PtsContent,
  DivisionLine,
  StatsGroup,
  StatsItem,
  ItemTitle,
  ItemContent,
} from "./styles";
import { Flex } from "@react-native-material/core";

type Props = {
  image?: string;
  title: string;
  subtitle: string;
  statsPTS: string;
  statsVictory: string;
  statsDefeat: string;
  statsDrawn: string;
};

const TeamCard = (props: Props) => {
  return (
    <Container>
      {/* Team Info */}
      <TeamContainer>
        <Flex items="center" justify="center">
          {props.image && <Logo source={{ uri: props.image }} />}
        </Flex>
        <Flex items="center" justify="center">
          <TeamTitle>{props.title}</TeamTitle>
          <TeamSubtitle>{props.subtitle}</TeamSubtitle>
        </Flex>
      </TeamContainer>

      {/* Team Stats Info */}
      <StatsContainer>
        {/* Points */}
        <PtsContainer>
          <PtsTitle>Pontos</PtsTitle>
          <PtsContent>{props.statsPTS}</PtsContent>
        </PtsContainer>

        <DivisionLine />

        <StatsGroup>
          {/* Victory */}
          <StatsItem>
            <ItemTitle>V</ItemTitle>
            <ItemContent>{props.statsVictory}</ItemContent>
          </StatsItem>
          {/* Defeat */}
          <StatsItem>
            <ItemTitle>D</ItemTitle>
            <ItemContent>{props.statsDefeat}</ItemContent>
          </StatsItem>
          {/* Draw */}
          <StatsItem>
            <ItemTitle>E</ItemTitle>
            <ItemContent>{props.statsDrawn}</ItemContent>
          </StatsItem>
        </StatsGroup>
      </StatsContainer>
    </Container>
  );
};

export default TeamCard;
