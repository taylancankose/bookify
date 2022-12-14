import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    zIndex: 150,
    justifyContent: 'flex-end',
  },
  btn_container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'green',
    elevation: 5,
    right: 20,
    top: 0,
    bottom: 10,
  },
  plus: {
    color: 'white',
    fontSize: 26,
  },
});
