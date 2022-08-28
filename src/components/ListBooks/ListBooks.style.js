import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  outer_book_container: {
    padding: 15,
    backgroundColor: '#F8F8F9',
    elevation: 5,
    marginTop: 15,
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
    maxWidth: 200,
  },
  author: {
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
  },
  description: {
    maxWidth: 200,
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
});
