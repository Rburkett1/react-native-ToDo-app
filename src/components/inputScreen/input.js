import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Input() {

    return (
      <View style={styles.container}>
          <Text>Hello</Text>
          
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'large'
    },
    button: {
      backgroundColor: 'black',
      borderRadius: 15,
      justifyContent: 'space-evenly',
      color: "white",
      margin: 50
    }
  });
  