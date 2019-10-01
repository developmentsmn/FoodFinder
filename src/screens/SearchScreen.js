import React , {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useYelpResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter( result => {
            return result.price === price
        } );
    }

    return <View>

        <SearchBar 
            term = {term} 
            onTermChange = { setTerm }
            onTermSubmit = { () => searchAPI( term )}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <Text> Results found {results.length}</Text>
        <ResultsList results = {filterResultsByPrice('$$')} title = 'Best Match'/>
        <ResultsList results = {filterResultsByPrice('$')} title = 'Under Budget $'/>
        <ResultsList results = {filterResultsByPrice('$$$')} title = 'Luxurious Dinners $$$'/>
    
    </View> 
};

const styles = StyleSheet.create({});

export default SearchScreen;