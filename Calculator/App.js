import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      <Text>This is my first Calculator </Text>
      <Input>please enter the values here</Input>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mytextstyle:{
    flex: 1,
    backgroundColor: '#FB443322',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
