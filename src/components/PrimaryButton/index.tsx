import { ColorValue, GestureResponderEvent } from "react-native";

import React from "react";

import { StyledButton } from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";
import theme from "../../styles/theme";

type Props = {
  btnTitle: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: number | ColorValue;
  onBtnPress?: (event: GestureResponderEvent) => void;
};

const PrimaryButton = (props: Props) => {
  return (
    <StyledButton
      title={props.btnTitle}
      onPress={props.onBtnPress}
      trailing={
        props.iconName ? (
          <Icon
            name={props.iconName}
            size={props.iconSize ?? 20}
            color={props.iconColor ?? theme.colors.white}
          />
        ) : (
          ""
        )
      }
    />
  );
};

export default PrimaryButton;
