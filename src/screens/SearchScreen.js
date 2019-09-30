import React , {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([])

    searchAPI = async () => {
        const response = APIyelp.get('/search')
    }

    return <View>

        <SearchBar 
            term= {term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit = {() => console.log('term was changed')}
        />
        <Text>{term}</Text>
        <Text> Results found {results.length}</Text>
    
    </View> 
};

const styles = StyleSheet.create({});

export default SearchScreen;