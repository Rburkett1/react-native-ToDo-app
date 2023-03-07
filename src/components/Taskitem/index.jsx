import React, { useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { CheckBox } from 'react-native-elements';


const Task = (props) => {

    return (
      <View >              
          <Text style ={props.checked && styles.crossedout}>{props.text}</Text>            
      </View>
    )
  }

const Taskitem = (props) => {

let [checked, setChecked] = useState(false);

const toggleCheckBox = () =>
  setChecked(!checked);
  
    
  return (
            <View style={styles.taskitem}>
              <View style={styles.taskWrapper} >
                <Text>                      
                  <Task text = {props.item} checked = {checked} /> 

                </Text>
                <CheckBox 
                checked={checked} 
                onPress = {toggleCheckBox}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'} 
                />  
            </View>
    </View>
  )
  
}
const styles = StyleSheet.create({
taskitem: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderWidth: 2,
    width: 250,
  },
  taskWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  crossedout:{
    textDecorationLine: 'line-through',
  }
});



export default Taskitem
