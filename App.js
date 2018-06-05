import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { LandingPage } from './src/screens/LandingPage';
import { Movies } from './src/screens/Movies';
import { SingleMovie } from './src/screens/SingleMovie';

const App = createStackNavigator({
  LandingPage: LandingPage,
  Movies: Movies,
  SingleMovie: SingleMovie
}, {
  initialRouteName: 'LandingPage',
});

export default App;
