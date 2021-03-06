import React from "react";
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

function Button(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={props.methodName}>
          <Text style={styles.buttonText}>{props.buttonName}</Text>
        </TouchableOpacity>
    );
  }


const styles = StyleSheet.create({
    button: {
      backgroundColor: '#000000',
    },
    buttonText: {
      color: '#FFFFFF'
    }
});

export default Button;