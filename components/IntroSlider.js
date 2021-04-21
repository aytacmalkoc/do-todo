import React, { useEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import AppIntroSlider from "react-native-app-intro-slider";
import SlideItem from "../components/SlideItem";

import slides from "../assets/data/slides";
import colors from "../assets/colors";

const nextButton = () => {
  return (
    <View
      style={{
        width: 44,
        height: 44,
        borderColor: colors.pink,
        borderWidth: 1,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialIcons name="navigate-next" size={24} color={colors.red} />
    </View>
  );
};

const skipButton = () => {
  return (
    <View
      style={{
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.grayDark }}>atla</Text>
    </View>
  );
};

const doneButton = () => {
  return (
    <View
      style={{
        width: "auto",
        height: 44,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.red }}>başlayalım</Text>
    </View>
  );
};

const IntroSlider = (props) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(isDone);
    }
  }, [isDone]);

  const doneHandler = () => {
    setIsDone(true);
  };

  return (
    <>
      <AppIntroSlider
        renderItem={SlideItem}
        data={slides}
        showSkipButton={true}
        onDone={doneHandler}
        activeDotStyle={{ backgroundColor: colors.red }}
        dotStyle={{ backgroundColor: colors.pink }}
        renderNextButton={nextButton}
        renderSkipButton={skipButton}
        renderDoneButton={doneButton}
      />
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#ffffff"
      />
    </>
  );
};

export default IntroSlider;
