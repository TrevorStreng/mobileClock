import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, Button } from "react-native";

export default function Settings({ navigation }) {
  const [colorP1, setColorP1] = useState("red");
  const [colorP2, setColorP2] = useState("blue");

  const toggleColorP1 = (color) => {
    setColorP1(color);
  };
  const toggleColorP2 = (color) => {
    setColorP2(color);
  };
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
}

const styles = StyleSheet.create({
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
