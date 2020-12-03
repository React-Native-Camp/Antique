import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import data from '../../data.json'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

function ShoppingCartIcon(props) {
  const cartItems = data.products //change this with a real value
  const navigation = useNavigation()
  console.log("props: ", props);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={{ marginRight: 10 }}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
      <Icon name='shopping-cart' size={32} color='#013A20' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  },
  itemCountContainer: {
    position: 'absolute',
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default ShoppingCartIcon