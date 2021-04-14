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
const sc3=width*80/100;
const sc4=width*80/100;

export default class ProductDetails extends React.Component {
    constructor(props){
      super(props);
      this.state={qty:1,del_time:'', content1:false,  content2:false, content3:false, content4:false}
     
    
    }
    componentHideAndShow = () => {
      this.setState(previousState => ({ content: !previousState.content }))
    }

    timeS1(){
      this.setState({del_time:1})
      this.setState(previousState => ({ content1: !previousState.content1 }))
     
     }
     timeS2(){
      this.setState({del_time:2})
      this.setState(previousState => ({ content2: !previousState.content2 }))
     
     }
     timeS3(){
      this.setState({del_time:3})
      this.setState(previousState => ({ content3: !previousState.content3 }))
     
     }
     timeS4(){
      this.setState({del_time:4})
      this.setState(previousState => ({ content4: !previousState.content4 }))
     
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

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
        <ScrollView style={{backgroundColor:'#eaeaea'}}>
        <StatusBar barStyle = "dark-content"  backgroundColor = "#fff"/>
          <Animatable.View animation="fadeInUpBig" style={{flex:2,backgroundColor:'#fff',borderRadius:20}}>
                    <Image style={{width:'100%',height:200,borderBottomLeftRadius:20,borderBottomRightRadius:20}} 
                    source={require(".././assets/product.jpg")} />
                    <View style={{flexDirection:'row',padding:10,marginTop:15}}>
                    <Ionicons name="md-radio-button-on" color="#00816b" size={25}/>
                    <View style={{marginLeft:10}}>
                      <View style={{width:'60%'}}>
                    <Text style={{fontSize:18,fontFamily:'Eina03_Bold',color:'black'}}>Prawn Spaghetti in Red Sauce</Text>
                    </View>
                    <View style={{marginTop:10,width:width*0.8}}>
                    <Text style={{fontSize:14,fontFamily:'Eina03_Regular',textAlign:'justify'}}>
                        Authentic Flavourful home made spaghetti in fresh nepolitan sauce, with prawns</Text>
                        </View>
                    </View>
                    </View>
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" style={{flex:3,padding:20}}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{width:40, height:40,margin:5,borderRadius:10}} source={require(".././assets/dish.jpg")} />
                    <View style={{padding:5}}>
                    <Text style={{fontSize:16,fontFamily:'Eina03_Bold',color:'black'}}>The Italian Kitchen</Text>
                    <Text style={{fontSize:12,fontFamily:'custom-fonts',fontStyle:'italic',color:'grey'}}>Authentic Italic Food</Text>
                    </View>
                </View>
                <Card style={{borderRadius:20,flexDirection:'row',justifyContent:'space-between',padding:20}}>
                        <Text style={{fontSize:20,fontFamily:'Eina03_Bold',color:'black'}}>$ 8</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity onPress={()=>this.chk_qty('remove')} style={{justifyContent:'center'}}>
                                <Ionicons name="md-remove" color="#000000" size={20}/>
                            </TouchableOpacity>
                            <Text style={{backgroundColor:'#ffc121',color:'#fff',fontWeight:'bold',borderRadius:20,paddingHorizontal:20,paddingVertical:5,
                        marginHorizontal:5,fontSize:18,fontFamily:'Eina03_Bold'}}>{this.state.qty}</Text>
                            <TouchableOpacity onPress={()=>this.chk_qty('add')} style={{justifyContent:'center'}}>
                                <Ionicons name="md-add" color="#000000" size={20}/>
                            </TouchableOpacity>
                        </View>
                </Card>
                <Card style={{borderRadius:20,padding:20,marginTop:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,fontFamily:'Eina03_Bold',color:'black'}}>Add Extra</Text>
                    <TouchableOpacity>
                        <Ionicons name="md-add" color="grey" size={26}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:12,fontFamily:'Eina03_Regular',color:'black'}}>Permesson, Cheese, Prawns etc</Text>
                </Card>
                <Card style={{flexDirection:'row',width:sc3,padding:20,borderRadius:20,backgroundColor:'#00816b',marginTop:10}}>
                    <View style={{flex:3,justifyContent:'center'}}>
                    <Text style={{fontSize:20,fontFamily:'Eina03_Bold',color:'#fff'}}>Subscribe & get this meal at $6/Meal</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                    <Image style={{width:100, height:100,margin:5,borderRadius:100}}
                      source={require(".././assets/dish.jpg")} />
                    </View>
                </Card>


                <Card style={{borderRadius:20,padding:20}}>
                    <Text style={{fontSize:20,color:'black',fontFamily:'Eina03_Bold',marginBottom:10}}>Select a Time Slot</Text>
                    <View style={{flexDirection:'row'}}>

                    

                    <TouchableOpacity onPress={ this.timeS1.bind(this)}
                style={this.state.del_time==1?{flex:1,padding:5,borderWidth:2,borderColor:'#ffc121',borderRadius:30,margin:4,
                        }:{flex:1,padding:8,borderWidth:1,borderColor:'grey',borderRadius:50,margin:4}}>
                    <Text style={{fontFamily:'Eina03_Bold',color:'black',alignSelf:'center',fontSize:12}}>12:00 PM-12:45 PM</Text>
                    {this.state.content1 ? <Text style= {styles.headerText}>TODAY</Text> : null}
                    </TouchableOpacity>

                    

                 





                    <TouchableOpacity onPress={this.timeS2.bind(this)}
                style={this.state.del_time==2?{flex:1,padding:5,borderWidth:2,borderColor:'#ffc121',borderRadius:50,margin:4,
                        }:{flex:1,padding:8,borderWidth:1,borderColor:'grey',borderRadius:50,margin:4}}>
                    <Text style={{fontFamily:'Eina03_Bold',color:'black',alignSelf:'center',fontSize:12}}>12:45 PM-01:00 PM</Text>
                    {this.state.content2 ? <Text style= {styles.headerText}>TODAY</Text> : null}
                    
                    </TouchableOpacity>
                    </View>







                    <View style={{flexDirection:'row',marginTop:10}}>



                    <TouchableOpacity onPress={this.timeS3.bind(this)}
                style={this.state.del_time==3?{flex:1,padding:5,borderWidth:2,borderColor:'#ffc121',borderRadius:50,margin:4,
                        }:{flex:1,padding:8,borderWidth:1,borderColor:'grey',borderRadius:50,margin:4}}>
                    <Text style={{fontFamily:'Eina03_Bold',color:'black',alignSelf:'center',fontSize:12}}>12:00 PM-12:45 PM</Text>
                    {this.state.content3 ? <Text style= {styles.headerText}>TODAY</Text> : null}
</TouchableOpacity>


                    <TouchableOpacity onPress={this.timeS4.bind(this)}
                style={this.state.del_time==4?{flex:1,padding:5,borderWidth:2,borderColor:'#ffc121',borderRadius:50,margin:4,
                        }:{flex:1,padding:8,borderWidth:1,borderColor:'grey',borderRadius:50,margin:4}}>
                    <Text style={{fontFamily:'Eina03_Bold',color:'black',alignSelf:'center',fontSize:12}}>12:45 PM-01:00 PM</Text>
                    {this.state.content4 ? <Text style= {styles.headerText}>TODAY</Text> : null}
                    
                    </TouchableOpacity>
                    </View>




                </Card>
                <Card style={{borderRadius:20,padding:20,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:16,fontFamily:'Eina03_Bold',marginTop:7,color:'black'}}>Apply Coupon</Text>
                    <TextInput style={{fontFamily:'Eina03_Bold',backgroundColor:'#eaeaea',padding:5,textTransform: 'capitalize',
                    width:'50%', height:38,borderRadius:20,textAlign:'center'}}/>
                </Card>
            </Animatable.View>
            <View style={{backgroundColor:'#fff',borderTopLeftRadius:20,borderTopRightRadius:20,paddingHorizontal:40,paddingVertical:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:20,fontFamily:'Eina03_Bold',color:'black'}}>Item Total</Text>
                        <Text style={{fontSize:14,fontFamily:'Eina03_Bold',color:'#00816b'}}>Delivery Fee</Text>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text style={{fontSize:20,fontFamily:'Eina03_Bold',color:'black'}}>$8</Text>
                        <Text style={{fontSize:14,fontFamily:'Eina03_Bold',color:'#00816b'}}>Free</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('PlanStart')}
             style={{padding:10,backgroundColor:'#ffc121',borderRadius:20,width:'100%',marginTop:10}}>
                <Text style={{fontFamily:'Eina03_Bold',fontSize:18,color:'#fff',alignSelf:'center'}}>Proceed to Checkout</Text>
                </TouchableOpacity>
            </View>
      </ScrollView>
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
  btnText:{fontSize:18, textAlign:'center', color:'#34495E',fontFamily:'custom-fonts'},
  headerText:{fontWeight:'bold',color:'#ffc121',textAlign:'center'}
});
