import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default class Horarios extends Component {

  static navigationOptions = {
    tabBarLabel: 'Horários',
    tabBarIcon: ({focused, tintColor}) => {
      if(focused){
        return (
          <Image source={require('../assets/images/horario_azul.png')} style={styles.icone} />
        );
      } else {
          return (
            <Image source={require('../assets/images/horario_preto.png')} style={styles.icone} />
          );
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Horários </Text>
        <Text style={styles.item}> Seg à Sab - 11hrs às 00hrs </Text>
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
  }
});