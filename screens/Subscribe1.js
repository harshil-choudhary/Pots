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

export default class Subscribe extends React.Component {
    constructor(props){
      super(props);
      this.state={products:[{"title":"Subscribe and get surprised everyday","img":"dish1","color":"#ffc121"},
      {"title":"Subscribe and get surprised everyday","img":"dish1","color":"#00816b"},
      {"title":"Subscribe and get surprised everyday","img":"dish1","color":"red"}],
      food_types:['Breakfast','Lunch','Dinner','Desert'],"selected_food_type":"Breakfast",
      products2:[{"title":"Prawn Spaghetti in Red Sauce","price":8,"img":'product1.jpg'},{"title":"Prawn Spaghetti in Red Sauce","price":8,"img":'product1.jpg'},
      {"title":"Prawn Spaghetti in Red Sauce","price":8,"img":'product1.jpg'},{"title":"Prawn Spaghetti in Red Sauce","price":8,"img":'product1.jpg'}]}
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
        <View style={{flex:1,backgroundColor:'#fff'}}>
        <StatusBar barStyle = "dark-content"  backgroundColor = "#fff"/>
          <Animatable.View animation="fadeInUpBig" 
          style={{flex:1,backgroundColor:'#fff',padding:20,marginTop:20}}>
              <Text style={{fontSize:14,fontFamily:'custom-fonts'}}>Delivering to</Text>
              <Text style={{fontSize:20,fontFamily:'custom-fonts'}}>DLF Phase 5</Text>
                <View style={{flexDirection:'row',alignItems:'flex-start',marginTop:20}}>
                {this.state.food_types.map((sitem,i) => {
            return <TouchableOpacity onPress={()=>this.setState({selected_food_type:sitem})}
            style={sitem==this.state.selected_food_type?{
                marginRight:5,minWidth:30,padding:8,borderWidth:0.5,borderColor:'#ffc121',borderRadius:50,backgroundColor:'#ffc121'
            }:{marginRight:5,minWidth:30,padding:8,borderWidth:0.5,borderColor:'#5D6D7E',borderRadius:50}}>
                <Text style={{fontFamily:'custom-fonts',alignSelf:'center'}}>{sitem}</Text></TouchableOpacity>
                })}
                </View>
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" 
          style={{flex:3,backgroundColor:'#eaeaea',padding:20,borderTopRightRadius:20,borderTopLeftRadius:20,}}>
            <View style={{flexDirection:'row'}}>
              <Image style={{width:40, height:40,margin:5,borderRadius:10}} source={require(".././assets/dish.jpg")} />
              <View style={{padding:5}}>
              <Text style={{fontSize:16,fontFamily:'custom-fonts'}}>The Italian Kitchen</Text>
              <Text style={{fontSize:12,fontFamily:'custom-fonts',fontStyle:'italic',color:'grey'}}>Authentic Italic Food</Text>
              </View>
            </View>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} 
                data={this.state.products2}
                renderItem={({item}) => 
                <Card style={{width:sc4,marginRight:50,borderRadius:20,padding:0,height:200}}>
                    <Image style={{width:'100%',height:140,borderRadius:20}} source={require(".././assets/product.jpg")} />
                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    <View style={{flex:4}}>
                    <Text style={{fontSize:14,fontFamily:'custom-fonts'}}>{item.title}</Text>
                    </View>
                    <Text style={{fontSize:16,fontFamily:'custom-fonts',flex:1,textAlign:'right'}}>${item.price}</Text>
                    </View>
                    <LinearGradient colors={['#f3dda0' , '#fcedc3', '#fff0c7']}  
                        style={{ flexDirection:'row',justifyContent:'space-evenly',borderRadius:20}}>
                        <View style={{alignItems:'center',padding:10,borderRightColor:'#fde2a2',borderRightWidth:2}}>
                            <Text style={{fontSize:12,fontFamily:'custom-fonts',color:'#aaa79f'}}>Once</Text>
                            <Text style={{fontSize:16,fontFamily:'custom-fonts',color:'#46433b'}}>$8</Text>
                            <Text style={{fontSize:12,fontFamily:'custom-fonts',color:'#aaa79f'}}>Per Meal</Text>
                        </View>
                        <View style={{alignItems:'center',padding:10,borderRightColor:'#fde2a2',borderRightWidth:2}}>
                            <Text style={{fontSize:12,fontFamily:'custom-fonts',color:'#aaa79f'}}>3 Days</Text>
                            <Text style={{fontSize:16,fontFamily:'custom-fonts',color:'#46433b'}}>$7.5</Text>
                            <Text style={{fontSize:12,fontFamily:'custom-fonts',color:'#aaa79f'}}>Per Meal</Text>
                        </View>
                        <View style={{alignItems:'center',padding:10}}>
                            <Text style={{fontSize:12,fontFamily:'custom-fonts',color:'#aaa79f'}}>Weekly</Text>
                            <Text style={{fontSize:16,fontFamily:'custom-fonts',color:'#46433b'}}>$6.5</Text>
                            <Text style={{fontSize:12,fontFamily:'custom-fonts',color:'#aaa79f'}}>Per Meal</Text>
                        </View>
                    </LinearGradient>
                </Card>}/>
          </Animatable.View>
          <Card style={{borderRadius:20,borderWidth:6,borderColor:'#31c47f',backgroundColor:'#e8fff5',padding:10}}>
                    <Text style={{fontSize:12,fontFamily:'custom-fonts',color:'#46433b'}}>50% off upto $15 on First Order</Text>
                    <Text style={{fontSize:18,fontFamily:'custom-fonts',color:'#46433b'}}>DAILY50</Text>
                </Card>
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
