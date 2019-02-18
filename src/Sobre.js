import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default class Sobre extends Component {

  static navigationOptions = {
    tabBarLabel: 'Sobre',
    tabBarIcon: ({focused, tintColor}) => {
      if(focused){
        return (
          <Image source={require('../assets/images/sobre_azul.png')} style={styles.icone} />
        );
      } else {
          return (
            <Image source={require('../assets/images/sobre_preto.png')} style={styles.icone} />
          );
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Sobre </Text>
        <Text style={styles.version}> Versão 0.0.1 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icone: {
    width: 26,
    height: 26,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#16bb24',
  },
  version: {
    fontSize: 16,
  }
});