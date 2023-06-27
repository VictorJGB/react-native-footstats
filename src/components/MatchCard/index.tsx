import React from "react";

import {
  Container,
  MatchContainer,
  TeamContainer,
  StatsContainer,
  ScoreContainer,
  DivisionLine,
  StatsGroup,
  StatsItem,
  ItemTitle,
  ItemContent,
} from "./styles";
import { Image, ImageSourcePropType } from "react-native";

import { Flex, Text } from "@react-native-material/core";

import Icon from "react-native-vector-icons/MaterialIcons";
import theme from "../../styles/theme";

type Props = {
  homeTeamImage: ImageSourcePropType;
  awayTeamImage: ImageSourcePropType;
  homeTeamName: string;
  awayTeamName: string;
  match_date: string;
  match_hour: string;
  homeTeamScore: number;
  awayTeamScore: number;
  match_referee: string;
  match_stadium: string;
};

const MatchCard = (props: Props) => {
  return (
    <Container>
      {/* Team Info */}
      <MatchContainer>
        <Flex
          direction="row"
          items="center"
          justify="around"
          style={{ gap: 18, flexBasis: "80%" }}
        >
          {/* Home Team Container */}
          <TeamContainer>
            <Image
              style={{ maxWidth: "90%" }}
              resizeMethod="scale"
              source={props.homeTeamImage}
            />

            <Text
              style={{ fontSize: 20, fontWeight: "600" }}
              color={theme.colors.white}
            >
              {props.homeTeamName}
            </Text>
          </TeamContainer>
          <Text
            style={{ fontSize: 20, fontWeight: "600" }}
            color={theme.colors.white}
          >
            X
          </Text>
          {/* Away Team Container */}
          <TeamContainer>
            <Image
              style={{ maxWidth: "90%" }}
              resizeMethod="scale"
              source={props.awayTeamImage}
            />

            <Text
              style={{ fontSize: 20, fontWeight: "600" }}
              color={theme.colors.white}
            >
              {props.awayTeamName}
            </Text>
          </TeamContainer>
        </Flex>
        <Flex items="center" justify="center">
          <Text
            style={{
              fontSize: 14,
              color: theme.colors.white,
              fontWeight: "600",
            }}
          >
            {props.match_date}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: theme.colors.white,
              fontWeight: "600",
            }}
          >
            {props.match_hour}
          </Text>
        </Flex>
      </MatchContainer>

      {/* Match Info */}
      <StatsContainer>
        {/* Score */}
        <ScoreContainer>
          <Text
            style={{
              fontSize: 32,
              fontFamily: theme.fonts.bold,
              color: theme.colors.primary,
            }}
          >
            {props.homeTeamScore}
          </Text>
          <DivisionLine />
          <Text
            style={{
              fontSize: 32,
              fontFamily: theme.fonts.bold,
              color: theme.colors.primary,
            }}
          >
            {props.awayTeamScore}
          </Text>
        </ScoreContainer>

        <StatsGroup>
          {/* Juiz */}
          <StatsItem>
            <ItemTitle>
              <Icon name="sports" size={32} color={theme.colors.primary} />
            </ItemTitle>
            <ItemContent>{props.match_referee}</ItemContent>
          </StatsItem>
          {/* Estádio */}
          <StatsItem>
            <ItemTitle>
              <Icon name="home" size={32} color={theme.colors.primary} />
            </ItemTitle>
            <ItemContent>{props.match_stadium}</ItemContent>
          </StatsItem>
        </StatsGroup>
      </StatsContainer>
    </Container>
  );
};

export default MatchCard;
