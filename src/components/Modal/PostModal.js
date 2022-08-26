import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './PostModal.style';

function PostModal({onSend, visible, onClose}) {
  const [post, setPost] = useState({});
  const handlePost = () => {
    if (!post) return;
    onSend(post);
    setPost({});
  };
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
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
