import React from 'react';
import { StatusBar,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import {LinearGradient} from 'expo-linear-gradient';

const width=Math.round(Dimensions.get('window').width);
const height=Math.round(Dimensions.get('window').height);
const screenWidth = width*48/100;
const sc3=width*60/100;
const sc4=width*70/100;

export default class Account extends React.Component {
    constructor(props){
      super(props);
      this.state={

      }
    }

  async componentDidMount(){
    await Font.loadAsync({
      'custom-fonts': require('.././assets/fonts/newfont.otf'),
      'custom-fonts2': require('.././assets/fonts/heading.ttf'),
      'bfont': require('.././assets/fonts/newfont.otf'),

      'Eina02_Bold': require('.././assets/fonts/Eina02-Bold.ttf'),
      'Eina02_Regular': require('.././assets/fonts/Eina02-Regular.ttf'),
      'Eina03_Bold': require('.././assets/fonts/Eina03-Bold.ttf'),
      'Eina03_Regular': require('.././assets/fonts/Eina03-Regular.ttf'),
    });this.setState({ assetsLoaded: true });
  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
        <ImageBackground source={require('.././assets/usermenu.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <View style={{flex:1,padding:40}}>
              <Text style={{fontSize:20,fontFamily:'Eina03_Bold',marginBottom:10}}>Parth</Text>
              <Text style={{fontSize:18,fontFamily:'Eina03_Bold',marginBottom:5}}>897 789 1200</Text>
              <Text style={{fontSize:16,fontFamily:'Eina03_Bold'}}>parth@gmail.com</Text>
            </View>
            <View style={{flex:3,padding:40}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("MyOrders")} style={{flexDirection:'row',marginBottom:15}}>
                <Image style={{width:30, height:30,marginRight:10}} source={require(".././assets/my_orders.jpg")} />
                <Text style={{fontSize:20,fontFamily:'Eina03_Bold',margin:5}}>My Orders</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("MyAddress")} style={{flexDirection:'row',marginBottom:15}}>
                <Image style={{width:30, height:30,marginRight:10}} source={require(".././assets/address.jpg")} />
                <Text style={{fontSize:20,fontFamily:'Eina03_Bold',margin:5}}>Manage Addresses</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Payments")} style={{flexDirection:'row',marginBottom:15}}>
                <Image style={{width:30, height:30,marginRight:10}} source={require(".././assets/payments.jpg")} />
                <Text style={{fontSize:20,fontFamily:'Eina03_Bold',margin:5}}>Payments</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',marginBottom:15}}>
                <Image style={{width:30, height:30,marginRight:10}} source={require(".././assets/help.jpg")} />
                <Text style={{fontSize:20,fontFamily:'Eina03_Bold',margin:5}}>Help & Support</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")} style={{flexDirection:'row',marginBottom:15}}>
                <Image style={{width:30, height:30,marginRight:10}} source={require(".././assets/logout.jpg")} />
                <Text style={{fontSize:20,fontFamily:'Eina03_Bold',margin:5}}>Logout</Text>
              </TouchableOpacity>
              <Text style={{fontSize:12,fontFamily:'Eina03_Bold',alignSelf:'center',marginTop:50}}>App Version 1.02</Text>
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
