/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useMemo, useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ButtonCustom from './src/components/Button';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  const [text, setText] = useState('Sayacı Artır');

  const duplicatedCount = useMemo(() => {
    [...new Array(10000000)].forEach(item => {});

    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    setCount(prevState => prevState + 1);
  }, []);

  console.log('Rendering App component');

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>{count}</Text>
          <ButtonCustom onPress={() => handleClick()} title={text} />
          <Text style={styles.sectionTitle}>{duplicatedCount}</Text>
          <TextInput style={styles.textInput} onChangeText={e => setText(e)} />
          {/* <Text style={styles.sectionTitle}>{text}</Text> */}
        </View>
      </ScrollView>
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
