import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const Navegador = createStackNavigator({
    HomeList: {
        screen: HomeList,

    },
    HomeProducts: { screen: HomeProducts },

});

const estilo = StyleSheet.create({
    icone: {
        width: 26,
        height: 26
    }
});

const Container = createAppContainer(Navegador); // Coloquei em uma constante para depois utiliza-lo como um componente.

// Agora apenas fiz como um export de um component simples mas que retorna o Container, dai é só utilizar o método padrão de colocar o ícone.
export default class Nav extends Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => {
        if (focused) {
            return (
                <Image source={require('../assets/images/home_azul.png')} style={estilo.icone} />
            )
        } else {
            return (
                <Image source={require('../assets/images/home_preto.png')} style={estilo.icone} />
            )
        }
    }
  }

  render() {
    return(
      <Container /> /* Retorna o createAppContainer */
    );
  }

}