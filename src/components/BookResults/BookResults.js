import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './BookResults.style';

function BookResults({item}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const pressBook = () => {
    navigation.navigate('BookDetail', {item});
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={pressBook}>
        <View style={styles.inner_container}>
          <Image
            source={{
              uri:
                item.book_image ||
                'https://i.pinimg.com/originals/6e/f1/86/6ef1860b2e65d20ff7d8b9a813b2f619.jpg',
            }}
            style={styles.img}
          />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>By {item.author}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default BookResults;
