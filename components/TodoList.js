import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import TodoItem from "./TodoItem";
import styles from "../assets/styles";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("database.db");

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [empty, setEmpty] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM todos", [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; i++) {
          temp.push(results.rows.item(i));
        }

        setTodos(temp);

        if (results.rows.length >= 1) {
          setEmpty(false);
        } else {
          setEmpty(true);
        }
      });
    });
  }, []);

  const renderItem = ({ item }) => {
    return <TodoItem todo={item} />;
  };

  const emptyItem = (isEmpty) => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Boş data</Text>
      </View>
    );
  };

  return (
    <View style={styles.todoWrapper}>
      {empty ? (
        emptyItem(empty)
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
