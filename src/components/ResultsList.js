import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation'

import ResultsYelpDetails from './ResultYelpDetails';

const ResultsList = ({ title, results, navigation }) => {
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
                    <TouchableOpacity onPress = {() => navigation.navigate('MoreInfoScreen', {id: item.id} )} >
                       <ResultsYelpDetails result = { item } />
                    </TouchableOpacity>
                );
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

export default withNavigation (ResultsList) ;