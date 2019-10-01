import React , {useState, useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useYelpResults';

const SearchScreen = ( { navigation } ) => {

    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter( result => {
            return result.price === price
        } );
    }

    return <>

        <SearchBar 
            term = {term} 
            onTermChange = { setTerm }
            onTermSubmit = { () => searchAPI( term )}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        {/* <Text> Results found {results.length}</Text> */}
        <ScrollView>

            <ResultsList results = {filterResultsByPrice('$$$')} title = 'Best Match'
            navigation = {navigation}/>
            <ResultsList results = {filterResultsByPrice('$$')} title = 'Under Budget $'
            navigation = {navigation}/>
            <ResultsList results = {filterResultsByPrice('$$$$')} title = 'Luxurious Stays $$$'
            navigation={navigation}/>
            
        </ScrollView>
    
    </> 
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SearchScreen;