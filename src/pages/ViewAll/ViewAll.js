import React from 'react';
import {FlatList, Text, View} from 'react-native';
import BookResults from '../../components/BookResults/BookResults';
import styles from './ViewAll.style';
import {useDispatch, useSelector} from 'react-redux';
import Search from '../../components/Search/Search';

function ViewAll({route}) {
  const searchResults = useSelector(state => state.bookify.searchResults);
  const renderBooks = ({item}) => <BookResults item={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>
      <FlatList
        data={
          (route?.params?.bestFictionals
            ? route?.params?.bestFictionals
            : route?.params?.bestNonFictionals) || searchResults
        }
        renderItem={renderBooks}
        numColumns={2}
      />
    </View>
  );
}

export default ViewAll;
