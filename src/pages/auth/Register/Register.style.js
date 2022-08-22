import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title_container: {
    marginLeft: 45,
    margin: 25,
  },
  form_container: {
    justifyContent: 'center',
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
