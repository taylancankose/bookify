import React, {useEffect, useState} from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import {en} from 'date-fns/locale';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './PostCard.style';

function PostCard({item}) {
  console.log('item', item);
  const getUser = () => {};

  useEffect(() => {
    getUser();
  }, []);
  const formattedDate = formatDistance(parseISO(item?.date), new Date(), {
    addSuffix: true,
    locale: en,
  });
  console.log('kitaplar', item.books);
  return (
    <View style={styles.container}>
      <View style={styles.user_container}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_.jpg',
          }}
        />
        <View style={styles.user_info_container}>
          <Text>{item.displayName}</Text>
          <Text>{formattedDate}</Text>
        </View>
      </View>
      <View style={styles.post_container}>
        <Text>{item.text}</Text>
        <View style={styles.outer_book_container}>
          <View style={styles.inner_book_container}>
            <View>
              <Image
                style={styles.book_img}
                source={{
                  uri:
                    item.books.book_image ||
                    'https://kbimages1-a.akamaihd.net/bd02da79-b80a-42ef-a788-168ae2f20393/1200/1200/False/harry-potter-and-the-deathly-hallows-4.jpg',
                }}
              />
            </View>
            <View style={styles.title_container}>
              <Text style={styles.title}>{item.books.title}</Text>
              <Text style={styles.author}>By {item.books.author}</Text>
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
        <View style={styles.icon_container}>
          <Icon name="heart-o" size={15} />
          <Text style={{marginLeft: 5}}>{item.like} Likes</Text>
        </View>
      </View>
    </View>
  );
}

export default PostCard;
