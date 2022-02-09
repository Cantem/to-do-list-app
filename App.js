import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import _values from "lodash.values";
import AddTaskItem from "./components/AddTaskItem";
import TodoList from "./components/ToDoList";
import Header from "./components/Header";

const STORAGE_KEY = "@todos";

export default function App() {
  const initialData = {
    todos: {},
  };
  const [data, setData] = useState(initialData);


  useEffect(async () => {
    retrieveData();
  },[]);

  const retrieveData = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      const parsedData = JSON.parse(data);
      setData({ todos: parsedData || {} });
    } catch (e) {
      alert("Failed to load data");
    }
  };

  const saveData = async (data) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const addItem = (value) => {
    const newItem = value;

    if (newItem !== "") {
      setData((prevTodo) => {
        const key = Math.random().toString();
        const newTodoObject = {
          [key]: {
            key: key,
            isDone: false,
            value: newItem,
            createdAt: new Date().toISOString().slice(0, 10),
          },
        };
        const newState = {
          ...prevTodo,
          todos: {
            ...prevTodo.todos,
            ...newTodoObject,
          },
        };
        saveData(newState.todos);
        return { ...newState };
      });
    }
  };

  const deleteItem = (key) => {
    setData((prevTodo) => {
      const todos = prevTodo.todos;
      delete todos[key];
      const newState = {
        ...prevTodo,
        ...todos,
      };
      saveData(newState.todos);
      return { ...newState };
    });
  };

  const markAsDone = (key) => {
    setData(prevTodo => {
      const newState = {
        ...prevTodo,
        todos: {
          ...prevTodo.todos,
          [key]: {
            ...prevTodo.todos[key],
            isDone: !prevTodo.todos[key].isDone
          }
        }
      };
      saveData(newState.todos);
      return { ...newState };
    })
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.scrollView}>
        <View>
          <FlatList
            data={_values(data.todos)}
            ListHeaderComponent={() => <Header />}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TodoList
                item={item}
                deleteItem={deleteItem}
                markAsDone={markAsDone}
              />
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
