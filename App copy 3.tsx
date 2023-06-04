/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from './src/components/Button';
import NetInfo from '@react-native-community/netinfo';

function App(): JSX.Element {
  const [connectionType, setConnectionType] = useState('');

  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('State', state);

      setConnectionType(state.type);
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button onPress={() => {}} title="Tarayıcıda Aç" />
      <Text style={styles.sectionTitle}>Type {connectionType}</Text>
      <Text style={styles.sectionTitle}>Is Connected {isConnected}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
