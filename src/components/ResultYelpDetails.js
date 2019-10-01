import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const ResultsDetails = ({ result }) => {
    return(
        <View style={styles.containter}>
            <Image style={styles.image} source = { { uri: result.image_url } } />
            <Text style={styles.name}> {result.name}</Text>
            <View style={styles.features} >
                <FontAwesome name = "star" style={styles.iconStyle} > {result.rating}</FontAwesome> 
                <Text>    Reviews {result.review_count}</Text>
            </View>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 185,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    },
    iconStyle: {
        color: '#ffcc00',
        fontSize: 18,
    },
    features: {
        flexDirection: 'row',
        fontSize: 20
    },
    containter: {
        marginLeft: 10

    }


});

export default ResultsDetails;