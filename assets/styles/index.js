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
    fontFamily: "Nunito_700Bold",
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
    backgroundColor: colors.red,
    width: 95,
    height: 148,
    borderRadius: 28,
    marginBottom: 24,
    marginLeft: 14,
    justifyContent: "center",
    alignItems: "center",
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
    fontFamily: "Nunito_400Regular",
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
    paddingBottom: 14,
    borderBottomColor: colors.pink,
    borderBottomWidth: 0.2,
  },
  newTodoSubTitleInput: {
    fontSize: 14,
    paddingBottom: 14,
    marginTop: 25,
    borderBottomColor: colors.pink,
    borderBottomWidth: 0.2,
  },
  newTodoContentInput: {
    fontSize: 14,
    marginTop: 25,
    height,
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default styles;
