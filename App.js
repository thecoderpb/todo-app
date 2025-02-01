import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Switch,
  StyleSheet,
  StatusBar,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "./styles";

export default function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  const addTask = () => {
    if (taskTitle.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), title: taskTitle, status: "Due" },
      ]);
      setTaskTitle("");
    }
  };

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "Due" ? "Done" : "Due" }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fbc02d" barStyle="dark-content" />
      <View style={styles.TitleContainer}>
        <AntDesign name="form" size={24} color="black" />
        <Text style={styles.heading}>Welcome Back...</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Please enter the task title..."
          value={taskTitle}
          onChangeText={setTaskTitle}
        />

        <TouchableOpacity
          style={[
            styles.addButton,
            taskTitle.trim() === "" && styles.disabledButton,
          ]}
          onPress={addTask}
          disabled={taskTitle.trim() === ""}
        >
          <Text style={styles.addButtonText}>ADD TASK</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.Subheading}>Keep up with your tasks</Text>

      <View style={styles.taskList}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={[
                      styles.taskText,
                      item.status === "Done" && styles.completedTask,
                    ]}
                  >
                    {item.title}
                  </Text>
                  <View style={{ flex: 1 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.taskStatus}>
                        Status : {item.status}
                      </Text>

                      <View style={styles.switch}>
                        <Switch
                          value={item.status === "Done"}
                          onValueChange={() => toggleTaskStatus(item.id)}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                <TouchableOpacity onPress={() => deleteTask(item.id)}>
                  <View style={styles.TaskDelete}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
