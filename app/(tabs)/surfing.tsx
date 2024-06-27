import { View, Text, SafeAreaView, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Header from '@/components/Header';
import AppText from '@/components/AppText';
import TravelGuidCard from '@/components/TravelGuidCard';
import AppButton from '@/components/AppButton';
import { Colors } from '@/constants/Colors';
import TopSports from '@/components/TopSports';

const Surfing = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={require("@/assets/images/surfuing.png")}
          style={styles.backroundImage}
        >
          <AppText text="Surfing" color={Colors.white} fontWeight='700' textStyle='topHeader' />
        </ImageBackground>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <AppText text='Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.' fontWeight='400' />
          </View>
        </View>
        <TopSports />
        <View style={styles.categoriesContainer}>
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
    height: 240,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    marginTop: 30,
  },

  categoriesContainer: {
    backgroundColor: Colors.seecondary,
    padding: 20,
    marginTop: 20,
    paddingBottom: 100
  },

  bookTripButtonContainer: {
    position: "absolute",
    bottom: 0,
    padding: 16,
    width: "100%"
  }
});


export default Surfing