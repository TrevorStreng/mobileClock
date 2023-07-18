import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { HeaderBackButton } from "@react-navigation/stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [time, setTime] = useState(20 * 60);
  const [time2, setTime2] = useState(20 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isRunning2, setIsRunning2] = useState(false);
  const [colorP1, setColorP1] = useState("red");
  const [colorP2, setColorP2] = useState("blue");

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

  toggleColorP1 = (color) => {
    setColorP1(color);
  };
  toggleColorP2 = (color) => {
    setColorP2(color);
  };

  const MainPage = ({ navigation }) => {
    return (
      <Pressable style={styles.mainPage} onPress={this.switchPlayers}>
        <View style={[styles.topHalf, { backgroundColor: colorP1 }]}>
          <Text style={[styles.text, styles.textP1]}>{formatTime(time)}</Text>
        </View>
        <View style={[styles.bottomHalf, { backgroundColor: colorP2 }]}>
          <Text style={styles.text}>{formatTime(time2)}</Text>
        </View>
      </Pressable>
    );
  };
  const StartPage = ({ navigation }) => {
    return (
      <>
        <Pressable
          style={styles.start}
          onPress={() => {
            navigation.navigate("Main");
            start();
          }}
        >
          <View style={styles.titleView}>
            <Text>Chess Timer</Text>
          </View>
          <Button
            title={"Settings"}
            onPress={() => navigation.navigate("Settings")}
            style={styles.settingsButton}
          ></Button>
          <View style={styles.startView}>
            <Text>Click anywhere to start</Text>
          </View>
        </Pressable>
      </>
    );
  };

  const SettingsPage = ({ navigation }) => {
    return (
      <>
        <View style={styles.container}>
          <Text>Pick Your Colors</Text>
          <View style={styles.playerContainers}>
            <Text>Player1</Text>
            <View style={styles.firstRow}>
              <Pressable
                style={[styles.red, styles.boxSize]}
                onPress={() => toggleColorP1("red")}
              ></Pressable>
              <Pressable
                style={[styles.blue, styles.boxSize]}
                onPress={() => toggleColorP1("blue")}
              ></Pressable>
            </View>
            <View style={styles.secondRow}>
              <Pressable
                style={[styles.green, styles.boxSize]}
                onPress={() => toggleColorP1("green")}
              ></Pressable>
              <Pressable
                style={[styles.yellow, styles.boxSize]}
                onPress={() => toggleColorP1("yellow")}
              ></Pressable>
            </View>
          </View>
          <View style={styles.playerContainers}>
            <Text>Player2</Text>
            <View style={styles.firstRow}>
              <Pressable
                style={[styles.red, styles.boxSize]}
                onPress={() => toggleColorP2("red")}
              ></Pressable>
              <Pressable
                style={[styles.blue, styles.boxSize]}
                onPress={() => toggleColorP2("blue")}
              ></Pressable>
            </View>
            <View style={styles.secondRow}>
              <Pressable
                style={[styles.green, styles.boxSize]}
                onPress={() => toggleColorP2("green")}
              ></Pressable>
              <Pressable
                style={[styles.yellow, styles.boxSize]}
                onPress={() => toggleColorP2("yellow")}
              ></Pressable>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Main" component={MainPage}></Stack.Screen>
        <Stack.Screen name="Settings" component={SettingsPage}></Stack.Screen>
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

  // Starting Page
  start: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  startView: {
    flex: 2,
  },
  settingsButton: {
    flex: 2,
  },

  // Settings page
  // Color Section
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  playerContainers: {
    padding: 10,
  },
  firstRow: {
    flexDirection: "row",
  },
  secondRow: {
    flexDirection: "row",
  },
  boxSize: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
  },
  red: {
    backgroundColor: "red",
  },
  blue: {
    backgroundColor: "blue",
  },
  green: {
    backgroundColor: "green",
  },
  yellow: {
    backgroundColor: "yellow",
  },
});
