import React from 'react';
import Lottie from 'lottie-react-native';
import {View} from 'react-native';

function Empty() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Lottie
        style={{
          height: 150,
          width: 150,
        }}
        autoPlay
        loop
        source={require('../../../assets/animations/empty.json')}
      />
    </View>
  );
}

export default Empty;
