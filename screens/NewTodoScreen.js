import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Alert,
} from "react-native";
import * as SQLite from "expo-sqlite";
import Feather from "react-native-vector-icons/Feather";
import colors from "../assets/colors";
import styles from "../assets/styles";

const db = SQLite.openDatabase("database.db");

Feather.loadFont();

const NewTodoScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");

  const saveTodo = async () => {
    db.transaction((txn) => {
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS todos(id INTEGER PRIMARY KEY  AUTOINCREMENT, title TEXT, subtitle TEXT, content TEXT, is_done BOOLEAN DEFAULT 0 , created_at DATETIME DEFAULT current_timestamp)",
        []
      );
      txn.executeSql(
        "INSERT INTO todos(title, subtitle, content) VALUES(?, ?, ?)",
        [title, subtitle, content],
        (tx, results) => {
          // console.log(`results => ${results.rowsAffected}`);

          if (results.rowsAffected > 0) {
            // Alert.alert("eklendi");
            navigation.navigate("Home");
          }
        }
      );
    });
  };

  return (
    <View style={[styles.container]}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={{ color: colors.red }}>iptal</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { fontSize: 21 }]}>Yeni Todo</Text>
          <TouchableOpacity
            onPress={saveTodo}
            hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
          >
            <Text style={{ color: colors.red }}>kaydet</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.newTodoWrapper}>
          <TextInput
            style={styles.newTodoTitleInput}
            placeholder="başlık"
            autoFocus={true}
            value={title}
            onChangeText={(title) => setTitle(title)}
          />
          <TextInput
            style={styles.newTodoSubTitleInput}
            placeholder="alt başlık"
            value={subtitle}
            onChangeText={(subtitle) => setSubtitle(subtitle)}
          />
          <TextInput
            style={styles.newTodoContentInput}
            multiline={true}
            numberOfLines={50}
            value={content}
            onChangeText={(content) => setContent(content)}
          />
        </View>
      </SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor={colors.white}
      />
    </View>
  );
};

export default NewTodoScreen;
