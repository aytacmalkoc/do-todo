import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "../assets/styles";
import colors from "../assets/colors";
import TodoList from "../components/TodoList";

Feather.loadFont();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          {/* Header */}
          <View style={styles.headerWrapper}>
            <Text style={styles.headerTitle}>Do Todo</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("NewTodo")}
              hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <View style={styles.headerIcon}>
                <Feather name="plus" size={25} color={colors.red} />
              </View>
            </TouchableOpacity>
          </View>

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

export default Home;
