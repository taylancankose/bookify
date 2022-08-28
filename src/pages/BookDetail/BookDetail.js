import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import bookSlice, {addToCart, removeCart} from '../../redux/bookSlice';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './BookDetail.style';

function BookDetail({route}) {
  const dispatch = useDispatch();
  const readLists = useSelector(state => state.bookify.readLists);
  console.log(readLists);
  const {item} = route.params;

  const [userData, setUserData] = useState();

  console.log('asa', userData?._data?.books?.readLists);

  const handleAdd = () => {
    dispatch(addToCart(item));
    firestore()
      .collection('users')
      .get()
      .then(item => {
        item.forEach(e => {
          if (e._data.displayName === auth().currentUser.displayName) {
            const usersCollection = firestore().collection('users');
            const userDoc = usersCollection.doc(e.id);
            userDoc.onSnapshot(snap => {
              setUserData(snap);
            });
            firestore()
              .collection('users')
              .doc(e.id)
              .update({books: {readLists}});
          }
        });
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.img_container}>
          <Image
            style={styles.image}
            source={{
              uri:
                item.book_image ||
                'https://i.pinimg.com/originals/6e/f1/86/6ef1860b2e65d20ff7d8b9a813b2f619.jpg',
            }}
          />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
          {item.rank && (
            <>
              <View style={styles.icon_container}>
                <Icon name="star-o" size={20} />
                <Text style={styles.icon_text}>Rank: {item.rank}</Text>
              </View>
              <View style={styles.icon_container}>
                <Icon name="calendar-check-o" size={20} />
                <Text style={styles.icon_text}>
                  Weeks on List: {item.weeks_on_list}
                </Text>
              </View>
            </>
          )}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Pressable style={styles.btn}>
              <Text style={styles.btn_text}>Amazon</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btn_text}>Review</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {item.description && (
        <View style={styles.bottom_container}>
          <Text style={styles.title}>Summary</Text>
          <Text>{item.description}</Text>
        </View>
      )}

      <View style={styles.social_container}>
        <Text style={styles.title}>What other people say?</Text>
      </View>

      <View style={styles.add_container}>
        {userData?._data?.books?.readLists.find(e => e.title === item.title) ? (
          <TouchableOpacity
            style={styles.add_btn}
            onPress={() => dispatch(removeCart(item))}>
            <Text style={styles.btn_text}>Remove from My Books</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.add_btn} onPress={handleAdd}>
            <Text style={styles.btn_text}>Add to My Books</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

export default BookDetail;
