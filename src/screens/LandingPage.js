import React, { Component } from 'react';
import { Text, ImageBackground, StyleSheet, TextInput, Button } from 'react-native';

import wallpaper from '../assets/wallpaper.jpg';

export class LandingPage extends Component {
  static navigationOptions = {
    header: null
  };

  render () {
    return (
      <ImageBackground style={style.background} source={wallpaper}>
        <Text style={style.formLabel}>Log in:</Text>
        <TextInput style={style.formField}></TextInput>
        <TextInput style={style.formField}></TextInput>
        <Button title="Log in" onPress={() => this.props.navigation.navigate('Movies')} />
      </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center'
  },
  formLabel: {
    fontSize: 20,
  },
  formField: {
    margin: 20,
    fontSize: 16,
    backgroundColor: 'rgb(160,160,160)'
  }
});
