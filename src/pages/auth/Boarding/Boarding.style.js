import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header_container: {
    flex: 0.65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_container: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
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
