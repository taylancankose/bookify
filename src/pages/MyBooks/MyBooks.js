import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ListBooks from '../../components/ListBooks/ListBooks';
import styles from './MyBooks.style';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function MyBooks() {
  const [readLists, setReadLists] = useState([]);
  const getReadLists = () => {
    firestore()
      .collection('users')
      .get()
      .then(item => {
        item.forEach(e => {
          if (e._data.displayName === auth().currentUser.displayName) {
            const usersCollection = firestore().collection('users');
            const userDoc = usersCollection.doc(e.id);
            userDoc.onSnapshot(snap => {
              setReadLists(snap);
            });
          }
        });
      });
  };

  useEffect(() => {
    getReadLists();
  }, []);

  const renderListItem = ({item}) => <ListBooks item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyBooks</Text>
      <FlatList
        data={readLists?._data?.books?.readLists}
        renderItem={renderListItem}
      />
    </View>
  );
}

export default MyBooks;
