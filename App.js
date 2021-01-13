import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from './src/components/Header';
import { StartGame } from './src/screens/StartGame';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number"></Header>
      <StartGame></StartGame>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
