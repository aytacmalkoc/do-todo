import React, { useState } from "react";
import styles from "../assets/styles";
import Swipeout from "react-native-swipeout";
import {
  TouchableOpacity,
  View,
  Text,
  Alert,
  ToastAndroid,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import colors from "../assets/colors";
import * as SQLite from "expo-sqlite";
import * as Device from "expo-device";

const db = SQLite.openDatabase("database.db");

Feather.loadFont();

const TodoItem = ({ todo }) => {
  const swipeLeft = [
    {
      text: <Feather name="check" size={34} color={colors.white} />,
      backgroundColor: colors.green,
      color: colors.white,
      onPress: () => {
        db.transaction((txn) => {
          txn.executeSql(
            "UPDATE todos SET is_done=? WHERE id=?",
            [1, todo.id],
            (tx, results) => {
              if (Device.osName == "Android") {
                ToastAndroid.showWithGravityAndOffset(
                  `${todo.title} tamamlandı.`,
                  ToastAndroid.LONG,
                  ToastAndroid.TOP
                );
              }
            }
          );
        });
      },
    },
  ];

  const swipeRight = [
    {
      text: <Feather name="trash" size={34} color={colors.white} />,
      backgroundColor: colors.red,
      color: colors.white,
      onPress: () => {
        db.transaction((txn) => {
          txn.executeSql(
            "DELETE FROM todos WHERE id=?",
            [todo.id],
            (tx, results) => {
              if (results.rowsAffected > 0) {
                Alert.alert("Başarılı", "Todo başarıyla silindi", [
                  {
                    text: "Tamam",
                    style: "cancel",
                  },
                ]);
              }
            }
          );
        });
      },
    },
  ];

  return (
    <Swipeout
      left={swipeLeft}
      right={swipeRight}
      style={styles.todoItemSwipe}
      autoClose={true}
    >
      <TouchableOpacity>
        <View style={styles.todoItemWrapper}>
          <Text style={styles.todoItemTitle}>{todo.title}</Text>
          <Text style={styles.todoItemSubtitle}>{todo.subtitle}</Text>
          <Text style={styles.todoItemContent}>{todo.content}</Text>
        </View>
      </TouchableOpacity>
    </Swipeout>
  );
};

export default TodoItem;
