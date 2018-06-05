import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, Button, FlatList, View } from 'react-native';
import movieService from '../services/MovieService';
import Movie from '../components/Movie';

export class Movies extends Component {
  static navigationOptions = {
    title: 'Movie list'
  }

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }

    movieService.getMovies()
      .then((movieJson) => {
        this.setState({ movies: movieJson });
      });
  }

  render () {
    return (
      <View style={style.container}>
        <FlatList
          data={this.state.movies}
          renderItem={({ item }) => <Movie movie={item} navigation={this.props.navigation} />}
          keyExtractor={ (item) => item.id.toString() }
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
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
