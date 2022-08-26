import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import PostModal from '../../components/Modal/PostModal';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../utils/parseContentData';

function MyBooks() {
  const [modalVisible, setModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(async () => {
    // firestore()
    //   .collection('posts')
    //   .get('value', snapshot => {
    //     const contentData = snapshot.val();
    //     const parsedData = parseContentData(contentData || {});
    //     setContentList(parsedData);
    //   });
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const sendContent = async content => {
    const displayName = auth().currentUser.displayName;

    firestore()
      .collection('posts')
      .add({
        text: content,
        displayName,
        date: new Date().toISOString(),
        like: 0,
        userId: auth().currentUser.uid,
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

  const handleSendContent = content => {
    toggleModal();
    sendContent(content);
  };

  console.log(contentList);

  return (
    <View>
      <Text>MyBooks</Text>
      <FloatingButton onPress={toggleModal} />
      <PostModal
        visible={modalVisible}
        onClose={toggleModal}
        onSend={handleSendContent}
      />
    </View>
  );
}

export default MyBooks;
