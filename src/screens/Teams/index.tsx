import { Button, Text } from "react-native";
import React from "react";
import { Container } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { StackTypes } from "../../@types/stackTypes";

type Props = {};

const TeamsScreen = (props: Props) => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Container>
      <Text>TeamsScreen</Text>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Go Back"
      />
    </Container>
  );
};

export default TeamsScreen;
