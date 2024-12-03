import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExampleComponent from './src/screens/ExampleComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ExampleComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e272e',
  },
});