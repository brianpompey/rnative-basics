import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './components/button';
import Count from './components/count';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Welcome To The Counter</Text>
      <StatusBar style="auto" />
      <Count />
      <Button buttonName="Press Me"/>
      <Button buttonName="Press Me"/>
      <Button buttonName="Press Me"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 30
  }
});
