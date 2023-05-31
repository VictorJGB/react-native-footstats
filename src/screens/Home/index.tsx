import React from "react";
import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../@types/stackTypes";
import { Button } from "react-native";

type Props = {};

const HomeScreen = (props: Props) => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Container>
      <Title>Home</Title>
      <Button
        onPress={() => {
          navigation.navigate("Teams");
        }}
        title="Teams"
      />
    </Container>
  );
};

export default HomeScreen;
