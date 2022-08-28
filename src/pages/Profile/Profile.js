import React, {useState, useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import styles from './Profile.style';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
function Profile() {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [pp, setPP] = useState();

  useEffect(() => {
    firestore()
      .collection('users')
      .get()
      .then(item => {
        item.forEach(e => {
          if (e._data.displayName === auth().currentUser.displayName) {
            const usersCollection = firestore().collection('users');
            const userDoc = usersCollection.doc(e.id);
            userDoc.onSnapshot(snap => {
              setUser(snap?._data);
            });
          }
        });
      });
  }, [pp]);

  const signOut = () => {
    auth().signOut();
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile_container}>
        <Image source={{uri: user?.image}} style={styles.pp} />
        <View>
          <Text style={styles.username}>{user?.displayName}, 26</Text>
          <View style={styles.follow_container}>
            <Text style={styles.followw}>Following: 126</Text>
            <Text style={styles.follow}>Followers: 5600</Text>
          </View>
        </View>
      </View>
      <View style={styles.profile_info_container}>
        <View style={styles.settings_container}>
          <Text style={styles.settings_text_title}>Email </Text>
          <Text style={styles.settings_text}>{user?.email}</Text>
        </View>
        <View style={styles.settings_container}>
          <Text style={styles.settings_text_title}>Books</Text>
          <Text style={styles.settings_text}>
            {user?.books?.readLists?.length}
          </Text>
        </View>
        <View style={styles.settings_container}>
          <Text style={styles.settings_text_title}>View My Timeline</Text>
          <Icon name="angle-right" size={20} style={styles.settings_text} />
        </View>
      </View>
      <View style={styles.second_profile_info_container}>
        <View style={styles.settings_container}>
          <Text style={styles.settings_text_title}>Email </Text>
          <Text style={styles.settings_text}>{user?.email}</Text>
        </View>

        <View style={styles.settings_container}>
          <Text style={styles.settings_text_title}>View My Timeline</Text>
          <Icon name="angle-right" size={20} style={styles.settings_text} />
        </View>
      </View>

      <View style={styles.second_profile_info_container}>
        <View style={styles.settings_container}>
          <Text style={styles.settings_text_title}>Email </Text>
          <Text style={styles.settings_text}>{user?.email}</Text>
        </View>

        <View style={styles.logout_container}>
          <Pressable
            onPress={signOut}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.logout}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Profile;
