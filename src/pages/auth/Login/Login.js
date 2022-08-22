import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from './Login.style';
import BtnGoogle from '../../../components/BtnGoogle/BtnGoogle';
function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text>Login</Text>
        <BtnGoogle />
      </View>
    </SafeAreaView>
  );
}

export default Login;
