import React, { ReactNode } from "react";
import { StyledText } from "./styles";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

type Props = {
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
};

const Title = (props: Props) => {
  return <StyledText style={props.style}>{props.children}</StyledText>;
};

export default Title;
