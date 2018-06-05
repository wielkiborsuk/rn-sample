import React from 'react';
import { Text, StyleSheet, Image, Button, FlatList, View, TouchableOpacity } from 'react-native';

const Movie = ({ movie, navigation }) => (
  <TouchableOpacity style={style.box} onPress={() => {navigation.navigate('SingleMovie', {title: movie.name, movie: movie})}}>
    <Image style={style.image} source={{ uri: movie.image.medium }} />
    <View style={style.label}>
      <Text>{movie.name}</Text>
    </View>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  box: {
    flexDirection: 'row'
  },
  image: {
    height: 100,
    width: 80
  },
  label: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Movie;
