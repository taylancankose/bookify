import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button/Button';
import colors from '../../../styles/colors';
import styles from './Boarding.style';

function Boarding() {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Image
          style={styles.image}
          source={require('../../../../assets/img/opening.png')}
        />
        <Text style={styles.header}>Share your ideas {'\n'} Feel the Vibe</Text>
      </View>
      <View style={styles.btn_container}>
        <Button title={'Go to Login'} onPress={handleLogin} />
        <Button
          onPress={handleRegister}
          title={
            <Text>
              <Text>No account yet? </Text>
              <Text style={{color: colors.medium_green}}>Register</Text>
            </Text>
          }
          theme="secondary"
        />
      </View>
    </SafeAreaView>
  );
}

export default Boarding;
