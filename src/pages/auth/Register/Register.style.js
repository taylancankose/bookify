import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  arrow: {
    marginLeft: 45,
    marginTop: 25,
  },
  title_container: {
    marginLeft: 45,
    marginBottom: 25,
    marginTop: 10,
    justifyContent: 'center',
  },
  form_container: {
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    textAlign: 'left',
    color: colors.primary,
    fontFamily: 'Poppins-SemiBold',
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 2,
  },
  header: {
    fontFamily: 'Poppins-Bold',
    color: '#235A61',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
});
