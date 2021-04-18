import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../colors";

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
    width: 55,
    height: 55,
    backgroundColor: colors.black,
    borderRadius: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  todoWrapper: {
    marginTop: 23,
    marginHorizontal: 27,
  },
  todoItemSwipe: {
    backgroundColor: "#F7F7F7",
    height: 148,
    borderRadius: 28,
    marginBottom: 24,
  },
  todoItemWrapper: {
    backgroundColor: "#F7F7F7",
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
});

export default styles;
