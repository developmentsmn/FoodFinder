import React , {useState, useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet , Image} from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useYelpResults';

const SearchScreen = (  ) => {

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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
      }
});

export default SearchScreen;