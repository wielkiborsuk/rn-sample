import React, { Component } from 'react';
import { Text, ImageBackground, StyleSheet, TextInput, Button } from 'react-native';

import image from '../assets/wallpaper.jpg';

export class LandingPageScreen extends Component {
    render() {
        return (
            <ImageBackground style={styles.container} source={image}>
                <Text style={styles.logInText}>Please log in</Text>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <Button title={'Log in'}
                        onPress={() => this.props.navigation.navigate('Movies')}/>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 200,
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginBottom: 20
    },
    logInText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    }
});