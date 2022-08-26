import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import styles from './Button.style';

function Button({title, theme = 'primary', onPress}) {
  return (
    <TouchableOpacity style={styles[theme].btn_container} onPress={onPress}>
      {theme === 'tertiary' && (
        <Image
          source={require('../../../assets/img/google.png')}
          style={{
            height: 18,
            width: 18,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      )}
      <Text style={styles[theme].header}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
