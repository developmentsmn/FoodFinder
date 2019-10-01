import React , {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelpAPI from '../api/yelp'
import yelp from '../api/yelp';


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchAPI = async () => {

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 30,
                    term: term,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong with the search. Try again');
        }
    };


    return <View>

        <SearchBar 
            term = {term} 
            onTermChange = { setTerm }
            onTermSubmit = { searchAPI }
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        
        <Text> Results found {results.length}</Text>
    
    </View> 
};

const styles = StyleSheet.create({});

export default SearchScreen;