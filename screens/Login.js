import React from 'react';
import { StyleSheet,StatusBar,AsyncStorage,KeyboardAvoidingView,ScrollView,Button,TextInput,ActivityIndicator,ImageBackground,
  FlatList, Text, View,Image,TouchableOpacity, Dimensions  } from 'react-native';
import { Icon } from 'native-base';
import * as Font from 'expo-font';
import AnimatedLoader from "react-native-animated-loader";
console.disableYellowBox = true;
import { Ionicons } from 'react-native-vector-icons';

const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {
 
  constructor(props){
    super(props);
     this.state={assetsLoaded:false,
       cats:[{'name':'category1'},{'name':'category2'},{'name':'category3'},{'name':'category3'},{'name':'category3'}],
       spinner: false,username:'',password:''
     }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'custom-fonts': require('.././assets/fonts/newfont.otf'),

      'Eina02_Bold': require('.././assets/fonts/Eina02-Bold.ttf'),
      'Eina02_Regular': require('.././assets/fonts/Eina02-Regular.ttf'),
      'Eina03_Bold': require('.././assets/fonts/Eina03-Bold.ttf'),
      'Eina03_Regular': require('.././assets/fonts/Eina03-Regular.ttf'),
    });this.setState({ assetsLoaded: true });
    const userToken = await AsyncStorage.getItem('LoggedIn');
    if(userToken){
      this.props.navigation.replace('Dashboard');
    }
  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
      <KeyboardAvoidingView >
 
      <StatusBar barStyle = "dark-content"  backgroundColor = "#fff"/>
            <AnimatedLoader visible={this.state.spinner} overlayColor="rgba(255,255,255,0.75)" source={require(".././assets/loader.json")}
        animationStyle={{width: 100,height: 100}}speed={1}/>
      <ImageBackground source={require('.././assets/bg.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{paddingHorizontal:30, flex:1,justifyContent:'center',paddingTop:240}}>
            <View style={{marginTop:height*0.08, alignItems:'center',}}>
              <TextInput placeholderTextColor="#03836c" autoCapitalize = 'none' onChangeText={(username)=>this.setState({username})}  
              style={styles.input} placeholder="email or Mobile"/>
              <TextInput placeholderTextColor="#03836c" onChangeText={(password)=>this.setState({password})} 
              style={styles.input} placeholder="password" secureTextEntry/>
            </View>
           <Text style={{alignSelf:'center',fontFamily:'Eina02_Bold',color:"#03836c",margin:10}}>forgot password?</Text>
            
          <View style={{flexDirection:'row', paddingTop:30, alignContent:'center', justifyContent:'center'}}>
            <TouchableOpacity style={{width:40,height:40, borderRadius:25, backgroundColor:'#ffffff', justifyContent:'center', alignItems:'center', margin:2}}>
              <Ionicons  name="logo-google" color="#000" size={28} style={{margin:5}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width:40,height:40, borderRadius:25, backgroundColor:'#ffffff', justifyContent:'center', alignItems:'center', margin:2}}>
              <Ionicons  name="logo-apple" color="#000" size={28} style={{margin:5}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width:40,height:40, borderRadius:25, backgroundColor:'#ffffff', justifyContent:'center', alignItems:'center', margin:2}}>
              <Image source={require('.././assets/icons/fb.png')} style={{width:28, height:28}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width:40,height:40, borderRadius:25, backgroundColor:'#ffffff', justifyContent:'center', alignItems:'center', margin:2}}>
              <Ionicons  name="logo-instagram" color="#000" size={28} style={{margin:5}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width:40,height:40, borderRadius:25, backgroundColor:'#ffffff', justifyContent:'center', alignItems:'center', margin:2}}>
              <Ionicons  name="logo-twitter" color="#000" size={28} style={{margin:5}}/>
            </TouchableOpacity>
          </View>
            <View style={{flexDirection:'row',justifyContent:'space-between', paddingTop:30}}>
                <TouchableOpacity style={styles.btn} 
                onPress={()=>this.props.navigation.navigate('Register')}>
                  <Text style={styles.btnText}>Sign up</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn2}  
                onPress={()=>this.props.navigation.navigate('Dashboard')}>
                  <Text style={styles.btnText}>Sign in</Text></TouchableOpacity>
            </View>
            </View>
      </ImageBackground>
       </KeyboardAvoidingView>
    );}else {
      return (
          <View style={styles.container}>
              <ActivityIndicator />
          </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input:{width:'95%',fontFamily:'Eina03_Bold', color:"#03836c", height:40,borderRadius:20,marginBottom:10,
  paddingHorizontal:20,paddingVertical:8,fontSize:12,backgroundColor:'#fff',borderColor:'#E5E7E9'},
  btn:{borderRadius:30, width:width*0.25, padding:5,paddingBottom:8,borderWidth:3,borderColor:'#fff', alignItems:'center', justifyContent:'center'},
  btn2:{borderRadius:30, width:width*0.25,padding:5, paddingBottom:8, backgroundColor:'#fc9913',borderWidth:2,borderColor:'#fc9913', alignItems:'center', justifyContent:'center'},
  btnText:{fontSize:20, textAlign:'center', color:'#fff',fontFamily:'Eina03_Bold'},
  points:{color:'#6C3483',fontSize:20},
  points2:{color:'#F39C12',fontSize:18,marginBottom:5,borderBottomWidth:0.5,borderBottomColor:'grey'},
  points3:{color:'#34495E',fontSize:16,marginBottom:5,fontWeight:'600'},
})
