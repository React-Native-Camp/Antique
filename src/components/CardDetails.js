import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

function CardDetails(props) {
  const productDetails = useSelector(state => state)
  console.log("cart", productDetails);
  // take the data from productDetails
  return (
    <View >
      <Text>hi</Text>
    </View >
  );
}

export default CardDetails;