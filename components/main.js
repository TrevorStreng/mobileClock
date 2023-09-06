import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import { SvgUri } from "react-native-svg";

export default function Main({ navigation }) {
  const [time, setTime] = useState(10 * 60);
  const [time2, setTime2] = useState(10 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isRunning2, setIsRunning2] = useState(false);
  // const [colorP1, setColorP1] = useState("red");
  // const [colorP2, setColorP2] = useState("blue");
  const { colorP1 } = navigation.params;

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

  const tick = () => {
    setTime((t) => t - 1);
  };
  const tick2 = () => {
    setTime2((t) => t - 1);
  };

  const start = () => setIsRunning(true);

  const switchPlayers = () => {
    setIsRunning(!isRunning);
    setIsRunning2(!isRunning2);
  };

  const formatTime = (t) => {
    let min = Math.floor(t / 60);
    let sec = t % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <Pressable style={styles.topHalf}>
        <View style={{ backgroundColor: colorP1 }}>
          <Text style={[styles.text, styles.textP1]}>{formatTime(time)}</Text>
        </View>
      </Pressable>
      <View style={styles.middle}>
        <Pressable>
          <View style={styles.pause}>
            <View style={styles.pauseBar}></View>
            <View style={styles.pauseBar}></View>
          </View>
        </Pressable>
        <Pressable
          title={"Settings"}
          onPress={() => navigation.navigate("Settings")}
          style={styles.settings}
        >
          <Text style={styles.settingsText}>Settings</Text>
        </Pressable>
      </View>
      <Pressable style={styles.bottomHalf}>
        <View style={{ backgroundColor: colorP2 }}>
          <Text style={styles.text}>{formatTime(time2)}</Text>
        </View>
      </Pressable>
    </>
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
  middle: {
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  settings: {
    width: 80,
    color: "black",
  },
  settingsText: {
    fontSize: 20,
  },
  pause: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 20,
  },
  pauseBar: {
    width: 5,
    height: 30,
    backgroundColor: "black",
    borderRadius: 5,
  },
});
