import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import AddTaskItem from './components/AddTaskItem';
import TaskItem from './components/TaskItem';
import TodoList from './components/ToDoList';
import Header from './components/Header';

export default function App() {
  const [data, setData] = useState([]);

    const submitHandler = (value) => {
      setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };
  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.scrollView}>
        <View>
          <FlatList
          data={data}
          ListHeaderComponent={() => <Header />}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <TodoList item={item} deleteItem={deleteItem} />
          )}
          />
        </View>
      </SafeAreaView>
      <AddTaskItem submitHandler={submitHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
    marginTop: 30
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});
