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
const sc4=width*80/100;

export default class ProductDetails2 extends React.Component {
    constructor(props){
      super(props);
      this.state={qty:1,del_time:'',selected_day:'20',days:[{"day":"Mon","date":"20"},{"day":"Tue","date":"21"},{"day":"Wed","date":"22"},
      {"day":"Thu","date":"23"},{"day":"Fri","date":"24"},{"day":"Sat","date":"25"},{"day":"Sun","date":"26"},{"day":"Mon","date":"27"},
      {"day":"Tue","date":"28"},{"day":"Wed","date":"29"},{"day":"Thu","date":"30"}],
        plans:[1,2,3,4,5],prices:[{"day":1,"price":8},{"day":3,"price":7.5},{"day":7,"price":6.5},{"day":30,"price":6}]}
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

  async chk_qty(type){
      //alert(type)
      if(type=='add'){
        var newq=this.state.qty+1;
        this.setState({qty:newq});
      }else if(this.state.qty>1){
        var newq=this.state.qty-1;
        this.setState({qty:newq});
      }
  }

  renderBestValue(price){
    if (price=='6'){
      return(
        <LinearGradient start={[0, 0]} end={[1, 0]} colors={['#ffc121' , '#9ca83e', '#1a8764']} style={{marginTop:5,padding:10,backgroundColor:"#ffc121",borderRadius:20}}>
          <Text style={{fontSize:12,fontFamily:'Eina03_Bold',color:'#ffffff'}}>BEST VALUE</Text>
        </LinearGradient>
      )
    }
  }

  renderDAY(day){
    if (day>1){
      return(
        <Text style={{fontSize:12,fontFamily:'Eina03_Bold',color:'grey'}}>DAYS</Text>
      )
      }
    else{
      return(
         <Text style={{fontSize:12,fontFamily:'Eina03_Bold',color:'grey'}}>DAY</Text>
      )
    }
  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
        <View>
        <ScrollView style={{backgroundColor:'#eaeaea', height:height*0.9}}>
        <StatusBar barStyle = "dark-content"  backgroundColor = "#fff"/>
          <Animatable.View animation="fadeInUpBig" style={{flex:2,backgroundColor:'#fff',borderRadius:20}}>
                    <Image style={{width:'100%',height:200,borderBottomLeftRadius:20,borderBottomRightRadius:20}} 
                    source={require(".././assets/product.jpg")} />
                    <View style={{flexDirection:'row',paddingHorizontal:20,marginTop:10}}>
                    <Ionicons name="md-radio-button-on" color="#00816b" size={30}/>
                    <View style={{marginLeft:5}}>
                    <Text style={{fontSize:18,fontFamily:'Eina03_Bold',color:'#000000'}}>Prawn Spaghetti in Red Sauce</Text>
                    </View>
                    </View>

                    <View style={{paddingHorizontal:20,marginVertical:10}}>
                        <Text style={{fontSize:16,fontFamily:'Eina03_Bold',color:'grey'}}>The Italian Kitchen</Text>
                        <Text style={{fontSize:12,fontFamily:'Eina03_Regular', paddingVertical:10,}}>
                            Give Your Tummy a taste of authentic Italian Flavours with these Italian Meals
                        </Text>
                        <View style={{borderRadius:10,borderColor:'#31c47f',paddingVertical:10,borderWidth:2,
                        backgroundColor:'#e8fff5',paddingHorizontal:20}}>
                            <Text style={{fontSize:12,fontFamily:'Eina03_Regular',color:'#46433b'}}>50% off upto $15 on First Order</Text>
                            <Text style={{fontSize:18,fontFamily:'Eina03_Bold',color:'#46433b'}}>DAILY50</Text>
                        </View>
                    </View>

          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" style={{flex:3,padding:20,borderBottomLeftRadius:20,borderBottomRightRadius:20,}}>
                <Text style={{fontSize:18,fontFamily:'Eina03_Bold', color:"black"}}>A Sneak-Peek into the Plan</Text>
                <Image style={{width:'10%',height:8, marginVertical:7,borderRadius:20,marginBottom:20}} 
                    source={require(".././assets/header_line.png")} />
                <View style={{justifyContent:'center'}}>
                <FlatList horizontal={true} extraData={this.state}  showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} 
                data={this.state.days}
                renderItem={({item}) => 
                <TouchableOpacity onPress={()=>this.setState({selected_day:item.date})}>
                <View style={item.date==this.state.selected_day?{
                    padding:10,justifyContent:'center',backgroundColor:'#ffc121',borderRadius:20,marginRight:10,minWidth:85,minHeight:85
                }:{padding:10,justifyContent:'center',backgroundColor:'#ffffff',borderRadius:20,marginRight:10,minWidth:80,marginTop:2.5}}>
                    <Text style={item.date==this.state.selected_day?{fontFamily:'Eina03_Bold',alignSelf:'center',fontSize:14, color:'white'}:
                    {fontFamily:'Eina03_Bold',alignSelf:'center',fontSize:14, color:'grey'}}>{item.day}</Text>
                    <Text style={item.date==this.state.selected_day?{fontFamily:'Eina03_Bold',alignSelf:'center',fontSize:30, color:'white'}:{fontFamily:'Eina03_Bold',alignSelf:'center',fontSize:30, color:'black'}}>{item.date}</Text>
                </View></TouchableOpacity>}/>
                </View>
            </Animatable.View>
            <View style={{backgroundColor:'#fff',padding:20,borderRadius:20}}>
                <Text style={{fontSize:22,fontFamily:'Eina03_Bold',color:"black"}}>The Italian Kitchen</Text>
                <Image style={{width:'10%',height:8, marginVertical:7,borderRadius:20,marginBottom:20}} 
                    source={require(".././assets/header_line.png")} /> 
                <Text style={{fontSize:12,fontFamily:'Eina03_Regular',marginBottom:10, color:"black"}}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the 
                    visual form of a document or a typeface without relying on meaningful content</Text>
                    <Image style={{width:'100%',height:150,borderRadius:20, marginVertical:20,}} 
                    source={require(".././assets/product.jpg")} />
                <Text style={{fontSize:12,fontFamily:'Eina03_Regular',marginBottom:10, color:"black"}}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the 
                    visual form of a document or a typeface without relying on meaningful content</Text>
            </View>
            <View style={{padding:20}}>
                <Text style={{fontSize:22,fontFamily:'Eina03_Bold',color:"black"}}>Most Flexible Plan Ever</Text>
                <Image style={{width:'10%',height:8, marginVertical:7,borderRadius:20,marginBottom:20}} 
                    source={require(".././assets/header_line.png")} /> 
                <FlatList horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} 
                data={this.state.plans} renderItem={({item}) => 
                <TouchableOpacity style={{padding:10,justifyContent:'center',maxWidth:200,
                backgroundColor:'#fff',borderRadius:20,marginRight:10, height:150}}>
                    <View style={{flexDirection:'row'}}>
                    <Image style={{width:50,height:50,borderRadius:10,marginRight:10}} 
                    source={require(".././assets/swap_meal.jpg")} />
                    <Text style={{fontFamily:'Eina03_Bold',alignSelf:'center',fontSize:18, color:'black'}}>Swap Meal</Text>
                    </View>
                    <Text style={{fontFamily:'Eina03_Regular',fontSize:12, marginVertical:10}}>Craving a Change? Swap upcoming Meal
                    any other meal</Text>
                </TouchableOpacity>}/> 
            </View>
            <View style={{padding:20}}>
                <Text style={{fontSize:20,fontFamily:'Eina03_Bold', color:'black'}}>Choose Your Plan</Text>
                <Image style={{width:'10%',height:8, marginVertical:7,borderRadius:20,marginBottom:20}} 
                    source={require(".././assets/header_line.png")} /> 
                <View style={{borderRadius:10,borderColor:'#31c47f',paddingVertical:10,marginVertical:20,borderWidth:2,
                        backgroundColor:'#e8fff5',paddingHorizontal:20}}>
                            <Text style={{fontSize:12,fontFamily:'Eina03_Regular',color:'#46433b'}}>50% off upto $15 on First Order</Text>
                            <Text style={{fontSize:18,fontFamily:'Eina03_Bold',color:'#46433b'}}>DAILY50</Text>
                </View>

                <FlatList keyExtractor={(item, index) => index.toString()} 
                data={this.state.prices} renderItem={({item}) => 
                    <Card style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,
                    paddingHorizontal:20,borderRadius:20,paddingVertical:10}}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{fontSize:12,fontFamily:'Eina03_Bold',color:'grey'}}>{item.day} </Text>
                          {this.renderDAY(item.day)}
                        </View>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{fontSize:16,fontFamily:'Eina03_Bold'}}>${item.price} </Text>
                          <Text style={{fontSize:16,fontFamily:'Eina03_Regular'}}>/ meal</Text>
                        </View>
                        {this.renderBestValue(item.price)}
                    </View>
                    <TouchableOpacity style={{padding:10,backgroundColor:"#ffc121",borderRadius:10, height:40, alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:14,fontFamily:'Eina03_Bold',color:'#fff'}}>Select</Text>
                    </TouchableOpacity>
                    </Card>}/> 
            </View>
      </ScrollView>
   
      <View style={{height:height*0.1,borderTopLeftRadius:20,borderTopRightRadius:20,}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('PlanStart')} style={{backgroundColor:'#ffc121',borderTopLeftRadius:20,borderTopRightRadius:20,paddingHorizontal:40,paddingVertical:30}}>
          <Text style={{fontFamily:'Eina03_Bold',fontSize:20,color:'#fff',alignSelf:'center'}}>Choose Your Plan</Text>
        </TouchableOpacity> 
      </View>
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
