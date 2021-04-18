import "react-native-gesture-handler";
import React from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

const fonts = {
  FuturaBold: require("./assets/fonts/Futura-Bold.ttf"),
  LessRegular: require("./assets/fonts/Less-Regular.ttf"),
  RalewayRegular: require("./assets/fonts/Raleway-Regular.ttf"),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(fonts);
    this.setState({
      fontsLoaded: true,
    });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
