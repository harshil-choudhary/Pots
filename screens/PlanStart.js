import React from 'react';
import { StatusBar,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import {LinearGradient} from 'expo-linear-gradient';

const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*60/100;
const sc4=width*70/100;

export default class PlanStart extends React.Component {
    constructor(props){
      super(props);
      this.state={dates:['21 Dec, Sat','22 Dec, Sun','23 Dec, Mon','24 Dec, Tue'],selected_date:'21 Dec, Sat'
    }
}

  async componentDidMount(){
    await Font.loadAsync({
      'custom-fonts': require('.././assets/fonts/newfont.otf'),
      'custom-fonts2': require('.././assets/fonts/heading.ttf'),
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
        <View style={{flex:1,justifyContent:'center'}}>
        <StatusBar barStyle = "dark-content"  backgroundColor = "#fff"/>
          <Animatable.View animation="fadeInUpBig" style={{flex:3,backgroundColor:'red'}}>
          <Image style={{width:'100%',height:300}} 
                    source={require(".././assets/product.jpg")} blurRadius={10}/>
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" 
          style={{flex:5,backgroundColor:'#fff',marginTop:-100,borderTopRightRadius:30,borderTopLeftRadius:30,padding:20}}>
              <Text style={{fontSize:24,fontFamily:'Eina03_Bold', color:'grey'}}>1 Meal Plan</Text>
              <Text style={{fontSize:26,fontFamily:'Eina03_Bold', color:'black'}}>Select Start Date</Text>
              <Image style={{width:'10%',height:8, marginVertical:7,borderRadius:20,marginBottom:20}} 
                    source={require(".././assets/header_line.png")} /> 
              <View style={{marginVertical:20,backgroundColor:'#f6f6f6',padding:20,borderRadius:20}}>
              {this.state.dates.map((sitem,i) => {
                return <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}} onPress={()=>this.setState({selected_date:sitem})}>
                    <Text style={{fontFamily:'Eina03_Regular',fontSize:18}}>{sitem}</Text>
                    <Ionicons name="md-radio-button-on" style={sitem==this.state.selected_date?{
                    color:'#ffc121'}:{color:'grey'}} size={20}/>
                    </TouchableOpacity>
                    })}
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,fontFamily:'Eina03_Regular',textAlign:'center',marginVertical:20,}}>Plan Ends at </Text>
                <Text style={{fontSize:20,fontFamily:'Eina02_Bold',textAlign:'center',marginVertical:20,}}>21 Dec, Sat</Text>
              </View>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Checkout')}
             style={{padding:10,backgroundColor:'#ffc121',borderRadius:20,}}>
                <Text style={{fontFamily:'Eina03_Bold',fontSize:18,color:'#fff',alignSelf:'center'}}>Set Starting Date</Text>
              </TouchableOpacity>
          </Animatable.View>
        </View>
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
