import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import data from '../../data.json'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


function Home() {
  const [productss, setproducts] = useState(data.products)
  return (
    <ScrollView >
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {productss.map((item, index) => {
          return <View key={item.id} style={{ width: '50%' }}>
            <Card>
              <Card.Image source={{ uri: item.picture }} />
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <Card.FeaturedTitle style={{ color: 'black', fontSize: 14 }}>{item.name}</Card.FeaturedTitle>
                <Card.FeaturedTitle style={{ color: 'black', fontSize: 14 }}>{item.price}</Card.FeaturedTitle>
              </View>

              <TouchableOpacity style={{
                elevation: 8,
                backgroundColor: "#013A20",
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 10
              }}>
                <Text style={{
                  fontSize: 18,
                  color: "#fff",
                  fontWeight: "bold",
                  alignSelf: "center",
                  textTransform: "uppercase"
                }}>Details</Text>
              </TouchableOpacity>
            </Card>
          </View>
        })}
      </View>
    </ScrollView>
  );
}

export default Home;