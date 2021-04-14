import React from 'react';
import { StatusBar,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import {LinearGradient} from 'expo-linear-gradient';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var filterby=[
    {label:'Popularity', value:'Popularity'},
    {label:'Price Low to High', value:'Price Low to High'},
    {label:'Price High to Low', value:'Price High to Low'}
  ]

const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*60/100;
const sc4=width*70/100;

export default class Filters extends React.Component {
    constructor(props){
      super(props);
      this.state={filter_by:''
      }
    }

  async componentDidMount(){
    await Font.loadAsync({
      'custom-fonts': require('.././assets/fonts/newfont.otf'),
      'custom-fonts2': require('.././assets/fonts/heading.ttf')
    });this.setState({ assetsLoaded: true });
  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
        <ImageBackground source={require('.././assets/usermenu.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <View style={{flex:1}}>
            </View>
            <View style={{flex:3,padding:30,flexDirection:'row'}}>
              <View style={{flex:1}}>
                  <Text style={{fontSize:40,fontFamily:'custom-fonts',marginBottom:40}}>Filter</Text>
                  <Text style={{fontSize:20,fontFamily:'custom-fonts',marginBottom:20,color:'grey'}}>Sort</Text>
                  
                  <Text style={{fontSize:20,fontFamily:'custom-fonts',marginBottom:10}}>Cuisine</Text>
                  <Text style={{fontSize:20,fontFamily:'custom-fonts'}}>Kitchen</Text>
              </View>
              <View style={{flex:1,paddingTop:100}}>
                <RadioForm style={{marginRight:10,fontFamily:'custom-fonts'}} buttonSize={14} 
                  radio_props={filterby} buttonColor={'#212F3C'} selectedButtonColor={'#ffc121'}
                  initial={0}// formHorizontal={true}  labelHorizontal={true}
                  onPress={(value)=>{this.setState({filter_by:value})}}/>
              </View>
            </View>
        </ImageBackground>  
      );}else {
      return (
          <View>
              <ActivityIndicator />
          </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  textWithShadow:{
      textShadowColor: '#fff',fontFamily:'custom-fonts',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,fontSize:24,color:'#fff'
  },btn:{width:'45%', padding:10, backgroundColor:'#fff',borderRadius:20},
  btn2:{width:'45%', padding:10, backgroundColor:'#F2F3F4',borderRadius:20},
  btnText:{fontSize:18, textAlign:'center', color:'#34495E',fontFamily:'custom-fonts'}
});
