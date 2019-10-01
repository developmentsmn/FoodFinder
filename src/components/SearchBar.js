import React  from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return <View style = {styles.backgroundStyle}>
        <FontAwesome name ="search" style = {styles.iconStyle }/>
        <TextInput 
            autoCapitalize = "none"
            autoCorrect = {false}
            style = {styles.inputSyle}
            placeholder = "Search..." 
            value = {term}
            onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}

        />

    </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'

    },
    inputSyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        color: 'red',
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }

});

export default SearchBar;
