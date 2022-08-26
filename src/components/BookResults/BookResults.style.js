import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: colors.primary,
    fontSize: 15,
    maxWidth: 150,
    marginTop: 5,
  },
  author: {
    maxWidth: 150,
  },
  img: {
    height: 180,
    width: 120,
    borderRadius: 5,
  },
});
