import React, { useState, useEffect }from 'react';
import {View, Image, Text, StyleSheet, FlatList, Button, Linking } from 'react-native';
import yelp from '../api/yelp';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';


const ShowMoreInfoScreen = ({ navigation }) => {
    
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getHotelResults = async (id) => {
        
       const response = await yelp.get(`/${id}`);
       setResult(response.data);

    };

    useEffect( ()=> {
        getHotelResults(id);

    },[]);

    if(!result) {
        return null;
    }
    
    return(

        <ScrollView style={styles.containter}>
            <View >
                <Text style={styles.title}> {result.name}</Text>
                <FlatList
                    data = {result.photos}
                    // returns the photo url as a string
                    keyExtractor = { (photo) => photo}
                    renderItem = {( object ) => {
                        console.log(object)
                        return <Image style={styles.image} source = {{ uri: object.item }} />

                    }}
                    horizontal
                />
                <View style={styles.features} >

                    <FontAwesome name = "star" style={styles.iconReviews} > {result.rating}</FontAwesome> 

                    <View style = {styles.singleFeature }>
                        < FontAwesome name ="list-ol" style = {styles.iconPhone }/>
                        <Text style = {styles.infoText}>{result.review_count} Reviews </Text>
                    </View>

                    <View style = {styles.singleFeature } >
                        < FontAwesome name ="map-marker" style = {styles.iconLocation }/>
                        <Text style = {styles.infoText}> {result.location.display_address[0]} {result.location.display_address[1]}</Text>
                    </View>

                    <View style = {styles.singleFeature } >
                        < FontAwesome name ="phone" style = {styles.iconPhone }/>
                        <Text style = {styles.infoText}>{result.display_phone} </Text>
                    </View>

                    <View style = {styles.singleFeature } >
                        < MaterialCommunityIcons name ="web" style = {styles.iconPhone }/>
                        <Button title="Visit Website " onPress={ ()=>{ Linking.openURL(result.url)}} />
                    </View>
                    
                </View>
                
            </View>
        </ScrollView>
       
        
    ); 
};

const styles = StyleSheet.create({
    image:{
        height: 250,
        width: 350,
        borderRadius: 4,
        marginLeft: 10

    },
    title: {
        marginTop: 25,
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'black'
    },
    containter: {
        backgroundColor: '#e6f3ff'
    },
    iconLocation: {
        color: 'red',
        fontSize: 35,
        marginHorizontal: 10
    },
    iconPhone : {
        color: 'black',
        fontSize: 35,
        marginHorizontal: 10
    },
    iconReviews: {
        color: '#ffcc00',
        fontSize: 35,
        marginHorizontal: 10
    },
    features: {
        marginHorizontal: 10,
        marginTop: 20,
    },
    singleFeature: {
        flexDirection: 'row', 
        marginTop: 13
    },
    infoText: {
        marginLeft: 15,
        marginTop: 15,
        fontSize: 16
    }

});

export default ShowMoreInfoScreen;