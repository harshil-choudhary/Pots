import React from 'react';
import {
  StatusBar, StyleSheet, KeyboardAvoidingView, AsyncStorage, ImageBackground, Dimensions, FlatList, ScrollView,
  Text, Image, View, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Header, Left, Card, CardItem, Tab, Tabs, Body, Icon, Right, Title } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import StarRating from 'react-native-star-rating';
import { RadioGroup, RadioButton } from 'react-native-custom-radio-button'
const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);
const screenWidth = width * 48 / 100;
const sc3 = width * 60 / 100;
const sc4 = width * 70 / 100;
export default class MyAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: [{ 'type': 'Work', 'add': 'B 24, Building Name, Street, City', 'img': 'work.jpg' },
      { 'type': 'Home', 'add': 'B-34 Western Heights, DLF Phase 5 Delhi', 'img': 'home.jpg' },
      { 'type': 'Other', 'add': '', 'img': 'other.jpg' }]
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'custom-fonts': require('.././assets/fonts/newfont.otf'),
      'custom-fonts2': require('.././assets/fonts/heading.ttf'),
      'Eina02_Bold': require('.././assets/fonts/Eina02-Bold.ttf'),
      'Eina02_Regular': require('.././assets/fonts/Eina02-Regular.ttf'),
      'Eina03_Bold': require('.././assets/fonts/Eina03-Bold.ttf'),
      'Eina03_Regular': require('.././assets/fonts/Eina03-Regular.ttf'),
    }); this.setState({ assetsLoaded: true });
  }
  onSelect(index, value) {
    this.setState({
      text: `${value}`
    })
  }
  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <ImageBackground source={require('.././assets/Manage_Addresses_BG.png')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <View style={{ padding: 40 }}>
          <TouchableOpacity   onPress={() => this.props.navigation.goBack()}>
              <Text style={{fontSize:12,fontFamily:'Eina03_Bold',color:'#fff'}}>back</Text>
              <Image style={{width:'25%',height:12, marginVertical:5,borderRadius:20,marginLeft:-40}} 
                    source={require(".././assets/Wave_line.png")} /> 
               </TouchableOpacity>
            <Text style={{ fontSize: 16, fontFamily: 'Eina03_Bold', color: 'black' }}>Manage</Text>
            <Text style={{ fontSize: 26, fontFamily: 'Eina03_Bold', color: 'black' }}>Addresses</Text>
          </View>
          <View style={{ padding: 20, alignItems: 'center', marginTop: height * 0.05 }}>
            <FlatList keyExtractor={(item, index) => index.toString()}
              data={this.state.address} renderItem={({ item }) =>
                <Card style={{ borderRadius: 20, padding: 10, flexDirection: 'row', width: width * 0.8, marginBottom: height * 0.02 }} noShadow>
                  <Image style={{ width: 40, height: 40, margin: 5 }} source={require(".././assets/work.jpg")} />
                  <View style={{ padding: 5 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Eina03_Bold', color: 'black' }}>{item.type}</Text>
                    <Text style={{ fontSize: 10, fontFamily: 'Eina03_Regular', color: 'black' }}>{item.add}</Text>
                  </View>
                 
                </Card>} />
            <TouchableOpacity style={{ marginTop: height * 0.02 }}>
              <Image style={{ width: 40, height: 40, margin: 5, alignSelf: 'center' }} source={require(".././assets/new_add.jpg")} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    } else {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  textWithShadow: {
    textShadowColor: '#fff', fontFamily: 'custom-fonts',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10, fontSize: 24, color: '#fff'
  }, btn: { width: '45%', padding: 10, backgroundColor: '#fff', borderRadius: 20 },
  btn2: { width: '45%', padding: 10, backgroundColor: '#F2F3F4', borderRadius: 20 },
  btnText: { fontSize: 18, textAlign: 'center', color: '#34495E', fontFamily: 'custom-fonts' }
});
