import React from "react";

import { Container } from "./styles";

import IconBox from "../IconBox";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../@types/stackTypes";

type Props = {};

const Navbar = (props: Props) => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Container>
      <IconBox
        iconName="home"
        size={35}
        onIconPress={() => {
          navigation.navigate("Home");
        }}
      />
      <IconBox
        iconName="group"
        size={35}
        onIconPress={() => {
          navigation.navigate("Teams");
        }}
      />
      <IconBox
        iconName="person"
        size={35}
        onIconPress={() => {
          navigation.navigate("Players");
        }}
      />
      <IconBox
        iconName="date-range"
        size={35}
        onIconPress={() => {
          navigation.navigate("Matches");
        }}
      />
    </Container>
  );
};

export default Navbar;
