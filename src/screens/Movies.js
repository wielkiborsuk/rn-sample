import React, { Component } from 'react';
import { Button, StyleSheet, Text, Platform, FlatList, View } from 'react-native';

import { Movie } from '../components/Movie';
import { movies } from '../services/MoviesService';

export class MoviesScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Go back"
                    style={styles.backButton}
                    onPress={() => this.props.navigation.goBack()}/>

                <Text style={styles.header}>Best movies</Text>

                <View style={styles.listContainer}>
                    <FlatList
                        style={styles.list}
                        data={movies}
                        renderItem={({item}) => <Movie movie={item}/>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 50 : 30,
        paddingBottom: 100,
    },
    listContainer: {
        width: '100%'
    },
    list: {
        padding: 10
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        width: '100%'
    }
});
