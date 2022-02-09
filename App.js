import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import AddTaskItem from "./components/AddTaskItem";
import TodoList from "./components/ToDoList";
import Header from "./components/Header";

export default function App() {
  const [data, setData] = useState([]);

  const addItem = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
          isDone: false,
          date: new Date().toISOString().slice(0,10)
        },
        ...prevTodo,
      ];
    });
  };

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key !== key);
    });
  };

  const markAsDone = (key) => {
    setData(prevTodo => {
      let data = [...prevTodo];
      let indexOfToDo = data.findIndex(item =>item.key === key);

      data[indexOfToDo] = {
        ...data[indexOfToDo],
        isDone: !data[indexOfToDo].isDone
      };

      return data;
    })
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.scrollView}>
        <View>
          <FlatList
            data={data}
            ListHeaderComponent={() => <Header />}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TodoList item={item} deleteItem={deleteItem} markAsDone={markAsDone} />
            )}
          />
        </View>
      </SafeAreaView>
      <AddTaskItem addItem={addItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1A3C",
    marginTop: 30,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});
