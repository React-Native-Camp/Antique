/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { Card, Header, Icon } from "react-native-elements";
import {shoppingcart} from "react-native-vector-icons";
import data from './data.json'

const App: () => React$Node = () => {
  // products var is an array contains products information
  const {products}=data
  
  return (
    <>
    <Header
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "Antique",
        style: { color: "#fff" }
      }}
      containerStyle={{ width: 350 }}
      placement="center"
      rightComponent={{ icon: "shoppingcart", color: "#fff" }}
    />
    
    <Card >
      <Card.Title>Olive Oil</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: "100%", height: 100 }}
          resizeMode="contain"
          source={{uri:'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/266258_2200-732x549.jpg'}}
        />
        <Text>is a liquid fat obtained from olives (the fruit of Olea europaea; family Oleaceae), a traditional tree crop of the Mediterranean Basin, produced by pressing whole olives and extracting the oil. Olive oil is the most common vegetable oil. It is commonly used in cooking, for frying foods or as a salad dressing.</Text>
      </View>
  </Card> 

    </>
  );
};

// const styles = StyleSheet.create({

// });

export default App;
