import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import data from '../../data.json'
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import { SET_PRODUCT_DETAILS } from '../redux/actions'
import { useNavigation } from '@react-navigation/native'


function ProductCard(props) {
  const { item } = props
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const onClickDetails = () => {
    goToDetails(item)
    navigation.navigate('Details')
  }

  const goToDetails = item =>
    dispatch({
      type: SET_PRODUCT_DETAILS,
      payload: item
    })

  return (
    <View key={item.id} style={styles.container}>
      <Card>
        <Card.Image source={{ uri: item.picture }} />
        <View style={styles.cardFeature}>
          <Card.FeaturedTitle style={styles.cardName}>{item.name}</Card.FeaturedTitle>
          <Card.FeaturedTitle style={styles.cardPrice}>{item.price}</Card.FeaturedTitle>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("hi");
            onClickDetails(item)
          }}
          style={styles.buttonContainer}>
          <Text style={styles.details}>Details</Text>
        </TouchableOpacity>
      </Card>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    width: '50%'
  },
  cardFeature: {
    flex: 1,
    flexDirection: 'column'
  },
  cardName: {
    color: 'black',
    fontSize: 16,
    height: 40
  },
  cardPrice: {
    color: 'black',
    fontSize: 14
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#013A20",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  details: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

});

export default ProductCard;