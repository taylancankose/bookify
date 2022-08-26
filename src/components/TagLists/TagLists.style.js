import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  tag_container: {
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: 5,
    justifyContent: 'center',
    borderRadius: 150,
  },
  tag: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
