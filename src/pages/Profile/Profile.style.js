import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 35,
  },
  profile_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  username: {
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
    color: colors.primary,
    fontSize: 16,
  },
  follow_container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  followw: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    marginRight: 15,
  },
  follow: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  pp: {
    width: 90,
    height: 90,
    borderRadius: 45,
    elevation: 5,
    marginRight: 15,
  },
  profile_info_container: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 5,
    elevation: 15,
    justifyContent: 'center',
  },
  settings_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  settings_text_title: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.primary,
  },
  settings_text: {
    fontFamily: 'Poppins-Regular',
    color: colors.primary,
  },
  second_profile_info_container: {
    marginTop: 30,
    padding: 25,
    borderRadius: 5,
    elevation: 15,
    backgroundColor: 'white',
  },
  logout_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout: {
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 15,
    color: colors.light_green,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
});
