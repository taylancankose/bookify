import React from 'react';
import Lottie from 'lottie-react-native';
import {View} from 'react-native';

function Loading() {
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
        source={require('../../../assets/animations/loading.json')}
      />
    </View>
  );
}

export default Loading;
