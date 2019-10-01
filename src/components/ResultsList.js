import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

import ResultsYelpDetails from './ResultYelpDetails';

const ResultsList = ({ title, results }) => {
    return (
    <View style={styles.container}>
        <Text style = { styles.title } > {title} </Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data = { results }
            keyExtractor = { (result) => result.id }
            renderItem={({ item }) => {
                return (
                    <ResultsYelpDetails result = { item } />
                )
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
        

    },
    container: {
        marginBottom: 14
    }
});

export default ResultsList;