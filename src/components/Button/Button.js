import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './Button.style';

function Button({title, theme = 'primary', onPress}) {
  return (
    <TouchableOpacity style={styles[theme].btn_container} onPress={onPress}>
      <Text style={styles[theme].header}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
