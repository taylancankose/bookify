import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  search: {
    backgroundColor: '#FFC41D',
    height: 100,
  },

  add_btn: {
    backgroundColor: '#FFC41D',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    elevation: 5,
  },
  btn_text: {
    fontFamily: 'Poppins-Regular',
    color: colors.primary,
    textAlignVertical: 'center',
  },
  add_container: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});
