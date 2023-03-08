import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Taskitem from './src/components/Taskitem';
import data from './assets/data/data.js'
import { ScrollView } from 'react-native';


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
  //determing if input is blank or not
  if(task = []){
    alert("Proceed you can't, Add task you must")
  }
  
}

function resetTasks(){
  setTaskList(taskList = []);
 
}


const toggleCheckBox = () =>
  setChecked(!checked);

let renderItem = ({ item }) => {
  return <View style={styles.taskitem}> 
          <View style={styles.taskitemWrapper}>
            <View>
              <Text>Title:</Text>
              <Text>{item.title} </Text>
              <Text>Description:</Text>
              <Text>{item.description}</Text>
            </View> 
            <View>          
              <CheckBox 
              checked={checked} 
              onPress = {toggleCheckBox}
              iconType="material-community"
             checkedIcon="checkbox-outline"
              uncheckedIcon={'checkbox-blank-outline'} 
            />  
            </View>
          </View>
        </View>
          
};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>    
       {/* Start of ToDo code */}
      <TextInput 
        style={styles.input} placeholder='add new task..' 
        value={task} onChangeText = {text => setTask(text)}/>      
      <View style={styles.button}>
        <Button color={'black'} title='Add Task' onPress={() => handleAddTasks() } />
        <Button color={'red'} title='Reset' onPress={() => resetTasks() } />
      </View>
      {/* Scrollview  */}
      <View>
       {taskList.map((item, index) => {
        return (
         <Taskitem key = {index}
         item = {item}/>   
          );
        })}     
      </View>       
      <FlatList  data={data} renderItem={renderItem}/>  
      {/* cant get checkmark next to data list */}  
      {/* Scrollview  */}
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
  heading:{
    fontSize: 32,
    margin: 9,
    fontFamily: 'American Typewriter',
    flexDirection: 'row',
    
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 350,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskitem: {
    backgroundColor: 'gray',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    width: 350,
    margin: 3,
    

   // fontFamily: 'American Typewriter',
   // fontSize: 24
    
  },

  taskitemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    
  },
  taskWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    
     
  },
 

});