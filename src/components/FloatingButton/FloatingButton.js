import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './FloatingButton.style';

function FloatingButton({onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn_container} onPress={onPress}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FloatingButton;
