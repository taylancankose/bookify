import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner_container: {
    margin: 20,
    flexDirection: 'row',
  },
  img_container: {
    flex: 0.4,
  },
  text_container: {
    flex: 0.6,
    justifyContent: 'center',
    marginLeft: 15,
  },
  title: {
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
    fontSize: 20,
  },
  author: {
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
    fontSize: 14,
  },
  image: {
    height: 200,
    width: 140,
    borderRadius: 10,
    elevation: 5,
  },
  social_container: {
    marginHorizontal: 20,
  },
  icon_container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  icon_text: {
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
  },
  btn: {
    borderWidth: 1.7,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 6,
    borderColor: '#FFC41D',
    minWidth: 95,
  },

  btn_text: {
    fontFamily: 'Poppins-Regular',
    color: colors.primary,
    textAlignVertical: 'center',
  },
  bottom_container: {
    margin: 20,
  },
  add_container: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  add_btn: {
    backgroundColor: '#FFC41D',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 5,
  },
});
