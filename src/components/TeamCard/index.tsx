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

type Props = {};

const Card = (props: Props) => {
  const BarcelonaImg = require("../../assets/barcelona.png");

  return (
    <Container>
      {/* Team Info */}
      <TeamContainer>
        <Logo source={BarcelonaImg} />
        <TeamTitle>Barcelona F.C</TeamTitle>
        <TeamSubtitle>1º lugar</TeamSubtitle>
      </TeamContainer>

      {/* Team Stats Info */}
      <StatsContainer>
        {/* Points */}
        <PtsContainer>
          <PtsTitle>Pontos</PtsTitle>
          <PtsContent>82 pontos</PtsContent>
        </PtsContainer>

        <DivisionLine />

        <StatsGroup>
          {/* Victory */}
          <StatsItem>
            <ItemTitle>V</ItemTitle>
            <ItemContent>26</ItemContent>
          </StatsItem>
          {/* Defeat */}
          <StatsItem>
            <ItemTitle>D</ItemTitle>
            <ItemContent>4</ItemContent>
          </StatsItem>
          {/* Draw */}
          <StatsItem>
            <ItemTitle>E</ItemTitle>
            <ItemContent>3</ItemContent>
          </StatsItem>
        </StatsGroup>
      </StatsContainer>
    </Container>
  );
};

export default Card;
