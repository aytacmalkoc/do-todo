import "react-native-gesture-handler";
import React, { useState } from "react";
// import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { StatusBar } from "react-native";

// screens
import HomeScreen from "./screens/HomeScreen";
import NewTodoScreen from "./screens/NewTodoScreen";

// assets
import IntroSlider from "./components/IntroSlider";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/dev";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else if (!showRealApp) {
    return <IntroSlider onChange={(res) => setShowRealApp(res)} />;
  } else {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => {
              return {
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.ModalPresentationIOS,
              };
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewTodo"
              component={NewTodoScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          animated={true}
          backgroundColor="#ffffff"
        />
      </>
    );
  }
};

export default App;
