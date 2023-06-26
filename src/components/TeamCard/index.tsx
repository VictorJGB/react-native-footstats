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
import { ImageSourcePropType } from "react-native";

type Props = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  statsPTS: number;
  statsVictory: number;
  statsDefeat: number;
  statsDrawn: number;
};

const Card = (props: Props) => {
  return (
    <Container>
      {/* Team Info */}
      <TeamContainer>
        <Logo source={props.image} />
        <TeamTitle>{props.title}</TeamTitle>
        <TeamSubtitle>{props.subtitle}</TeamSubtitle>
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

export default Card;
