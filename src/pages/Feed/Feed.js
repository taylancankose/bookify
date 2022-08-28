import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import PostModal from '../../components/Modal/PostModal';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import PostCard from '../../components/PostCard/PostCard';
import styles from './Feed.style';
import Search from '../../components/Search/Search';
import {useSelector} from 'react-redux';
function Feed() {
  const [modalVisible, setModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);
  const [books, setBooks] = useState([]);
  const selectedBook = useSelector(state => state.bookify.selectedBook);
  const getPosts = () => {
    const db = firestore();
    db.collection('posts')
      .get()
      .then(snapshot => {
        snapshot.forEach(element => {
          const data = element.data();
          setContentList(arr => [...arr, data]);
        });
      });
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
    getPosts();
    getBooks();
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleSendContent = content => {
    toggleModal();
    sendContent(content);
  };

  const sendContent = async (content, id) => {
    const displayName = auth().currentUser.displayName;
    const email = auth().currentUser.email;
    console.log('selam');
    firestore()
      .collection('posts')
      .add({
        text: content,
        displayName,
        date: new Date().toISOString(),
        like: 0,
        email,
        userId: auth().currentUser.uid,
        books: selectedBook,
      })
      .then(() => console.log('Added'))
      .catch(err => console.log(err));
  };

  const handleLike = item => {
    database()
      .ref(`posts/${item.id}`)
      .update({like: Number(item.like) + 1});
  };

  const handleDelete = async id => {
    await database().ref(`posts/${id}`).remove();
  };

  const renderPosts = ({item}) => <PostCard item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>
      <FloatingButton onPress={toggleModal} />
      <FlatList data={contentList} renderItem={renderPosts} />
      <PostModal
        visible={modalVisible}
        onClose={toggleModal}
        onSend={handleSendContent}
      />
    </View>
  );
}

export default Feed;
