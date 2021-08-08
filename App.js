import { StatusBar } from 'expo-status-bar'
import axios from 'axios';
import React, {Component, useState} from 'react';
import { StyleSheet, TextInput, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

export default class App extends Component {

  state = {

    response: [],
    condition: null,
    //value: ''

  };

  handlerText(text){
    var textField = text;
    this.setState({value: textField});
    //console.log("Escribieron " + textField);    
  }


  handlerButton = () => {
    var people = this.state.value;   
    axios.get( 'https://swapi.dev/api/people/' + people)
        .then( response => {
        console.log(response.data);        
        this.setState({
          response: response.data,
          condition: true
        });
        //console.log(this.state.response);
    });

  }


 

  render(){

    if(this.state.condition !== true){
      return (
        <View style={styles.container}>
          <Image
              style={styles.logo}
              source={require('./sw.jpg')}
          />        
              <Text style={styles.text}>STAR WARS</Text>
              <Text style={styles.info}>Una API de una galaxia muy, muy lejana...</Text>
              <TextInput style={styles.input} placeholder="Elige numero de 1 a 83" onChangeText={this.handlerText.bind(this)}></TextInput>
              <TouchableOpacity
              style={styles.button}
              onPress={this.handlerButton.bind(this)}>
              <Text>Buscar personaje</Text> 
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <Image
              style={styles.logo}
              source={require('./sw.jpg')}
          />
          <Text style={styles.text}>STAR WARS</Text>
          <Text style={styles.info}>Una API de una galaxia muy, muy lejana...</Text>
          <TextInput style={styles.input} placeholder="Elige numero de 0 a 2000" onChangeText={this.handlerText.bind(this)}></TextInput>
          <TouchableOpacity
              style={styles.button}
              onPress={this.handlerButton.bind(this)}>
              <Text>Buscar personaje</Text> 
          </TouchableOpacity>
          <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>Nombre: {this.state.response.name}</Text>          
          <Text style={styles.text}>Peso: {this.state.response.height}</Text>
          <Text style={styles.text}>Color de pelo: {this.state.response.hair_color}</Text>
          <Text style={styles.text}>Color de piel: {this.state.response.skin_color}</Text>
          <Text style={styles.text}>Color de ojos: {this.state.response.eye_color}</Text>
          <Text style={styles.text}>Año de nacimiento: {this.state.response.birth_year}</Text>          
          <Text style={styles.text}>Género: {this.state.response.gender}</Text>          
          <Text style={styles.text}></Text>
          </ScrollView>
          <StatusBar style="auto" />
        </View>             
      );   
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "yellow",
    padding: 8,
  },
  info: {
    color: "grey",
  },
  logo: {
    height: 350,
    width: 250,
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "yellow",
    padding: 8,
    borderRadius: 20,
  },
  input: { 
    height: 35,
    width: 200,
    margin: 15,
    padding: 8,
    borderRadius: 20,	
    borderColor: 'yellow',
    backgroundColor: 'white', 
    borderWidth: 2, 
  }, 
  scrollView: {
    backgroundColor: 'grey',
    //marginHorizontal: 20,
    padding: 15,
    marginTop: 20
  },
});
