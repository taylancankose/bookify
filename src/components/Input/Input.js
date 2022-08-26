import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Input.style';

function Input({placeholder, handleChange, label, isPassword}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleChange}
        secureTextEntry={isPassword}
      />
    </View>
  );
}

export default Input;
