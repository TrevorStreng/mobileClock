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
  const { colorP1, colorP2 } = route.params;
  const { setColorP1, setColorP2 } = route.params;
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [time, setTime] = useState("10:00");

  useEffect(() => {
    setColorP1(color1);
    setColorP2(color2);
  }, [color1, color2]);
  const toggleColorP1 = (color) => {
    setColor1(color);
  };

  const toggleColorP2 = (color) => {
    setColor2(color);
  };
  return (
    <>
      <View style={styles.time}>
        <Text>Select time length for each player</Text>
        <TextInput
          placeholder="10:00"
          onChangeText={(text) => console.log(text)}
        />
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
});
