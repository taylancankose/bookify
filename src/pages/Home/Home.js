import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BookResults from '../../components/BookResults/BookResults';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';
import {getBestSellers, searchBook} from '../../redux/bookSlice';
import BestSellerSkeleton from '../../skeletons/BestSellerSkeleton/BestSellerSkeleton';
import styles from './Home.style';

function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const bestSellers = useSelector(state => state.bookify.bestSellers);
  const isLoading = useSelector(state => state.bookify.isLoading);

  useEffect(() => {
    dispatch(getBestSellers());
  }, []);

  const topBestFictionalSellers = bestSellers?.lists
    ?.slice(0, 1)[0]
    .books.slice(0, 5);
  const renderBestFictionalSellers = ({item}) => (
    <BookResults
      item={item}
      allbooks={bestSellers?.lists?.slice(0, 1)[0].books}
    />
  );
  const renderBestNonFictionalSellers = ({item}) => (
    <BookResults
      item={item}
      allbooks={bestSellers?.lists?.slice(0, 1)[0].books}
    />
  );
  const topBestNonFictionalSellers = bestSellers?.lists
    ?.slice(0, 2)[1]
    .books.slice(0, 5);

  const handleFictionalAll = () => {
    navigation.navigate('ViewAll', {
      bestFictionals: bestSellers?.lists?.slice(0, 1)[0].books,
    });
  };

  const handleNonFictionalAll = () => {
    navigation.navigate('ViewAll', {
      bestNonFictionals: bestSellers?.lists?.slice(0, 2)[1].books,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View style={styles.search}>
            <Search />
          </View>
          <BestSellerSkeleton
            title="Fictional Best Sellers"
            data={topBestFictionalSellers}
            renderItem={renderBestFictionalSellers}
            onPress={handleFictionalAll}
          />
          <BestSellerSkeleton
            title="NonFictional Best Sellers"
            data={topBestNonFictionalSellers}
            renderItem={renderBestNonFictionalSellers}
            onPress={handleNonFictionalAll}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export default Home;
