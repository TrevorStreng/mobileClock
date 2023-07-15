import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [time, setTime] = useState(20 * 60);
  const [time2, setTime2] = useState(20 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isRunning2, setIsRunning2] = useState(false);

  useEffect(() => {
    let intervalID;
    let intervalID2;
    if (time <= 0) return alert("Player 1 is out of time");
    if (time2 <= 0) return alert("Player 2 is out of time");
    if (isRunning) intervalID = setInterval(tick, 1000);
    if (isRunning2) intervalID2 = setInterval(tick2, 1000);
    return () => {
      clearInterval(intervalID);
      clearInterval(intervalID2);
    };
  }, [time, time2, isRunning, isRunning2]);

  tick = () => {
    setTime((t) => t - 1);
  };
  tick2 = () => {
    setTime2((t) => t - 1);
  };

  start = () => setIsRunning(true);

  switchPlayers = () => {
    setIsRunning(!isRunning);
    setIsRunning2(!isRunning2);
  };

  formatTime = (t) => {
    let min = Math.floor(t / 60);
    let sec = t % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  // toggleStartScreen = () =>

  const mainPage = ({ navigator }) => {
    return (
      <Pressable style={styles.mainPage} onPress={this.switchPlayers}>
        <View style={styles.topHalf}>
          <Text style={[styles.text, styles.textP1]}>{formatTime(time)}</Text>
        </View>
        <View style={styles.bottomHalf}>
          <Text style={styles.text}>{formatTime(time2)}</Text>
        </View>
      </Pressable>
    );
  };
  // const startPage = ({ navigator }) => {
  //   return (
  //     <View>
  //       <button title="Start"></button>
  //     </View>
  //   );
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={mainPage}></Stack.Screen>
        {/* <Stack.Screen name="start" component={startPage}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    backgroundColor: "red",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: "blue",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
  },
  textP1: {
    transform: [{ rotate: "180deg" }],
  },
});
