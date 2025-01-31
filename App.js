import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Switch, StyleSheet, StatusBar } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ToDoApp() {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');

    const addTask = () => {
        if (taskTitle.trim() !== '') {
            setTasks([...tasks, { id: Date.now().toString(), title: taskTitle, status: 'due' }]);
            setTaskTitle('');
        }
    };

    const toggleTaskStatus = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, status: task.status === 'due' ? 'done' : 'due' } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor="#fbc02d" barStyle="dark-content"/>
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
                    style={[styles.addButton, taskTitle.trim() === '' && styles.disabledButton]} 
                    onPress={addTask} 
                    disabled={taskTitle.trim() === ''}
                >
                  
                    <Text style={styles.addButtonText}>ADD TASK</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.subheading}>Keep up with your tasks</Text>
            <FlatList 
                data={tasks} 
                keyExtractor={(item) => item.id} 
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Text style={[styles.taskText, item.status === 'done' && styles.completedTask]}>
                            {item.title}
                        </Text>
                        <Switch 
                            value={item.status === 'done'} 
                            onValueChange={() => toggleTaskStatus(item.id)}
                        />
                        <TouchableOpacity onPress={() => deleteTask(item.id)}>
                            <Text style={styles.deleteText}>❌</Text>
                        </TouchableOpacity>
                    </View>
                )} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff59d' },

  TitleContainer: { 
    flexDirection: 'row', 
    marginBottom: 20, 
    marginTop: 50 },

  heading: { 
    paddingStart: 10, 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'left',
    color: '#f57f17' },

  inputContainer: { 
    color: 'white',
    flexDirection: 'row', 
    marginBottom: 20 },
  input: { 
    flex: 1, 
    borderBottomWidth: 1, 
    padding: 8, 
    borderColor: '#fbc02d' },

  addButton: { 
    backgroundColor: '#fdd835', 
    padding: 10, 
    marginLeft: 10, 
    borderRadius: 5 },
  disabledButton: {
    color: '#6d706d', 
    backgroundColor: 'gray' },
  addButtonText: { 
    color: 'black', 
    fontWeight: 'bold' },
  taskItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, backgroundColor: '#fff9c4', borderRadius: 5, marginBottom: 10 },
  taskText: { fontSize: 16, color: '#f57f17' },
  completedTask: { textDecorationLine: 'line-through', color: 'gray' },
  deleteText: { fontSize: 18, color: 'red' }
});
