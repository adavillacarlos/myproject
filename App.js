import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const[people, setPeople] = useState([
    {name: 'Ada', id:'1'},
    {name: 'Romel', id: '2'}, 
    {name: 'Ronerr', id: '3'},
    {name: 'Nerressa', id: '4'}, 
    {name: 'Romeo', id: '5'}, 
    {name: 'Sarah', id: '6'}, 
    {name: 'Adalona', id: '7'}, 
  ]); 

  const pressHandler = (id) => {
    console.log(id); 
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    }); 
  }

  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={( item ) => item.id}
        data={people} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      
      /> 


      {/* <ScrollView> 
      { people.map(item => (
          <View key={item.key}> 
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
    marginHorizontal: 10, 
  }

});
