import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import TodoItem from "./TodoItem";
import styles from "../assets/styles";
import * as SQLite from "expo-sqlite";
import LottieView from "lottie-react-native";

const db = SQLite.openDatabase("database.db");

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [empty, setEmpty] = useState([]);

  useEffect(() => {
    db.transaction((txn) => {
      txn.executeSql(
        "SELECT * FROM todos WHERE is_done = 0 ORDER BY created_at DESC",
        [],
        (tx, { rows }) => {
          setTodos(rows._array);

          // console.log(rows._array);

          rows.length >= 1 ? setEmpty(false) : setEmpty(true);
        }
      );
    });
  }, [todos]);

  const renderItem = ({ item }) => {
    return <TodoItem todo={item} />;
  };

  const emptyItem = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <LottieView
          style={{ width: 300, height: 300 }}
          autoPlay={true}
          loop={true}
          cacheStrategy="strong"
          source={require("../assets/json/confused-animation.json")}
        />
        <Text>burası çok sessiz..</Text>
      </View>
    );
  };

  return (
    <View style={styles.todoWrapper}>
      {empty ? (
        emptyItem()
      ) : (
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(todo) => todo.id}
          horizontal={false}
          refreshing={true}
        />
      )}
    </View>
  );
};

export default TodoList;
