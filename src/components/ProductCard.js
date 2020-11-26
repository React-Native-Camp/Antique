import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import data from '../../data.json'
import { Card, ListItem, Button, Icon, SearchBar} from 'react-native-elements'


function ProductCard({ item }) {
  return (
    <View key={item.id} style={{ width: '50%' }}>
      <Card>
        <Card.Image source={{ uri: item.picture }} />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Card.FeaturedTitle style={{ color: 'black', fontSize: 16 , height:40}}>{item.name}</Card.FeaturedTitle>
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
    </View >
  );
}

export default ProductCard;