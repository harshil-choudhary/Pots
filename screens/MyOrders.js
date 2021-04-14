import React from 'react';
import { StatusBar,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import {LinearGradient} from 'expo-linear-gradient';
import StarRating from 'react-native-star-rating';

const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*60/100;
const sc4=width*70/100;

export default class MyOrders extends React.Component {
    constructor(props){
      super(props);
      this.state={orders:[{'color':'#058169','odate':'17 Jan','otime':'07:35 PM','title':'Prawn Spaghetti in Red Sauce','subtitle':'The Italian Kitchen',
            'price':8.24,'rating':3,'status':'Delivered','rated':'Rated'},{'color':'#f17677','odate':'15 Jan','otime':'07:35 PM','title':'Prawn Spaghetti in Red Sauce','subtitle':'The Italian Kitchen',
            'price':8.24,'rating':1,'status':'Cancelled','rated':'UnRated'}]
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
        <ImageBackground source={require('.././assets/My_Orders_BG.png')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <StatusBar barStyle = "dark-content"  backgroundColor = "#fff"/>
            <View style={{flex:1,padding:38}}>
              <TouchableOpacity   onPress={() => this.props.navigation.goBack()}>
              <Text style={{fontSize:12,fontFamily:'Eina03_Bold',color:'#fff'}}>back</Text>
              <Image style={{width:'25%',height:12, marginVertical:5,borderRadius:20,marginLeft:-40}} 
                    source={require(".././assets/Wave_line.png")} /> 
               </TouchableOpacity>
              <Text style={{fontSize:26,fontFamily:'Eina03_Bold',marginTop:10}}>My Orders</Text>
            </View>
            <View style={{flex:3,padding:20}}>
                <FlatList keyExtractor={(item, index) => index.toString()} 
                data={this.state.orders} renderItem={({item}) =>
                    <View style={{marginBottom:10}}>
                    <Text style={{fontSize:12,fontFamily:'Eina03_Bold',marginBottom:5}}>{item.odate} . {item.otime}</Text> 
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{flex:7}} onPress={()=>this.props.navigation.navigate("OrderDetails")}>
                        <Card style={{borderRadius:10,padding:10,width:'100%'}}>
                        <Text style={{fontSize:12,fontFamily:'Eina03_Bold',marginBottom:5}}>{item.title}</Text> 
                        <Text style={{fontSize:10,fontFamily:'Eina03_Bold',marginBottom:5}}>From {item.subtitle}</Text> 
                        <Text style={{fontSize:12,fontFamily:'Eina03_Bold',marginBottom:5}}>$ {item.price}</Text> 
                        </Card>
                        </TouchableOpacity>
                        <View style={{flex:2,marginLeft:5,marginTop:5}}>
                            <Text style={{backgroundColor:item.color,padding:10,color:'#fff',borderRadius:10,
                                textAlign:'center',fontSize:7,fontFamily:'Eina03_Bold',width:"80%",marginLeft:5}}>{item.status}</Text>
                            <View style={{backgroundColor:'#f1f1f1',padding:5,marginTop:15,borderRadius:10, justifyContent:'center',width:"80%",marginLeft:5,}}>
                                <Text style={{fontFamily:'Eina03_Bold',color:'grey',textAlign:'center',fontSize:7,marginBottom:4}}>{item.rated}</Text>
                                <StarRating fullStarColor="#ffc121" emptyStarColor="grey" starSize={7}
                                 disabled={false} maxStars={5} rating={item.rating}/>
                            </View>
                        </View>
                    </View>
                    </View>}/>
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
      textShadowColor: '#fff',fontFamily:'Eina03_Bold',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,fontSize:24,color:'#fff'
  },btn:{width:'45%', padding:10, backgroundColor:'#fff',borderRadius:20},
  btn2:{width:'45%', padding:10, backgroundColor:'#F2F3F4',borderRadius:20},
  btnText:{fontSize:18, textAlign:'center', color:'#34495E',fontFamily:'Eina03_Bold'}
});
