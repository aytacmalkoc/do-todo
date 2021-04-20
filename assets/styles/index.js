import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../colors";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 37,
    padding: 27,
  },
  headerTitle: {
    fontFamily: "FuturaBold",
    fontSize: 43,
  },
  headerIcon: {
    width: 35,
    height: 35,
    backgroundColor: colors.fff,
    shadowColor: colors.pink,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  todoWrapper: {
    marginTop: 23,
    marginHorizontal: 27,
  },
  todoItemSwipe: {
    backgroundColor: colors.todoBackground,
    height: 148,
    borderRadius: 28,
    marginBottom: 24,
  },
  todoItemWrapper: {
    backgroundColor: colors.todoBackground,
    paddingLeft: 27,
    paddingRight: 24,
    borderRadius: 28,
    marginBottom: 24,
    height: 148,
  },
  todoItemTitle: {
    color: colors.black,
    paddingTop: 21,
    fontSize: 19,
    fontWeight: "bold",
  },
  todoItemSubtitle: {
    color: colors.grayDark,
    fontFamily: "LessRegular",
    fontSize: 17,
    paddingTop: 4,
  },
  todoItemContent: {
    color: colors.black,
    opacity: 0.5,
    paddingTop: 10,
    paddingBottom: 22,
  },
  newTodoWrapper: {
    padding: 27,
  },
  newTodoTitleInput: {
    fontSize: 14,
  },
  newTodoSubTitleInput: {
    fontSize: 14,
    marginTop: 10,
  },
  newTodoContentInput: {
    fontSize: 14,
    marginTop: 10,
    height,
  },
});

export default styles;
