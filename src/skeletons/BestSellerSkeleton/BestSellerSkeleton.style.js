import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  title_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  view_all: {
    color: colors.dark_green,
    fontFamily: 'Poppins-Regular',
  },
  best_title: {
    marginVertical: 10,
    marginHorizontal: 15,
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
    fontSize: 20,
  },
});
