import {createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

export const signOut = () => {
  auth().signOut();
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    formValues: {
      email: '',
      password: '',
      username: '',
    },
    userInfo: [],
    isLoading: false,
    isError: null,
  },
  reducers: {
    registerUser: async (state, action) => {
      state.userInfo = await auth().createUserWithEmailAndPassword(
        state.formValues.email,
        state.formValues.password,
      );
      // .then(userCredentials => {
      //   if (userCredentials.user) {
      //     userCredentials.user.updateProfile({
      //       displayName: state.formValues.username,
      //     });
      //   }
      // });
    },
    getUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {registerUser, getUser} = authSlice.actions;
export default authSlice.reducer;
