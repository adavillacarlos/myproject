import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const[people, setPeople] = useState([
    {name: 'Ada', key:'1'},
    {name: 'Romel', key: '2'}, 
    {name: 'Ronerr', key: '3'},
    {name: 'Nerressa', key: '4'}, 
    {name: 'Romeo', key: '5'}, 
    {name: 'Sarah', key: '6'}, 
    {name: 'Adalona', key: '7'}, 
  ]); 

  return (
    <View style={styles.container}>
      <ScrollView> 
      { people.map(item => (
          <View key={item.key}> 
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40, 
    paddingHorizontal: 20, 
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: 'black',
    padding: 20, 
  }, 
  boldText: {
    fontWeight: 'bold', 
    color: 'white', 
  }, 
  body: {
    backgroundColor: 'yellow',
    margin: 5, 
    padding: 20, 
  },
  buttonContainer: {
    marginTop: 20,
  }, 
  input: {
    borderWidth: 1, 
    borderColor: '#777', 
    padding: 8, 
    margin: 10, 
    width: 200, 
  }, 
  item: {
    marginTop: 24, 
    padding: 30, 
    backgroundColor: 'pink', 
    fontSize: 24, 
  }

});
