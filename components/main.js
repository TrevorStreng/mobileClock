import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Main({ navigation }) {
  const [time, setTime] = useState(10 * 60);
  const [time2, setTime2] = useState(10 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isRunning2, setIsRunning2] = useState(false);
  const [colorP1, setColorP1] = useState("red");
  const [colorP2, setColorP2] = useState("blue");
  const [paused, setPaused] = useState(true);
  const [p1sTurn, setp1sTurn] = useState(true);
  const [newTime, setNewTime] = useState(10 * 60);

  const recieveColorP1 = (color) => {
    setColorP1(color);
  };
  const recieveColorP2 = (color) => {
    setColorP2(color);
  };
  const recieveTime = (t) => {
    setTime(t);
    setTime2(t);
  };

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

  const start = () => {
    if (p1sTurn) setIsRunning(true);
    else setIsRunning2(true);
  };

  const switchPlayers = () => {
    if (isRunning) {
      setIsRunning(!isRunning);
      setIsRunning2(!isRunning2);
      setp1sTurn(false);
    }
  };
  const switchPlayers2 = () => {
    if (isRunning2) {
      setIsRunning(!isRunning);
      setIsRunning2(!isRunning2);
      setp1sTurn(true);
    }
  };

  const formatTime = (t) => {
    let min = Math.floor(t / 60);
    let sec = t % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  const play = () => {
    setPaused(false);
    start();
  };

  const pause = () => {
    setPaused(true);
    setIsRunning(false);
    setIsRunning2(false);
  };

  const reset = () => {
    setPaused(true);
    setIsRunning(false);
    setIsRunning2(false);
    setTime(newTime);
    setTime2(newTime);
  };

  return (
    <>
      <Pressable
        style={[styles.topHalf, { backgroundColor: colorP2 }]}
        onPress={() => switchPlayers2()}
      >
        <View>
          <Text style={[styles.text, styles.textP2]}>{formatTime(time2)}</Text>
        </View>
      </Pressable>
      {/* add a reset button */}
      <View style={styles.middle}>
        <Pressable
          style={[styles.pauseButton, paused ? { display: "none" } : {}]}
          onPress={() => pause()}
        >
          <View style={styles.pause}>
            <View style={styles.pauseBar}></View>
            <View style={styles.pauseBar}></View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.pauseButton, paused ? {} : { display: "none" }]}
          onPress={() => play()}
        >
          <Icon name="play" size={30} color="black"></Icon>
        </Pressable>
        <Pressable onPress={() => reset()}>
          <Icon name="rotate-left" size={30} color="black"></Icon>
        </Pressable>
        <Pressable
          title={"Settings"}
          onPress={() =>
            navigation.navigate("Settings", {
              setColorP1,
              setColorP2,
              setTime,
              setTime2,
              setNewTime,
            })
          }
        >
          <Icon name="gear" size={30} color="black"></Icon>
        </Pressable>
      </View>
      <Pressable
        style={[styles.bottomHalf, { backgroundColor: colorP1 }]}
        onPress={() => switchPlayers()}
      >
        <View>
          <Text style={styles.text}>{formatTime(time)}</Text>
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
  pauseButton: {
    paddingHorizontal: 2,
  },
});
