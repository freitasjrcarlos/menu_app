import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default class Contato extends Component {

  static navigationOptions = {
    tabBarLabel: 'Contato',
    tabBarIcon: ({focused, tintColor}) => {
      if(focused){
        return (
          <Image source={require('../assets/images/contato_azul.png')} style={styles.icone} />
        );
      } else {
          return (
            <Image source={require('../assets/images/contato_preto.png')} style={styles.icone} />
          );
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Contato </Text>
        <Text style={styles.item}> 51 999 999 999 </Text>
        <Text style={styles.item}> contato@email.com </Text>
        <Text style={styles.item}>  Avenida das Cidades, 957 </Text>
        <Text> Porto Alegre - RS </Text>

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
  item: {
    fontSize: 16,
    marginTop: 5,
  }
});