import { StyleSheet, ScrollView, ImageBackground, SafeAreaView, View, FlatList } from 'react-native';
import Header from '@/components/Header';
import { Colors } from '@/constants/Colors';
import AppText from '@/components/AppText';
import CategoryItem from '@/components/CategoryItem';
import TravelGuidCard from '@/components/TravelGuidCard';
import AppButton from '@/components/AppButton';
import Categories from '@/components/Categories';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={require("@/assets/images/hawaii.png")}
          style={styles.backroundImage}
        />
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <AppText text='Highlights' fontWeight='700' />
          </View>
          <FlatList
            style={styles.sliderContainer}
            horizontal
            data={['1', '2', '3', '4']}
            renderItem={(item) => <CategoryItem item={item} />}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.categoriesContainer}>

          <Categories />
          <TravelGuidCard />

        </View>
      </ScrollView >
      <View style={styles.bookTripButtonContainer}>
        <AppButton text="Book a trip" buttonStyle="filled" />
      </View>
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  scrollView: {
    flex: 1,
    height: 100,
  },
  headerContainer: {
    padding: 16,
  },
  backroundImage: {
    width: "100%",
    height: 480
  },
  container: {
    marginTop: 30,
  },
  sliderContainer: {
    marginTop: 10,
    marginBottom: 20
  },
  categoriesContainer: {
    backgroundColor: Colors.seecondary,
    padding: 20,
    marginTop: 20,
    paddingBottom: 100
  },
  categoriesHeadingContainer: {
    marginTop: 20,
    marginBottom: 10
  },
  bookTripButtonContainer: {
    position: "absolute",
    bottom: 0,
    padding: 16,
    width: "100%"
  }
});
