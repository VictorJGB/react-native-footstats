import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackNavigation = {
  Home: undefined;
  Teams: undefined;
  Players: undefined;
  Matches: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
