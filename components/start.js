// import React, { useEffect, useState } from "react";
// import { Pressable, StyleSheet, Text, View, Button } from "react-native";

// export default function Start({ navigation }) {
//   return (
//     <>
//       <Pressable
//         style={styles.start}
//         onPress={() => {
//           navigation.navigate("Main");
//           start();
//         }}
//       >
//         <View style={styles.titleView}>
//           <Text>Chess Timer</Text>
//         </View>
//         <Button
//           title={"Settings"}
//           onPress={() => navigation.navigate("Settings")}
//           style={styles.settingsButton}
//         ></Button>
//         <View style={styles.startView}>
//           <Text>Click anywhere to start</Text>
//         </View>
//       </Pressable>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   // Starting Page
//   start: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   titleView: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   startView: {
//     flex: 2,
//   },
//   settingsButton: {
//     flex: 2,
//   },
// });
