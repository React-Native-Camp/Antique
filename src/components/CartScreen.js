import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet, Alert
} from 'react-native';
import data from '../../data.json'


function CartScreen() {
  const cartItems = data.products

  return (
    <View
      style={{
        flex: 1
      }}>
      {cartItems.length !== 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.ItemContainer}>
              <Image source={{ uri: item.picture }} style={styles.thumbnail} />
              <View style={styles.ItemMetaContainer}>
                <Text style={styles.textTitle} >
                  {item.name}
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => alert('remove')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove -</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartMessage}>Your cart is empty </Text>
          </View>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  ItemContainer: {
    flexDirection: 'row',
    padding: 10
  },
  thumbnail: {
    width: 150,
    height: 100
  },
  ItemMetaContainer: {
    padding: 5,
    paddingLeft: 10
  },
  textTitle: {
    fontSize: 22,
    fontSize: 18
    // fontWeight: '200'
  },
  
  button: {
    borderRadius: 8,
    backgroundColor: '#013A20',
    padding: 5
  },
  buttonText: {
    fontSize: 14,
    color: '#fff'
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 28
  }
})

export default CartScreen