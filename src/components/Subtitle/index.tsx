import React, { ReactNode } from "react";
import { StyledSubtitle } from "./styles";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

type Props = {
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
};

const Subtitle = (props: Props) => {
  return <StyledSubtitle style={props.style}>{props.children}</StyledSubtitle>;
};

export default Subtitle;
