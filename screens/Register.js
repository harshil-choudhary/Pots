import React from 'react';
import {
  StyleSheet, StatusBar, AsyncStorage, KeyboardAvoidingView, ScrollView, Button, TextInput, ActivityIndicator, ImageBackground,
  FlatList, Text, View, Image, TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';
import * as Font from 'expo-font';
import AnimatedLoader from "react-native-animated-loader";
console.disableYellowBox = true;

export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      assetsLoaded: false,
      cats: [{ 'name': 'category1' }, { 'name': 'category2' }, { 'name': 'category3' }, { 'name': 'category3' }, { 'name': 'category3' }],
      spinner: false, username: '', password: ''
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'custom-fonts': require('.././assets/fonts/newfont.otf')
    }); this.setState({ assetsLoaded: true });
    const userToken = await AsyncStorage.getItem('LoggedIn');
    if (userToken) {
      this.props.navigation.replace('Dashboard');
    }
  }

  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <KeyboardAvoidingView>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <AnimatedLoader visible={this.state.spinner} overlayColor="rgba(255,255,255,0.75)" source={require(".././assets/loader.json")}
            animationStyle={{ width: 100, height: 100 }} speed={1} />
          <ImageBackground source={require('.././assets/bg.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
            <View style={{ paddingHorizontal: 30, flex: 1, justifyContent: 'center', paddingTop: 150 }}>
              <TextInput style={styles.input} placeholder="Full Name"/>
              <TextInput autoCapitalize='none' style={styles.input} placeholder="Email" />
              <TextInput autoCapitalize='none' 
              style={styles.input}
               placeholder="Mobile" 
               underlineColorAndroid="transparent"
               keyboardType='numeric'
               maxLength={10}  />
              <TextInput style={styles.input} placeholder="Password" secureTextEntry />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:10 }}>
                <TouchableOpacity style={styles.btn}
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={styles.btnText}>Sign In</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                  <Text style={styles.btnText}>Sign Up</Text></TouchableOpacity>
              </View>
            </View>
          </ImageBackground></KeyboardAvoidingView>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    fontFamily: 'Eina02_Bold',
    borderWidth: 1,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    paddingLeft:15,
   
    backgroundColor: '#fff',
    borderColor: '#E5E7E9'
  },
  btn: { borderRadius: 30, padding: 10, borderWidth: 2, borderColor: '#fff' },
  btn2: { borderRadius: 30, padding: 10, backgroundColor: '#ffc121', borderWidth: 2, borderColor: '#ffc121' },
  btnText: { fontSize: 20, textAlign: 'center', color: '#fff', fontFamily: 'Eina03_Bold' },
  points: { color: '#6C3483', fontSize: 20 },
  points2: { color: '#F39C12', fontSize: 18, marginBottom: 5, borderBottomWidth: 0.5, borderBottomColor: 'grey' },
  points3: { color: '#34495E', fontSize: 16, marginBottom: 5, fontWeight: '600' },
})
