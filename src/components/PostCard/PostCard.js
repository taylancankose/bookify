import React, {useEffect, useState} from 'react';
import {Image, Text, View, Pressable, TouchableOpacity} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import {en} from 'date-fns/locale';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './PostCard.style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Empty from '../Empty/Empty';

function PostCard({item}) {
  const [pp, setPP] = useState();
  const handleDelete = () => {
    firestore()
      .collection('posts')
      .get()
      .then(item => {
        item.forEach(e => {
          if (e._data.userId === auth().currentUser.uid) {
            firestore().collection('posts').doc(e.id).delete();
            // postDoc.delete(e.id);
          } else {
            return false;
          }
        });
      });
  };

  const formattedDate = formatDistance(parseISO(item?.date), new Date(), {
    addSuffix: true,
    locale: en,
  });

  useEffect(() => {
    firestore()
      .collection('users')
      .get()
      .then(item => {
        item.forEach(e => {
          if (e._data.displayName === auth().currentUser.displayName) {
            const usersCollection = firestore().collection('users');
            const userDoc = usersCollection.doc(e.id);
            userDoc.onSnapshot(snap => {
              setPP(snap?._data?.image);
            });
          }
        });
      });
  }, [pp]);

  return (
    <View style={styles.container}>
      <View style={styles.user_container}>
        <Image
          style={styles.img}
          source={{
            uri:
              pp ||
              'https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_.jpg',
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
        {/* <TouchableOpacity style={styles.icon_container} onPress={handleDelete}>
          <Icon name="trash" size={15} color={'red'} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

export default PostCard;
