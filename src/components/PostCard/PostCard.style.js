import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  user_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user_info_container: {
    marginLeft: 10,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginLeft: 5,
  },
  post_container: {
    margin: 30,
  },
  outer_book_container: {
    padding: 15,
    backgroundColor: '#F8F8F9',
    elevation: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  inner_book_container: {
    flexDirection: 'row',
  },
  img_container: {},
  book_img: {
    height: 120,
    width: 80,
    borderRadius: 10,
  },
  title_container: {
    marginLeft: 15,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  author: {
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
  },
  btn_container: {
    flexDirection: 'row',
  },
  btn: {
    borderWidth: 1.7,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 6,
    borderColor: '#FFC41D',
    minWidth: 70,
  },
  btnn: {
    borderWidth: 1.7,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 6,
    borderColor: '#FFC41D',
    minWidth: 70,
    marginLeft: 5,
  },
  btn_text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.primary,
    textAlignVertical: 'center',
  },
  icon_container: {
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
