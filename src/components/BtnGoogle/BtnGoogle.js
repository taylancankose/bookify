import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import styles from './BtnGooglestyle';

function BtnGoogle() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '969509288266-fb1e3lmi01kk3oie5e2dj962msc5knv8.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);
  const [userCredidentials, setUserCredidentials] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserCredidentials({userInfo});
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
}

export default BtnGoogle;
