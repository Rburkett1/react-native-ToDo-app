import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import Taskitem from './src/components/Taskitem';
import data from './assets/data/data.js'



export default function App() {

  
  //adding task usestate
  let [task, setTask] = useState();
  let [taskList, setTaskList] = useState([]);

//function for adding tasks
function handleAddTasks(){
  const newTask = [...taskList, task]  
  setTaskList(newTask)
  setTask("");
}

function resetTasks(){
  setTask([]);
}

function emptyTask(){
  if(task = []){
    alert("must add task first")
  }
}

let renderItem = ({ item }) => {
  return <Text style={styles.taskitem} >{item.title} </Text>
};

  return (
    <View style={styles.container}>
      <Text>Todo List</Text>
      
       {/* Start of ToDo code */}
       {/* add onChangeText to input... */}
      <TextInput style={styles.input} placeholder='add new task..' value={task} onChangeText = {text => setTask(text)}/>      
     <Button title='add task' onPress={() => handleAddTasks() }/>
     <View>
     {taskList.map((item, index) => {
     return (
      <Taskitem key = {index}
      item = {item}/>   
          );
        })}     
    </View>  
    <FlatList data={data} renderItem={renderItem}></FlatList>   
   <View>
   </View>
  </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: 250,
  },
 

});