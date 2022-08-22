import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Input.style';

function Input({placeholder, handleChange, label}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleChange}
      />
    </View>
  );
}

export default Input;
