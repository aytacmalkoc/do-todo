import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../assets/colors";

const SlideItem = ({ item }) => {
  return (
    <View style={styles.slide}>
      <LottieView
        style={{ width: 300, height: 300 }}
        autoPlay={true}
        loop={true}
        cacheStrategy="strong"
        source={item.source}
        speed={item.speed}
        resizeMode="contain"
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  text: {
    color: colors.grayLight,
    textAlign: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    color: colors.red,
    textAlign: "center",
  },
});

export default SlideItem;
