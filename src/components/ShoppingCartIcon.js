import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'

function ShoppingCartIcon(props) {
  const navigation = useNavigation()
  console.log("props: ", props);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={{ marginRight: 10 }}>
      <Icon name='shopping-cart' size={32} color='#013A20' />
    </TouchableOpacity>
  )
}

export default ShoppingCartIcon