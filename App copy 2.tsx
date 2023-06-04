/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback} from 'react';
import {
  SafeAreaView,
  Linking,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Button from './src/components/Button';

function App(): JSX.Element {
  // const injectedJavaScript = "document.getElementById('header').remove();";

  const url = 'https://reactnative.dev/docs/linking';

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    //   <StatusBar />
    //   <ScrollView contentInsetAdjustmentBehavior="automatic">
    //     <View style={styles.container}>
    //       <Text style={styles.sectionTitle}>TEST</Text>
    //     </View>
    //   </ScrollView>

    <SafeAreaView style={{flex: 1}}>
      {/* <WebView
        source={{
          html: '<div><button>Tıkla</button><h1>Hello world</h1></div> ',
        }}
        style={{marginTop: 20}}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled
      /> */}

      <Button
        onPress={() => handlePress('https://reactnative.dev/docs/linking')}
        title="Tarayıcıda Aç"
      />
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
