import "react-native-gesture-handler";
import React from "react";
import * as Font from "expo-font";
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

const Stack = createStackNavigator();

const fonts = {
  FuturaBold: require("./assets/fonts/Futura-Bold.ttf"),
  LessRegular: require("./assets/fonts/Less-Regular.ttf"),
  RalewayRegular: require("./assets/fonts/Raleway-Regular.ttf"),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
    showRealApp: false,
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
    if (!this.state.showRealApp) {
      return (
        <IntroSlider onChange={(res) => this.setState({ showRealApp: res })} />
      );
    }
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
}
