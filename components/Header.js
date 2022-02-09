import React from "react";
import { View, Text, StyleSheet } from "react-native";

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notes</Text>
      <Text style={styles.list}>{today}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 30,
  },
  list: {
    color: "white",
    fontSize: 20,
    marginRight: 20,
  },
});
