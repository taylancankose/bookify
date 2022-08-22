import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    width: Dimensions.get('screen').width / 1.3,
    margin: 15,
    marginTop: 5,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'gray',
  },
  label: {
    marginTop: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
});
