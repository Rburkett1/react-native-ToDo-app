import React, { useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { CheckBox } from 'react-native-elements';


const Task = (props) => {

    return (
      <View>              
          <Text style ={props.checked && styles.crossedout}>{props.text}</Text>            
      </View>
    )
  }

const Taskitem = (props) => {

const toggleCheckBox = () =>
  props.setTaskCompleted(props.item.key);
  
    
  return (
<View style={styles.taskitem}> 
<View style={styles.taskitemWrapper}>
  <View>
    <Text style={{fontWeight: "bold"}}>Title:</Text>
    <Task  text = {props.item.title} checked = {props.item.completed} /> 
    <Text style={{fontWeight: "bold"}}>Description:</Text>
    <Task  text = {props.item.description} checked = {props.item.completed} /> 
  </View> 
  <View>          
    <CheckBox 
    checked={props.item.completed} 
    onPress = {toggleCheckBox}
    iconType="material-community"
   checkedIcon="checkbox-outline"
    uncheckedIcon={'checkbox-blank-outline'} 
  />  
  </View>
</View>
</View>
  )
  
}
const styles = StyleSheet.create({
taskitem: {
    backgroundColor: 'lightgray',
    padding: 10,
   // borderWidth: 1,
    borderRadius: 8,
    width: 350,
    margin: 3,
    fontSize: 24    
  },
  
  taskWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   // paddingHorizontal: 10,

  },
  taskitemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  crossedout:{
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'gray'
  }
});



export default Taskitem
