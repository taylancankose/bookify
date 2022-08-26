import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import Input from '../../../components/Input/Input';
import styles from './Register.style';
import Button from '../../../components/Button/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const initialFormValues = {
  email: '',
  password: '',
  password2: '',
  displayName: '',
  image: '',
};

function Register() {
  const navigation = useNavigation();
  const [image, setImage] = useState('');
  const handleRegister = async formValues => {
    const {email, password, password2, displayName} = formValues;
    if (password !== password2) {
      alert('Şifreler uyuşmuyor');
      return;
    }
    const {uri} = image;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password, displayName)
        .then(userCredentials => {
          if (userCredentials.user) {
            userCredentials.user.updateProfile({
              displayName: displayName,
            });
          }
        });

      firestore()
        .collection('users')
        .add({
          email,
          displayName,
          books: [],
          image: uploadUri,
        })
        .then(() => console.log('Added'))
        .catch(err => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const openPicker = () => {
    const options = {
      title: 'Select a photo',
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('Image picker error', res.error);
      } else {
        // const source = {uri: 'data:images/jpeg;base64,' + res.assets[0].base64};
        const source = {uri: res.assets[0].uri};
        setImage(source);
        console.log(source);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.title_container}>
          <Text style={styles.title}>Create new {'\n'}account</Text>
        </View>
        <View style={styles.form_container}>
          <Formik initialValues={initialFormValues} onSubmit={handleRegister}>
            {({values, handleChange, handleSubmit}) => (
              <>
                <Input
                  handleChange={handleChange('displayName')}
                  values={values.displayName}
                  placeholder="Enter your name"
                  label="Full name"
                />
                <Input
                  handleChange={handleChange('email')}
                  values={values.email}
                  placeholder="name@example.com"
                  label="Email Adress"
                />
                <Input
                  handleChange={handleChange('password')}
                  values={values.email}
                  placeholder="Enter your password"
                  label="Create password"
                  isPassword={true}
                />
                <Input
                  handleChange={handleChange('password2')}
                  values={values.email}
                  placeholder="Confirm your password"
                  label="Confirm password"
                  isPassword={true}
                />
                <Button title="Choose an image" onPress={openPicker} />
                <Image
                  style={{width: 100, height: 100, borderRadius: 50}}
                  source={image}
                />
                <Button title="Sign Up" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Register;
