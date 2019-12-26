import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
    const [state, setState] = useState("")

  return (
    <View style={styles.container}>
      <Text>{state}</Text>
      <Button title="BONJOUR" onPress={() => setState("BONJOUR")}/>
      <Button title="AUREVOIR" onPress={() => setState("BONSOIR")}/>
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
});
