import React , {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useYelpResults'


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();
    
    return <View>

        <SearchBar 
            term = {term} 
            onTermChange = { setTerm }
            onTermSubmit = { () => searchAPI( term )}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <Text> Results found {results.length}</Text>
    
    </View> 
};

const styles = StyleSheet.create({});

export default SearchScreen;