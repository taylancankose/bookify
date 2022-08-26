import React from 'react';
import {Button, Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './BookDetail.style';

function BookDetail({route}) {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.img_container}>
          <Image
            style={styles.image}
            source={{
              uri:
                item.book_image ||
                'https://i.pinimg.com/originals/6e/f1/86/6ef1860b2e65d20ff7d8b9a813b2f619.jpg',
            }}
          />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
          {item.rank && (
            <>
              <View style={styles.icon_container}>
                <Icon name="star-o" size={20} />
                <Text style={styles.icon_text}>Rank: {item.rank}</Text>
              </View>
              <View style={styles.icon_container}>
                <Icon name="calendar-check-o" size={20} />
                <Text style={styles.icon_text}>
                  Weeks on List: {item.weeks_on_list}
                </Text>
              </View>
            </>
          )}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Pressable style={styles.btn}>
              <Text style={styles.btn_text}>Amazon</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Text style={styles.btn_text}>Review</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {item.description && (
        <View style={styles.bottom_container}>
          <Text style={styles.title}>Summary</Text>
          <Text>{item.description}</Text>
        </View>
      )}

      <View style={styles.social_container}>
        <Text style={styles.title}>What other people say?</Text>
      </View>

      <View style={styles.add_container}>
        <Pressable style={styles.add_btn}>
          <Text style={styles.btn_text}>Add to My Books</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default BookDetail;
