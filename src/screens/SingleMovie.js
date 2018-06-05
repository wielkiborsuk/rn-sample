import React, { Component } from 'react';
import { WebView, StyleSheet, View, Image } from 'react-native';

export class SingleMovie extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'no title provided')
    }
  }

  constructor (props) {
    super(props);
    this.state = {
      movie: props.navigation.getParam('movie', {})
    }
  }

  render () {
    return (
      <View style={style.container}>
        <Image style={style.image} source={{uri: this.state.movie.image.medium}} />
        <WebView source={{ html: this.state.movie.summary }} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
  },
  description: {
    flex: 1,
    fontSize: 12
  }
});
