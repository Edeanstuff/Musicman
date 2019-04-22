import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Bootstrap from "bootstrap";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{padding: 10}}>
      <Text style={title}>音楽さん</Text>
        <TextInput
          style={{height: 40}}
          placeholder="What song are you looking for?!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button>Search</Button>
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
  title: {
    borderBottom: '1px black solid',
    color:'black',
    fontSize:'1rem',
  },
});
