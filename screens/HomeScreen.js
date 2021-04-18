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

export default class App extends React.Component {
  state = {
    rowIndex: null,
    todos: todoData,
    fontsLoaded: false,
  };

  _swipeoutLeftBtns = [
    {
      text: <Feather name="check" size={34} color={colors.white} />,
      backgroundColor: colors.green,
      color: colors.white,
      onPress: () => {
        console.log(this.state.rowIndex);
      },
    },
  ];

  _swipeoutRightBtns = [
    {
      text: <Feather name="trash" size={34} color={colors.white} />,
      backgroundColor: colors.red,
      color: colors.white,
      onPress: () => {
        this.setState({
          todos: this.state.todos.filter(
            (todo) => todo.id != this.state.rowIndex
          ),
        });
      },
    },
  ];

  _onSwipeOpen = (index) => this.setState({ rowIndex: index });

  _onSwipeClose = (index) => {
    if (index === this.state.rowIndex) {
      this.setState({ rowIndex: null });
    }
  };

  _todoItem = ({ item }) => {
    return (
      <Swipeout
        left={this._swipeoutLeftBtns}
        right={this._swipeoutRightBtns}
        style={styles.todoItemSwipe}
        autoClose={true}
        onOpen={() => this._onSwipeOpen(item.id)}
        onClose={() => this._onSwipeClose(item.id)}
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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaView>
            {/* Header */}
            <View style={styles.headerWrapper}>
              <Text style={styles.headerTitle}>Title</Text>
              <View style={styles.headerIcon}>
                <Feather name="plus" size={25} color={colors.white} />
              </View>
            </View>

            {/* Todo Items */}
            <View style={styles.todoWrapper}>
              <FlatList
                data={this.state.todos}
                renderItem={this._todoItem}
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
  }
}
