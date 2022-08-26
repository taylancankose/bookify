import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  search_container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  input: {
    alignItems: 'center',
    width: Dimensions.get('screen').width / 1.25,
    height: 45,
    borderRadius: 55,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 15,
  },
});
