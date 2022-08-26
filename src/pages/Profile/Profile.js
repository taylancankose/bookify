import React, {useState, useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {signOut} from '../../redux/authSlice';
import colors from '../../styles/colors';
import styles from './Profile.style';

function Profile() {
  const dispatch = useDispatch();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [image, setImage] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const signOut = () => {
    auth().signOut();
  };

  return (
    <View>
      <Text>Profile</Text>
      <Text>{user.displayName}</Text>
      <Pressable
        onPress={signOut}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image />
        <Text
          style={{
            color: colors.dark_green,
            fontFamily: 'Poppins-ExtraBold',
            fontSize: 22,
          }}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
}

export default Profile;
