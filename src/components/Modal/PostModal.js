import React, {useState, useEffect} from 'react';
import {Button, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import styles from './PostModal.style';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {selectBook} from '../../redux/bookSlice';
function PostModal({onSend, visible, onClose}) {
  const dispatch = useDispatch();
  const selectedBook = useSelector(state => state.bookify.selectedBook);
  const [books, setBooks] = useState([]);
  const [post, setPost] = useState({});
  const names = books.map(i => {
    return i.title;
  });
  const handlePost = () => {
    if (!post) return;
    onSend(post);
    setPost({});
  };
  const getBooks = () => {
    firestore()
      .collection('users')
      .get()
      .then(item => {
        item.forEach(e => {
          if (e._data.displayName === auth().currentUser.displayName) {
            const usersCollection = firestore().collection('users');
            const userDoc = usersCollection.doc(e.id);
            userDoc.onSnapshot(snap => {
              setBooks(snap?._data?.books?.readLists);
            });
          }
        });
      });
  };
  useEffect(() => {
    getBooks();
  }, []);
  console.log(selectedBook);
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <Picker
            selectedValue={selectedBook}
            onValueChange={(itemValue, itemIndex) =>
              dispatch(selectBook(itemValue))
            }>
            {names?.map((item, index) => {
              return (
                <Picker.Item key={index} label={item} value={books[index]} />
              );
            })}
          </Picker>
          <TextInput
            placeholder="Share your ideas"
            onChangeText={setPost}
            multiline
          />
        </View>
        <Button title="Post" onPress={handlePost} />
      </View>
    </Modal>
  );
}

export default PostModal;
