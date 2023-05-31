import React from "react";

import { Container } from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

import theme from "../../styles/theme";

import { GestureResponderEvent, TouchableOpacity } from "react-native";

type Props = {
  iconName: string;
  size: number;
  onIconPress?: (event: GestureResponderEvent) => void;
};

const IconBox = (props: Props) => {
  return (
    <Container>
      <TouchableOpacity>
        <Icon
          name={props.iconName}
          size={props.size}
          color={theme.colors.white}
          onPress={props.onIconPress}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default IconBox;
