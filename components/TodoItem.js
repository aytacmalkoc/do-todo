import React, { useRef, useState } from "react";
import styles from "../assets/styles";
import { View, Text, Alert, Animated, TouchableHighlight } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import colors from "../assets/colors";
import * as SQLite from "expo-sqlite";
import Swipeable from "react-native-gesture-handler/Swipeable";

const db = SQLite.openDatabase("database.db");

Feather.loadFont();

const TodoItem = ({ todo }) => {
  const doneTodo = () => {
    db.transaction((txn) => {
      txn.executeSql(
        "UPDATE todos SET is_done=? WHERE id=?",
        [1, todo.id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log("güncellendi");
          }
        }
      );
    });
  };

  const deleteTodo = () => {
    db.transaction((txn) => {
      txn.executeSql(
        "DELETE FROM todos WHERE id=?",
        [todo.id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log("silindi");
          }
        }
      );
    });
  };

  const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 140],
      outputRange: [0, 1],
    });

    return (
      <TouchableHighlight underlayColor="transparent" onPress={deleteTodo}>
        <View style={styles.todoItemSwipe}>
          <Animated.Text
            style={{ transform: [{ scale }, { rotate: "180deg" }] }}
          >
            <Feather name="trash" size={32} color={colors.white} />
          </Animated.Text>
        </View>
      </TouchableHighlight>
    );
  };

  const LeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 140],
      outputRange: [0, 1],
    });

    return (
      <TouchableHighlight underlayColor="transparent" onPress={doneTodo}>
        <View
          style={[
            styles.todoItemSwipe,
            { backgroundColor: colors.green, marginLeft: 0, marginRight: 14 },
          ]}
        >
          <Animated.Text style={{ transform: [{ scale }] }}>
            <Feather name="check" size={32} color={colors.white} />
          </Animated.Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <Swipeable
      renderLeftActions={LeftActions}
      renderRightActions={RightActions}
    >
      <TouchableHighlight>
        <Animated.View style={[styles.todoItemWrapper]}>
          <Text style={styles.todoItemTitle}>{todo.title}</Text>
          <Text style={styles.todoItemSubtitle}>{todo.subtitle}</Text>
          <Text style={styles.todoItemContent}>{todo.content}</Text>
        </Animated.View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default TodoItem;
