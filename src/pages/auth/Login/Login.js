import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from './Login.style';

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;
