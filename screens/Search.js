import React, {useState} from 'react';
import { StatusBar,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator, TouchableWithoutFeedback, BackHandler} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import {LinearGradient} from 'expo-linear-gradient';


const height=Math.round(Dimensions.get('window').height);
const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*60/100;
const sc4=width*70/100;


export default class Search extends React.Component {
    constructor(props){
      super(props);
      this.state={food_types:['Chinese','Indian','Pizza','Burger'],viewAnimation:"fadeInDownBig",
      result:[
      {'name':'The Italian Kitchen','subtitle':'Authentic Italian Food'},
      {'name':'The Italian House','subtitle':'Homemade Italian'},
      {'name':'Italiano','subtitle':'Authentic Italian Food'},
    
    ],
    behavior: 'height' ,
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
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
    this.setState({
      data: this.state.result,
      loading: false,
      viewAnimation:true,
    });
    this.arrayholder = this.state.result;
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {

    this.setState({viewAnimation:'fadeOutUpBig', screenExit:true})
    return true;
  }

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };



  render() {
    const {assetsLoaded} = this.state;

      if( assetsLoaded ) {
      return (
        <KeyboardAvoidingView behavior={this.state.behavior} style={{flex:1,justifyContent:'center'}}>
        <ImageBackground source={require('.././assets/bgs.jpg')} 
        resizeMode="cover" blurRadius={20} style={{flex:1}}>
       
        <StatusBar barStyle = "dark-content"  backgroundColor = "#fff"/>
          <Animatable.View animation={this.state.viewAnimation} onAnimationEnd={() => {if (this.state.screenExit){this.props.navigation.navigate("Dashboard")}}}
          style={{backgroundColor:'#fff',borderBottomLeftRadius:30,borderBottomRightRadius:30,paddingTop:40, height:height*0.25}}>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <View style={{backgroundColor:'#eaeaea',width:'75%', borderRadius:20, alignSelf:'center', flexDirection:'row', alignItems:'center', justifyContent:'center', marginRight:5,}}>
                <TextInput placeholder="Search here" style={{fontFamily:'Eina03_Regular',padding:10,
                textTransform: 'capitalize',width:'90%', height:38,borderRadius:20, alignSelf:'center'}}
                onChangeText={text => this.searchFilterFunction(text)}/>
              </View> 
              <TouchableOpacity style={{backgroundColor:'#eaeaea', height:38, width:38, borderRadius:20, alignSelf:'center', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Ionicons name="md-search"  color='#03816b' size={25} padding={10}/>
              </TouchableOpacity> 
            </View> 
            
            <View style={{flexDirection:'row',padding:10,justifyContent:'space-between',marginTop:height*0.01, marginLeft:'5%',}}>
                    <View style={{flexDirection:'row',alignItems:'flex-start',fontFamily:'Eina03_Bold'}}>
                    {this.state.food_types.map((sitem,i) => {
                return <TouchableOpacity onPress={()=>this.setState({selected_food_type:sitem})}
                style={sitem==this.state.selected_food_type?{
                  marginRight:5,width:width*0.22,paddingHorizontal:8,paddingVertical:8,borderWidth:0.5,borderColor:'#ffc121',borderRadius:50,backgroundColor:'#ffc121'
              }:{marginRight:5,width:width*0.22,paddingHorizontal:8,paddingVertical:8,borderWidth:0.5,borderColor:'#5D6D7E',borderRadius:50}}>
                  <Text style={sitem==this.state.selected_food_type?{fontFamily:'Eina03_Bold',alignSelf:'center', color:'#ffffff', fontSize:12}:{fontFamily:'Eina03_Bold',alignSelf:'center',color:'black',fontSize:12}}>{sitem}</Text></TouchableOpacity>
                  })}
                    </View>
                </View>
          </Animatable.View>
          
          <Animatable.View animation={this.state.viewAnimation} onAnimationEnd={() => {if (this.state.screenExit){this.props.navigation.navigate("Dashboard")}}} style={{height:height*0.8,padding:20, alignItems:'center',}}>
            <Text style={{fontSize:18,fontFamily:'Eina03_Regular',color:'#b6bac2',textAlign:'center',marginBottom:15}}>Search Results</Text>
            <View >
            <FlatList keyExtractor={(item, index) => index.toString()} 
                data={this.state.data} renderItem={({item}) => 
                    <Card style={{flexDirection:'row',marginBottom:10,borderRadius:20,padding:5,width:width*0.85,justifyContent:'flex-start',alignItems:'center'}} noShadow>
                    <Image style={{width:35,height:35,borderRadius:10,marginRight:5}} 
                    source={require(".././assets/swap_meal.jpg")} />
                    <View style={{padding:5}}>
                    <Text style={{fontSize:16,fontFamily:'Eina03_Bold',color:'black'}}>{item.name}</Text>
                    <Text style={{fontSize:12,fontFamily:'custom-fonts',fontStyle:'italic',color:'grey'}}>{item.subtitle}</Text>
                    </View>
                    </Card>}/> 
                    <TouchableOpacity style={{ width:width*0.9, height:height*0.45, zIndex:1,}}
                      onPress={() => this.setState({ viewAnimation: 'fadeOutUpBig', screenExit: true })}>

                      </TouchableOpacity>
                    </View>
           
          </Animatable.View>
          

        </ImageBackground>
        </KeyboardAvoidingView>
    
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
