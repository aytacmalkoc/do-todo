import React, { useState } from "react";
import styles from "../assets/styles";
import Swipeout from "react-native-swipeout";
import { TouchableOpacity, View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import colors from "../assets/colors";

Feather.loadFont();

const TodoItem = ({ todo }) => {
  const [rowIndex, setRowIndex] = useState(todo.id);

  const swipeLeft = [
    {
      text: <Feather name="check" size={34} color={colors.white} />,
      backgroundColor: colors.green,
      color: colors.white,
    },
  ];

  const swipeRight = [
    {
      text: <Feather name="trash" size={34} color={colors.white} />,
      backgroundColor: colors.red,
      color: colors.white,
      onPress: () => {
        setTodos(todos.filter((item) => item.id != todo.id));
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
