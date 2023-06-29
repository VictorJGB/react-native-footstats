import { useState, useEffect, useCallback } from "react";

import { ScrollView, Text } from "react-native";

import HomeScreen from "./src/screens/Home";
import TeamsScreen from "./src/screens/Teams";
import PlayersScreen from "./src/screens/Players";
import MatchesScreen from "./src/screens/Matches";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import * as SplashScreen from "expo-splash-screen";

import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import Navbar from "./src/components/Navbar";

export default function App() {
  const Stack = createNativeStackNavigator();

  // async load of fonts
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        onLayout={onLayoutRootView}
        style={{ flex: 1, backgroundColor: "#FFF" }}
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Teams" component={TeamsScreen} />
            <Stack.Screen name="Players" component={PlayersScreen} />
            <Stack.Screen name="Matches" component={MatchesScreen} />
          </Stack.Navigator>
          <Navbar />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}
