import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoList({ item, deleteItem, markAsDone }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.listContainer}>
        <TouchableOpacity
          style={styles.circleContainer}
          onPress={() => markAsDone(item.key)}
        >
          <Entypo
            name={item.isDone ? "check" : "circle"}
            size={20}
            color="midnightblue"
          />
        </TouchableOpacity>
          <View>
            <Text style={styles.text}>{item.value}</Text>
            <Text style={styles.textTask}>{item.createdAt}</Text>
          </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => deleteItem(item.key)}
        >
          <MaterialIcons name="delete" size={30} color="midnightblue" />
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
    margin: 30,
    // marginBottom: 30,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circleContainer: {
    justifyContent: "center",
    padding: 10,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    // height: 40,
    borderRadius: 10,
  },
  text: {
    color: "black",
    width: 260,
    height: "auto",
    fontSize: 20,
    marginTop: 10,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  textTask: {
    color: "goldenrod",
    fontSize: 10,
    marginRight: 20,
    borderRadius: 10,
    paddingBottom: 10
  },
});
