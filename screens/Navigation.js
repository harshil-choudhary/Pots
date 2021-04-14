import React from 'react';
import { StyleSheet,AsyncStorage,Image, Text, View } from 'react-native';
import {BottomTabBar,createStackNavigator,createSwitchNavigator,createBottomTabNavigator,createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import { Container,Content, Header } from 'native-base';


import Login from '../screens/Login';

// import Login from './screens/Login';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import Subscribe from '../screens/Subscribe';
import Account from '../screens/Account';
import Filters from '../screens/Filters';
import Filter2 from '../screens/Filter2';
import ProductDetails from '../screens/ProductDetails';
import ProductDetails2 from '../screens/ProductDetails2';
import PlanStart from '../screens/PlanStart';
import Search from '../screens/Search';
import MyOrders from '../screens/MyOrders';
import MyAddress from '../screens/MyAddress';
import Checkout from '../screens/Checkout';
import Payments from '../screens/Payments';
import OrderDetails from '../screens/OrderDetails';
import { TabBar } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/Feather';

const TabBarComponent = (props) => (<BottomTabBar {...props} />)

const BAppNav=createBottomTabNavigator({
  Try: {screen: Dashboard,navigationOptions:{
    tabBarLabel:'Try',  
    tabBarIcon: ({focused}) =>(
      focused
            ? <Image source={require('../assets/try.png')}  style={{width:40, height:40}}  />
            : <Image source={require('../assets/try1.png')}  style={{width:35, height:35, marginTop:30,}}  /> 
    ) 
  }},
  Subscribe: {screen: Subscribe,navigationOptions:{  
    tabBarLabel:'Subscribe',  
    tabBarIcon: ({focused}) =>(
      focused
            ? <Image source={require('../assets/subscribe.png')}  style={{width:35, height:35}}  />
            : <Image source={require('../assets/subscribe1.png')}  style={{width:35, height:35, marginTop:30,}}  /> 
    ) 
  }},
  Account: {screen: Account,navigationOptions:{  
    tabBarLabel:'Account',  
    tabBarIcon: ({focused}) =>(
      focused
            ? <Image source={require('../assets/account.png')}  style={{width:35, height:35}}  />
            : <Image source={require('../assets/account1.png')}  style={{width:35, height:35, marginTop:30,}}  /> 
    ) 
  }},
  // Filter2: {screen: Filter2,navigationOptions:{  
  //   tabBarLabel:'Filter',  
  //   tabBarIcon: ({focused}) =>(
  //     focused
  //           ? <Image source={require('./assets/filter.png')}  style={{width:35, height:35}}  />
  //           : <Image source={require('./assets/filter1.png')}  style={{width:35, height:35}}  /> 
  //   ) 
  // }},
},{
  tabBarComponent: props => {
		return (
			<View style={{
				position: 'absolute',
				left: 0,
				right: 0,
				bottom: 0,
			}}>
				<TabBarComponent {...props} />
			</View>
		)
	},

tabBarOptions: {
  activeTintColor: "#000000",      
  inactiveTintColor: "#ffffff",  
  style: {paddingHorizontal:80,height:100,paddingVertical:2, borderTopRightRadius:30, borderTopLeftRadius:30, backgroundColor:'white'},
  activeTabStyle: {
    marginBottom:8,
  },
  labelStyle: {
    fontSize: 10,
    margin: 0,
    padding: 10,
    fontWeight:'bold',
  },
}
});Filter2

async function getName(){
  const uname =  await AsyncStorage.getItem('name');
  return uname;
}

const MainNavigator = createStackNavigator({
  Login:{screen:Login,navigationOptions: {header: null}},
  Register:{screen:Register,navigationOptions: {header: null}},
  OrderDetails:{screen:OrderDetails,navigationOptions: {header: null}},
  Payments:{screen:Payments,navigationOptions: {header: null}},
  Checkout:{screen:Checkout,navigationOptions: {header: null}},
  MyAddress:{screen:MyAddress,navigationOptions: {header: null}},
  MyOrders:{screen:MyOrders,navigationOptions: {header: null}},
  Search:{screen:Search,navigationOptions: {header: null}},
  PlanStart:{screen:PlanStart,navigationOptions: {header: null}},
  Dashboard:{screen:BAppNav,navigationOptions: {
    header: null,
  }},
  ProductDetails2:{screen:ProductDetails2,navigationOptions: {header: null}},
  ProductDetails:{screen:ProductDetails,navigationOptions: {header: null}},
  Filter2:{screen:Filter2,navigationOptions: {header: null}},
},{
  defaultNavigationOptions:({navigation})=>{
    return{ 
    headerLeft:<Ionicons style={{marginLeft:15,color:'#fff'}} onPress={()=>navigation.toggleDrawer()} name="md-menu" size={30}/>,
    headerTintColor:'#fff',
    headerStyle:{backgroundColor:'#2f77e1'},
    headerTitle:'Bio Care',
    headerRight:<Ionicons  onPress={()=>logout().then(navigation.navigate("Login")) }style={{marginRight:10,color:'#fff'}}
     name="md-log-out" size={25}/>
  }}
})

async function logout(){
  await AsyncStorage.removeItem('LoggedIn');
}

const Navigation = createAppContainer(MainNavigator);

export default Navigation;