import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import data from '../../data.json'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


function Home() {
  const [productss, setproducts] = useState(data.products)
  console.log("p: ", productss);
  return (

    <ScrollView >
      {productss.map((item, index) => {
        return <Card>
          <Card.Image source={{ uri: item.picture }} />
          <Card.Title>{item.name}</Card.Title>
          <Card.FeaturedTitle style={{ color: 'black' }}>{item.price}</Card.FeaturedTitle>
          <Button
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
        </Card>

      })}
    </ScrollView>
  );
}

export default Home;