/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component } from 'react';
import { WebView } from 'react-native-webview';
import MD5 from '../AwesomeProject/util/md5';
// import {NIM} from 'sdk/NIM_Web_NIM_rn_v7.4.0';
const NIM = require('../AwesomeProject/sdk/NIM_Web_NIM_rn_v7.4.0');

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component {

  render() {

    const nim = NIM.getInstance({
      debug: true,
      appKey: '45c6af3c98409b18a84451215d0bdd6e',
      account: 'input your accid',
      token: MD5("input your token"),
      db: false,   //若不使用数据库，请设置为false。默认为true。
      onconnect: onConnect,
      // onwillreconnect: onWillReconnect,
      // ondisconnect: onDisconnect,
      onerror: onError
    });

    function onConnect() {
      console.log("Login success");
    }

    function onError() {
      console.log("Login error");
    }

    return (
      <Fragment>
      <WebView
        scrollEnabled={false}
        javaScriptEnabled={true}
        source={{uri: 'https://faq.yunxin.163.com/kb/demo/avh5/index.html'}} // or your own website URL.
        style={{width:'100%',height:'100%'}}
        mediaPlaybackRequiresUserAction={false}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        startInLoadingState={true}
        allowUniversalAccessFromFileURLs={true}
        onLoad={(e) => console.log('onLoad')}
        onLoadEnd={(e) => console.log('onLoadEnd')}
        onLoadStart={(e) => console.log('onLoadStart')}
      ></WebView>
      </Fragment>
    )
  }
}

export default App;
