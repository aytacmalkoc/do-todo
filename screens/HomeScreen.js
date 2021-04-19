import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "../assets/styles";
import colors from "../assets/colors";
import TodoList from "../components/TodoList";

Feather.loadFont();

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          {/* Header */}
          <View style={styles.headerWrapper}>
            <Text style={styles.headerTitle}>Do Todo</Text>
            <View style={styles.headerIcon}>
              <Feather name="plus" size={25} color={colors.white} />
            </View>
          </View>

          {/* Todo Items */}
          <TodoList />
        </SafeAreaView>
      </ScrollView>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor={colors.white}
      />
    </View>
  );
};

export default App;
