import {Formik} from 'formik';
import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import Input from '../../../components/Input/Input';
import styles from './Register.style';
import Button from '../../../components/Button/Button';

const initialFormValues = {
  email: '',
  password: '',
  password2: '',
  username: '',
};

function Register() {
  const handleRegister = async formValues => {
    const {email, password, password2, username} = formValues;
    if (password !== password2) {
      alert('Şifreler uyuşmuyor');
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log(formValues);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Create new {'\n'}account</Text>
      </View>
      <View style={styles.form_container}>
        <Formik initialValues={initialFormValues} onSubmit={handleRegister}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                handleChange={handleChange('name')}
                values={values.email}
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
              />
              <Input
                handleChange={handleChange('password2')}
                values={values.email}
                placeholder="Confirm your password"
                label="Confirm password"
              />
              <Button title="Sign Up" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

export default Register;
