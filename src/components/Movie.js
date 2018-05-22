import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export const Movie = ({ movie }) => (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: movie.image}}/>
        <View style={styles.information}>
            <Text>{movie.title}</Text>
            <Text>{movie.engTitle}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginBottom: 10,
        flexDirection: 'row',
    },
    image: {
        height: 100,
        width: 80,
    },
    information: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
