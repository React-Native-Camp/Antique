import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import data from '../../data.json'
import { SearchBar } from 'react-native-elements'
import ProductCard from './ProductCard'

function Home() {
  const [productss, setproducts] = useState(data.products)
  const [input, setinput] = useState('')

  const updateInput = (e) => {
    setinput(e);
  }

  return (
    <ScrollView >
      <SearchBar
        round
        searchIcon={{ size: 25 }}
        placeholder="Type Here......"
        onChangeText={updateInput}
        value={input}
      />
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {input ? data.products.filter(e => e.name.includes(input)).map((item, index) => {
          return <ProductCard key={item.id} item={item} />
        }) : productss.map((item, index) => {
          return <ProductCard key={item.id} item={item} />
        })}
      </View>
    </ScrollView>
  );
}

export default Home;
