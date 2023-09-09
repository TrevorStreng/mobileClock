import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

export default function Settings({ route }) {
  // const { colorP1, colorP2 } = route.params;
  const { setColorP1, setColorP2 } = route.params;
  // const { time, time2 } = route.params;
  const { setTime, setTime2 } = route.params;
  const { setNewTime } = route.params;
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [t, setT] = useState(10 * 60);
  // const [resetTime, setResetTime] = useState(false);

  useEffect(() => {
    setColorP1(color1);
    setColorP2(color2);
  }, [color1, color2, t]);
  const toggleColorP1 = (color) => {
    setColor1(color);
  };

  const toggleColorP2 = (color) => {
    setColor2(color);
  };
  const newTime = (str) => {
    if (str.includes(":")) {
      let arr = str.split(":");
      let mins = parseInt(arr[0]);
      let secs = parseInt(arr[1]);
      setT(mins * 60 + secs);
    } else {
      let num = parseInt(str);
      setT(num);
    }
  };
  const submitTime = () => {
    newTime(inputText);
  };

  const timeReset = () => {
    setTime(t);
    setTime2(t);
    setNewTime(t);
  };
  return (
    <>
      <View style={styles.time}>
        <Text style={{ padding: 5 }}>Select time length for each player</Text>
        <TextInput
          placeholder="10:00"
          onChangeText={(text) => newTime(text)}
          style={styles.inputBox}
        />
        <Button title="time" onPress={() => timeReset()}>
          Apply
        </Button>
      </View>
      <View style={styles.container}>
        <Text>Pick Your Colors</Text>
        <View style={styles.playerContainers}>
          <Text>Player1</Text>
          <View style={styles.firstRow}>
            <Pressable
              style={[
                styles.red,
                styles.boxSize,
                ,
                color1 === "red" && { borderWidth: 2 },
              ]}
              onPress={() => toggleColorP1("red")}
            ></Pressable>
            <Pressable
              style={[
                styles.blue,
                styles.boxSize,
                color1 === "blue" && { borderWidth: 2 },
              ]}
              onPress={() => toggleColorP1("blue")}
            ></Pressable>
          </View>
          <View style={styles.secondRow}>
            <Pressable
              style={[
                styles.green,
                styles.boxSize,
                color1 === "green" && { borderWidth: 2 },
              ]}
              onPress={() => toggleColorP1("green")}
            ></Pressable>
            <Pressable
              style={[
                styles.yellow,
                styles.boxSize,
                color1 === "yellow" && { borderWidth: 2 },
              ]}
              onPress={() => toggleColorP1("yellow")}
            ></Pressable>
          </View>
        </View>
        <View style={styles.playerContainers}>
          <Text>Player2</Text>
          <View style={styles.firstRow}>
            <Pressable
              style={[
                styles.red,
                styles.boxSize,
                color2 === "red" && { borderWidth: 2 },
              ]}
              onPress={() => toggleColorP2("red")}
            ></Pressable>
            <Pressable
              style={[
                styles.blue,
                styles.boxSize,
                color2 === "blue" && { borderWidth: 2 },
              ]}
              onPress={() => toggleColorP2("blue")}
            ></Pressable>
          </View>
          <View style={styles.secondRow}>
            <Pressable
              style={[
                styles.green,
                styles.boxSize,
                color2 === "green" && { borderWidth: 2 },
              ]}
              onPress={() => toggleColorP2("green")}
            ></Pressable>
            <Pressable
              style={[
                styles.yellow,
                styles.boxSize,
                color2 === "yellow" && { borderWidth: 2 },
              ]}
              onPress={() => toggleColorP2("yellow")}
            ></Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
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
  time: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 5,
    padding: 2,
    fontSize: 30,
  },
});
