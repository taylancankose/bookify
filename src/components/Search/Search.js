import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import styles from './Search.style';
import {useDispatch, useSelector} from 'react-redux';
import {results, searchBook} from '../../redux/bookSlice';
import {useNavigation} from '@react-navigation/native';

function Search() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const searchQ = useSelector(state => state.bookify.searchQ);

  const onChange = text => {
    dispatch(results(text));
  };

  const handleSubmit = () => {
    dispatch(searchBook(searchQ));
    navigation.navigate('ViewAll');
  };

  return (
    <View style={styles.container}>
      <View style={styles.search_container}>
        <TextInput
          style={styles.input}
          placeholder="Search by Title, author..."
          onChangeText={onChange}
          onSubmitEditing={handleSubmit}
          value={searchQ}
        />
      </View>
    </View>
  );
}

export default Search;
