import React , {useState, useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet , Button} from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useYelpResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter( result => {
            return result.price === price
        } );
    }

    return <View style={styles.container}>
        {/* <Image style={styles.backgroundImage} source = { require('./image.jpg' )} /> */}

        <SearchBar 
            term = {term} 
            onTermChange = { setTerm }
            onTermSubmit = { () => searchAPI( term )}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        {/* <Text> Results found {results.length}</Text> */}
        <ScrollView>

            <ResultsList results = {filterResultsByPrice('$$$')} title = 'Best Match'
            />
            <ResultsList results = {filterResultsByPrice('$$')} title = 'Under Budget'
            />
            <ResultsList results = {filterResultsByPrice('$$$$')} title = 'Luxurious Stays'
            />
            
        </ScrollView>
    
    </View> 
};

SearchScreen.navigationOptions = ({ navigation }) => {
    return {
        title: "Hotel Buddy",
        headerRight: (
        <Button
            onPress={() => navigation.navigate('Settings')}
            title="Settings"
            color = "#3366ff"
        />
        ),
        headerTitleStyle: {
        // textAlign:'center', 
        // alignSelf:'center',
        color: 'white',
        flex:1
        }, 
        headerStyle: {
        backgroundColor: '#0099ff',
        },
        headerRightContainerStyle: {
        paddingRight: 10,
        
        },
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
      }
});

export default SearchScreen;