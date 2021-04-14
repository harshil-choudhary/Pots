import React from 'react';
import {
  StatusBar, StyleSheet, KeyboardAvoidingView, AsyncStorage, ImageBackground, Dimensions, FlatList, ScrollView,
  Text, Image, View, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import {LinearGradient} from 'expo-linear-gradient';
import {BoxShadow} from 'react-native-shadow'


const { width, height } = Dimensions.get('window');
const screenWidth = width*48/100;
const sc3=width*50/100;
const sc4=width*70/100;

const circleShadow = {
  width:80,
  height:80,
  color:"#000",
  border:10,
  radius:40,
  opacity:0.1,
  x:10,
  y:height*0.015,
  style:{justifyContent:'center'},
}

const dropShadow = {
  width:width*0.8,
  height:25,
  color:"#000000",
  border:1,
  radius:12.5,
  opacity:0.05,
  x:10,
  style:{ marginRight: width*0.05,marginTop: -height*0.01, borderBottomRightRadius: width * 0.1, borderBottomLeftRadius: width * 0.1, alignSelf:'center',}
}

const listShadow = {
  width:200,
  height:200,
  color:"#000000",
  border:40,
  radius:75,
  opacity:0.1,
  x:sc4/5,
  y:20,
  style:{width: sc4, marginRight: 15, marginLeft: 15, borderRadius: 20, padding: 0, height: 260,}
}
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{ "title": "Subscribe and get surprised everyday", "img": "dish1", "color": "#ffc121" },
      { "title": "Subscribe and get surprised everyday", "img": "dish1", "color": "#00816b" },
      { "title": "Subscribe and get surprised everyday", "img": "dish1", "color": "red" }],
      food_types: ['Breakfast', 'Lunch', 'Dinner', 'Dessert'], "selected_food_type": "Breakfast",
      products2: [{ "title": "Prawn Spaghetti in Red Sauce", "price": 8, "img": 'product1.jpg' }, { "title": "Prawn Spaghetti in Red Sauce", "price": 8, "img": 'product1.jpg' },
      { "title": "Prawn Spaghetti in Red Sauce", "price": 8, "img": 'product1.jpg' }, { "title": "Prawn Spaghetti in Red Sauce", "price": 8, "img": 'product1.jpg' }]
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'custom-fonts': require('.././assets/fonts/newfont.otf'),
      'custom-fonts2': require('.././assets/fonts/heading.ttf'),
      'bfont': require('.././assets/fonts/newfont.otf'),
      'Eina02_Bold': require('.././assets/fonts/Eina02-Bold.ttf'),
      'Eina02_Regular': require('.././assets/fonts/Eina02-Regular.ttf'),
      'Eina03_Bold': require('.././assets/fonts/Eina03-Bold.ttf'),
      'Eina03_Regular': require('.././assets/fonts/Eina03-Regular.ttf'),
    }); this.setState({ assetsLoaded: true });
  }
  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <ScrollView style={{ flex: 1, backgroundColor: '#eaeaea' }}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          
          <Animatable.View animation="fadeInUpBig"
            style={{ flex: 1, backgroundColor: '#fff', borderBottomRightRadius: width * 0.1, borderBottomLeftRadius: width * 0.1, zIndex:10,}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center' }}>
              <View style={{ flex: 5 }}>
                <Text style={{ fontSize: 14, fontFamily: 'Eina02_Regular', marginBottom: 3 }}>Delivering to</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Eina03_Bold' }}>DLF Phase 5</Text>
              </View>
            
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}
                style={{ backgroundColor: '#eaeaea', height: 30, width: 30, borderRadius: 20, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="md-search" color='#03816b' size={20} padding={10} />
              </TouchableOpacity>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Filter2")}>
                  <Image style={{
                    width: 30,
                    height: 30,
                    marginLeft: 15,
                    //  borderRadius:100,
                  }}
                    source={require('.././assets/filter1.png')} />
                </TouchableOpacity>
              </View>
            </View>
            

            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} 
                data={this.state.products}
                renderItem={({item}) => 
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("ProductDetails")}>
                <Card style={{flexDirection:'row',width:sc3,marginRight:35,marginLeft:35,padding:20,borderRadius:20,backgroundColor:item.color,}} noShadow>
                    <View style={{flex:3,justifyContent:'center'}}>
                    <Text style={{fontSize:20,fontFamily:'Eina03_Bold',color:'#fff'}}>{item.title}</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                    <BoxShadow setting={circleShadow}>
                      <Image style={{width:90, height:90,margin:5,borderRadius:100}} source={require(".././assets/dish.jpg")} />
                    </BoxShadow>

                    </View>
                  
                  </Card>
                </TouchableOpacity>} />

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: height * 0.03, padding: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', fontFamily: 'Eina03_Bold' }}>
                {this.state.food_types.map((sitem, i) => {
                  ``
                  return <TouchableOpacity onPress={() => this.setState({ selected_food_type: sitem })}
                    style={sitem == this.state.selected_food_type ? {
                      marginRight: 7, width: width * 0.20, paddingHorizontal: 8, paddingVertical: 11, borderWidth: 0.5, borderColor: '#ffc121', borderRadius: 50, backgroundColor: '#ffc121'
                    } : { marginRight: 7, width: width * 0.20, paddingHorizontal: 8, paddingVertical: 11, borderWidth: 0.5, borderColor: '#5D6D7E', borderRadius: 50 }}>
                    <Text style={sitem == this.state.selected_food_type ? { fontFamily: 'Eina03_Bold', alignSelf: 'center', color: '#ffffff', fontSize: 12 } : { fontFamily: 'Eina03_Bold', alignSelf: 'center', fontSize: 12 }}>{sitem}</Text></TouchableOpacity>
                })}
              </View>
            </View>
          </Animatable.View>
         
          <Animatable.View animation="fadeInUpBig"
            style={{ flex: 1, marginBottom: height * 0.15 }}>
            <BoxShadow setting={dropShadow}>
            </BoxShadow>
            <View style={{ flexDirection: 'row', marginTop: height * 0.03, alignItems: 'center', paddingHorizontal: 20, }}>
              <Image style={{ width: 34, height: 34, margin: 5, borderRadius: 17 }} source={require(".././assets/dish.jpg")} />
              <View style={{ padding: 5 }}>
                <Text style={{ fontSize: 16, fontFamily: 'Eina03_Bold', color: 'black' }}>The Italian Kitchen</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Eina02_Regular', fontStyle: 'italic', color: 'grey' }}>Authentic Italic Food</Text>
              </View>
            </View>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()}
              data={this.state.products2}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductDetails2")}>
                  <BoxShadow setting={listShadow}>
                  <Card style={{ width: sc4, marginRight: 15, marginLeft: 15, borderRadius: 20, padding: 0, height: 200,}} noShadow>
                    <Image style={{ width: '100%', height: 140, borderRadius: 20 }} source={require(".././assets/product.jpg")} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                      <View style={{ flex: 4, flexDirection: 'row' }}>
                        <Image source={require('.././assets/vegicon.jpg')} style={{ width: 20, height: 20, marginRight: 4 }} />
                        <Text style={{ fontSize: 14, fontFamily: 'Eina03_Bold', color: 'black' }}>{item.title}</Text>
                      </View>
                      <Text style={{ fontSize: 18, fontFamily: 'Eina03_Bold', flex: 1, textAlign: 'right', color: 'black' }}>${item.price}</Text>
                    </View>
                  </Card></BoxShadow></TouchableOpacity>} />
            <View style={{ flexDirection: 'row', marginTop: -height * 0.02, alignItems: 'center', paddingHorizontal: 20, }}>
              <Image style={{ width: 34, height: 34, margin: 5, borderRadius: 17 }} source={require(".././assets/dish.jpg")} />
              <View style={{ padding: 5 }}>
                <Text style={{ fontSize: 16, fontFamily: 'Eina03_Bold', color: 'black' }}>Indian Accent</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Eina03_Regular', fontStyle: 'italic', color: 'grey' }}>The Taste of India</Text>
              </View>
            </View>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()}
              data={this.state.products2}
              renderItem={({ item }) =>
              <BoxShadow setting={listShadow}>
                <Card style={{ width: sc4, marginRight: 15, marginLeft: 15, borderRadius: 20, padding: 0, height: 200, }} noShadow>
                  <Image style={{ width: '100%', height: 140, borderRadius: 20 }} source={require(".././assets/product.jpg")} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View style={{ flex: 4, flexDirection: 'row' }}>
                      <Image source={require('.././assets/vegicon.jpg')} style={{ width: 20, height: 20, marginRight: 4 }} />
                      <Text style={{ fontSize: 14, fontFamily: 'Eina03_Bold', color: 'black' }}>{item.title}</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: 'Eina03_Bold', flex: 1, textAlign: 'right', color: 'black' }}>${item.price}</Text>
                  </View>
                </Card></BoxShadow>} />
          </Animatable.View>
        </ScrollView>
      );
    } else {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  textWithShadow: {
    textShadowColor: '#fff', fontFamily: 'custom-fonts',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10, fontSize: 24, color: '#fff'
  }, btn: { width: '45%', padding: 10, backgroundColor: '#fff', borderRadius: 20 },
  btn2: { width: '45%', padding: 10, backgroundColor: '#F2F3F4', borderRadius: 20 },
  btnText: { fontSize: 18, textAlign: 'center', color: '#34495E', fontFamily: 'custom-fonts' }
});
