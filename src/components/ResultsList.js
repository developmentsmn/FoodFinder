import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

import ResultsYelpDetails from './ResultYelpDetails';

const ResultsList = ({ title, results }) => {
    return (
    <View>
        <Text style = { styles.title } > {title} </Text>
        <FlatList
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
        fontWeight: 'bold'
    }
});

export default ResultsList;