import React, { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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
  const [loading, setLoading] = useState(false);

  const saveTodo = async () => {
    setLoading(true);
    db.transaction((txn) => {
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS todos(id INTEGER PRIMARY KEY  AUTOINCREMENT, title TEXT, subtitle TEXT, content TEXT, is_done BOOLEAN DEFAULT 0 , created_at DATETIME DEFAULT current_timestamp)",
        []
      );
      txn.executeSql(
        "INSERT INTO todos(title, subtitle, content) VALUES(?, ?, ?)",
        [title, subtitle, content],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            setLoading(false);
            navigation.navigate("Home");
          }
        }
      );
    });
  };

  return (
    <View style={[styles.container]}>
      <Modal
        transparent={true}
        animationType={"none"}
        visible={loading}
        onRequestClose={() => {
          console.log("close modal");
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator animating={loading} />
          </View>
        </View>
      </Modal>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            hitSlop={{ top: 40, left: 40, right: 40, bottom: 40 }}
          >
            <Text style={{ color: colors.red }}>iptal</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { fontSize: 21 }]}>Yeni Todo</Text>
          <TouchableOpacity
            onPress={saveTodo}
            hitSlop={{ top: 40, left: 40, right: 40, bottom: 40 }}
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
            placeholder="içerik"
            multiline={true}
            numberOfLines={50}
            value={content}
            onChangeText={(content) => setContent(content)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NewTodoScreen;
