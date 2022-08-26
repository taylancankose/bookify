import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './TagLists.style';

function TagLists({tag}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.tag_container}>
          <Text style={styles.tag}>{tag}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default TagLists;
