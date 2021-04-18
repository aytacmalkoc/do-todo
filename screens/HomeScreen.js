import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swipeout from "react-native-swipeout";
import Feather from "react-native-vector-icons/Feather";
import styles from "../assets/styles";
import colors from "../assets/colors";
import todoData from "../assets/data/todos";

Feather.loadFont();

const App = () => {
  const [rowIndex, setRowIndex] = useState(null);
  const [todos, setTodos] = useState(todoData);

  const onSwipeOpen = (index) => {
    setRowIndex(index);
  };

  const onSwipeClose = (index) => {
    if (index === rowIndex) {
      setRowIndex(null);
    }
  };

  const swipeoutLeftBtns = [
    {
      text: <Feather name="check" size={34} color={colors.white} />,
      backgroundColor: colors.green,
      color: colors.white,
      onPress: () => {
        console.log(rowIndex);
      },
    },
  ];

  const swipeoutRightBtns = [
    {
      text: <Feather name="trash" size={34} color={colors.white} />,
      backgroundColor: colors.red,
      color: colors.white,
      onPress: () => {
        setTodos(todos.filter((todo) => todo.id != rowIndex));
      },
    },
  ];

  const todoItem = ({ item }) => {
    return (
      <Swipeout
        left={swipeoutLeftBtns}
        right={swipeoutRightBtns}
        style={styles.todoItemSwipe}
        autoClose={true}
        onOpen={() => onSwipeOpen(item.id)}
        onClose={() => onSwipeClose(item.id)}
      >
        <TouchableOpacity>
          <View style={styles.todoItemWrapper}>
            <Text style={styles.todoItemTitle}>{item.title}</Text>
            <Text style={styles.todoItemSubtitle}>{item.subtitle}</Text>
            <Text style={styles.todoItemContent}>{item.content}</Text>
          </View>
        </TouchableOpacity>
      </Swipeout>
    );
  };

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
          <View style={styles.todoWrapper}>
            <FlatList
              data={todos}
              renderItem={todoItem}
              keyExtractor={(todo) => todo.id}
              horizontal={false}
              refreshing={true}
            />
          </View>
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
