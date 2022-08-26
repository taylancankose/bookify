import React from 'react';
import {SafeAreaView, Text, View, Pressable, ScrollView} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import BtnGoogle from '../../../components/BtnGoogle/BtnGoogle';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import styles from './Login.style';

const initialFormValues = {
  email: '',
  password: '',
};

function Login() {
  const navigation = useNavigation();
  const handleLogin = async formValues => {
    const {email, password} = formValues;
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const goRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.arrow}></View>
        <View style={styles.title_container}>
          <Text style={styles.title}>Welcome Back,</Text>
        </View>
        <View style={styles.form_container}>
          <Formik initialValues={initialFormValues} onSubmit={handleLogin}>
            {({values, handleChange, handleSubmit}) => (
              <>
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

                <Button title="Sign In" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </View>
        <View style={styles.register_btn}>
          <BtnGoogle />
          <Pressable onPress={goRegister}>
            <Text style={styles.register_btn_text}>
              <Text style={styles.text}>Don't have an account?</Text>
              <Text style={styles.create}> Create Now</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
