import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  arrow: {
    marginLeft: 45,
    marginTop: 25,
  },
  title_container: {
    marginLeft: 45,
    marginBottom: 25,
    marginTop: 10,
    flex: 0.15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'left',
    color: colors.primary,
    fontFamily: 'Poppins-SemiBold',
  },
  form_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  header: {
    fontFamily: 'Poppins-Bold',
    color: '#235A61',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
  register_btn: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  register_btn_text: {
    textAlign: 'center',
    margin: 20,
  },
  text: {
    fontFamily: 'Poppins-Regular',
  },
  create: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.dark_green,
  },
});
