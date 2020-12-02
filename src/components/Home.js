import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import data from '../../data.json'
import { SearchBar } from 'react-native-elements'
import ProductCard from './ProductCard'

function Home(props) {
  console.log("pp", props);
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
        placeholder="Type Here..."
        onChangeText={updateInput}
        value={input}
      />
      <View style={styles.cardContainer}>
        {input ? data.products.filter(e => e.name.includes(input)).map((item, index) => {
          return <ProductCard key={item.id} item={item} />
        }) : productss.map((item, index) => {
          return <ProductCard key={item.id} item={item} navigation={props.navigation} />
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});

export default Home;
