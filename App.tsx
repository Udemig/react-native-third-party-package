/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import PagerView from 'react-native-pager-view';
import Lottie from 'lottie-react-native';

function App(): JSX.Element {
  const [pageIndex, setPageIndex] = useState(0);

  const pagerRef = useRef(PagerView);

  const handleNextPage = () => {
    if (pagerRef.current) {
      pagerRef.current.setPage(pageIndex + 1);
    }
  };

  const handlePrevPage = () => {
    console.log('PagerRef', pagerRef);

    if (pagerRef.current) {
      pagerRef.current.setPage(pageIndex - 1);
    }
  };

  // useEffect(() => {
  //   console.log('useEffect setPage ' + pageIndex);
  //   pagerRef.current?.setPage(pageIndex);
  // }, [pageIndex]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <PagerView
        style={styles.container}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={e => setPageIndex(e.nativeEvent.position)}>
        <View key="1" style={styles.onboardingPage}>
          <Lottie
            source={require('./src/assets/animations/one.json')}
            autoPlay
            loop
          />
        </View>
        <View key="2" style={styles.onboardingPage}>
          <Lottie
            source={require('./src/assets/animations/two.json')}
            autoPlay
            loop
          />
        </View>
        <View key="3" style={styles.onboardingPage}>
          <Lottie
            source={require('./src/assets/animations/three.json')}
            autoPlay
            loop
          />
        </View>
        <View key="4" style={styles.onboardingPage}>
          <Lottie
            source={require('./src/assets/animations/one.json')}
            autoPlay
            loop
          />
        </View>
      </PagerView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button onPress={() => handleNextPage()} title="İleri" />
        <Button onPress={() => handlePrevPage()} title="Geri" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onboardingPage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    marginVertical: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
