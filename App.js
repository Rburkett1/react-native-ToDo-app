import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';



export default function App() {

  
  //adding task usestate
  let [task, setTask] = useState();
  let [taskList, setTaskList] = useState([]);

  let [checked, setChecked] = useState(false);
  





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
const Task = (props) => {

  return (
    <View >              
        <Text>{props.text}</Text>            
    </View>
  )
}

const toggleCheckBox = () =>
  setChecked(!checked);
  


let data = [
  {
    key: "1",
    title: "Task item 1"
  },
  {
    key: "2",
    title: "Task item 2"
  },
  {
    key: "3",
    title: "Task item 3"
  },
  {
    key: "4",
    title: "Task item 4"
  }
]
let renderItem = ({ item }) => {
  return <Text style={styles.taskitem} >{item.title} </Text>
};

  return (
    <View style={styles.container}>
      {/* Refrence code */}
      <Text>Todo List</Text>
      
       {/* Start of ToDo code */}
       {/* add onChangeText to input... */}
      <TextInput style={styles.input} placeholder='add new task..' value={task} onChangeText = {text => setTask(text)}/>
     <Button title='add task' onPress={() => handleAddTasks() }/>
     <Button title= 'clear tasks' onPress={() => resetTasks()}/>
     
      <View>
        {taskList.map((item, index) => {
          return (
            <View style={styles.taskitem}>
              <View style={styles.taskWrapper} >
                <Text key={index}>                      
                  <Task text = {item} />                                                      
                </Text>
                <CheckBox 
                checked={checked} 
                onPress = {toggleCheckBox}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'} 
                key={item}/>  
            </View>
          </View>
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
  taskitem: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderWidth: 2,
    width: 250,
    
  },
  taskWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  }

});