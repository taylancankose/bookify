import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './ListBooks.style';

function ListBooks({item}) {
  const navigation = useNavigation();
  const handleDetails = () => {
    navigation.navigate('BookDetail', {item});
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handleDetails}>
        <View style={styles.outer_book_container}>
          <View style={styles.inner_book_container}>
            <View>
              <Image
                style={styles.book_img}
                source={{
                  uri:
                    item.book_image ||
                    'https://kbimages1-a.akamaihd.net/bd02da79-b80a-42ef-a788-168ae2f20393/1200/1200/False/harry-potter-and-the-deathly-hallows-4.jpg',
                }}
              />
            </View>
            <View style={styles.title_container}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>By {item.author}</Text>
              {item.description && (
                <Text style={styles.description}>{item.description}</Text>
              )}
              <View style={styles.btn_container}>
                <Pressable style={styles.btn}>
                  <Text style={styles.btn_text}>Amazon</Text>
                </Pressable>
                <Pressable style={styles.btnn}>
                  <Text style={styles.btn_text}>Review</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ListBooks;
