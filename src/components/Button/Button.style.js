import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const base_style = StyleSheet.create({
  btn_container: {
    width: Dimensions.get('screen').width / 1.25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
  },
  header: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
});

export default StyleSheet.create({
  primary: StyleSheet.create({
    ...base_style,
    btn_container: {
      ...base_style.btn_container,
      backgroundColor: colors.medium_green,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 2.84,

      elevation: 2,
    },
    header: {
      ...base_style.header,
      color: 'white',
      textShadowColor: 'rgba(0, 0, 0, 0.15)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    btn_container: {
      ...base_style.btn_container,
      borderWidth: 1.2,
      borderColor: colors.medium_green,
    },
    header: {
      ...base_style.header,
      color: 'black',
    },
  }),
  tertiary: StyleSheet.create({
    ...base_style,
    btn_container: {
      ...base_style.btn_container,
      borderWidth: 1.2,
      borderColor: colors.gray,
      flexDirection: 'row',
    },
    header: {
      ...base_style.header,
      color: 'black',
      marginLeft: 10,
    },
  }),
});
