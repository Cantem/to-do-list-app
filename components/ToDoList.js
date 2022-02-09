import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoList({ item, deleteItem }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.listContainer}>
        <View style={styles.circleContainer}>
          <Entypo name="circle" size={20} color="midnightblue" />
        </View>
        <View>
          <Text style={styles.text}>{item.value}</Text>
          <Text style={styles.textTask}> Task</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="midnightblue" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    height: "auto",
    width: "auto",
  },
  listContainer: {
    backgroundColor: "whitesmoke",
    height: "auto",
    width: 350,
    marginBottom: 30,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5
  },
  iconContainer : {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 15,
    height: 40,
    borderRadius: 10
  },
  text: {
    color: "black",
    width: 260,
    height: "auto",
    fontSize: 20,
    marginTop: 10,
    marginRight: 20,
  },
  textTask: {
    color: "goldenrod",
    fontSize: 15,
    marginRight: 20,
    borderRadius: 10,
    width: 40,
  },
});
