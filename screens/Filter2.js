import React from 'react';
import {
  StatusBar, StyleSheet, KeyboardAvoidingView, AsyncStorage, ImageBackground, Dimensions, FlatList, ScrollView,
  Text, Image, View, TextInput, TouchableOpacity, ActivityIndicator, BackHandler
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Header, Left, Card, CardItem, Tab, Tabs, Body, Icon, Right, Title } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var filterby = [
  { label: 'Popularity', value: 'Popularity' },
  { label: 'Price Low to High', value: 'Price Low to High' },
  { label: 'Price High to Low', value: 'Price High to Low' }
]
const width = Math.round(Dimensions.get('window').width);
const screenWidth = width * 48 / 100;
const sc3 = width * 60 / 100;
const sc4 = width * 70 / 100;

export default class PlanStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: ['21 Dec, Sat', '22 Dec, Sun', '23 Dec, Mon', '24 Dec, Tue'], selected_date: '21 Dec, Sat', viewAnimation: "fadeInDownBig",
      behavior: 'height' ,}
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  async componentDidMount() {
    await Font.loadAsync({
      'custom-fonts': require('.././assets/fonts/newfont.otf'),
      'custom-fonts2': require('.././assets/fonts/heading.ttf'),
      'Eina02_Bold': require('.././assets/fonts/Eina02-Bold.ttf'),
      'Eina02_Regular': require('.././assets/fonts/Eina02-Regular.ttf'),
      'Eina03_Bold': require('.././assets/fonts/Eina03-Bold.ttf'),
      'Eina03_Regular': require('.././assets/fonts/Eina03-Regular.ttf'),
    }); this.setState({
      assetsLoaded: true,
    });
    this.setState({
      viewAnimation:true,
    });
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
 
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
   
  handleBackButtonClick() {
    this.setState({viewAnimation:'fadeOutUpBig', screenExit:true})
    return true;
  }
  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#000000" }}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <ImageBackground
            // resizeMode={'stretch'} // or cover
            style={{ flex: 1 }} // must be passed from the parent, the number may vary depending upon your screen size
            source={require('.././assets/product.jpg')} blurRadius={10}
          >
            
            <Animatable.View animation={this.state.viewAnimation} onAnimationEnd={() => {if (this.state.screenExit){this.props.navigation.navigate("Dashboard")}}}
              style={{
                flex: 5, flexDirection: 'row', backgroundColor: '#fff', borderBottomRightRadius: 20, borderBottomLeftRadius: 20,
                padding: 10, marginBottom: 150
              }}>
              <View style={{ flex: 3, padding: 20 }}>
                <Text style={{ fontSize: 40, fontFamily: 'Eina03_Bold', marginBottom: 40 }}>Filter</Text>
                <Text style={{ fontSize: 25, fontFamily: 'Eina03_Bold', marginBottom: 20, color: 'grey' }}>Sort</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Eina02_Regular', marginBottom: 10 }}>Cuisine</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Eina02_Regular' }}>Kitchens</Text>
              </View>
              <View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginTop: 35, marginRight: 20 }}>
                  <TouchableOpacity 
                    onPress={() => this.setState({ viewAnimation: 'fadeOutUpBig', screenExit: true })}> 
                    <Image style={{
                      width: 25,
                      height: 25,
                      marginLeft: 15,
                      //  borderRadius:100, 
                    }}
                      source={require('.././assets/crossIcon.png')} />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 4, paddingTop: 120, backgroundColor: '#eaeaea', borderRadius: 20, paddingHorizontal: 10, marginTop: 50 }}>
                  <RadioForm style={{ marginRight: 5, marginBottom: 10 }} buttonSize={10}
                    labelStyle={{ fontFamily: 'Eina03_Regular' }}
                    radio_props={filterby} buttonColor={'#212F3C'} selectedButtonColor={'#ffc121'}
                    initial={0}// formHorizontal={true}  labelHorizontal={true}
                    onPress={(value) => { this.setState({ filter_by: value }) }} />
                </View>
              </View>
            </Animatable.View>
          </ImageBackground>
        </View>
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
