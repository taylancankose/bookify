import React from 'react';
import {View, Pressable, Text, FlatList} from 'react-native';
import styles from './BestSellerSkeleton.style';

function BestSellerSkeleton({title, data, renderItem, onPress}) {
  return (
    <View>
      <View style={styles.title_container}>
        <Text style={styles.best_title}>{title}</Text>
        <Pressable onPress={onPress}>
          <Text style={styles.view_all}>View All</Text>
        </Pressable>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default BestSellerSkeleton;
