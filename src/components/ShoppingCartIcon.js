import React from 'react'
import { TouchableOpacity } from 'react-native'
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function ShoppingCartIcon(props) {
  return (
    <TouchableOpacity
      onPress={() => alert('Press me')}
      style={{ marginRight: 10 }}>
      <Icon name='shopping-cart' size={32} color='#013A20' />
    </TouchableOpacity>
  )
}

export default ShoppingCartIcon