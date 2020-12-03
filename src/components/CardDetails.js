import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  Card,
  Divider,
  ListItem,
  Button,
  Icon,
  SearchBar,
  Text,
} from 'react-native-elements';

import ImageSliderz from 'react-native-image-slideshow';

function CardDetails(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const [quantity, setQuantity] = useState(1);
  const price = productDetails.price.slice(1);
  const [total, setTotal] = useState(price);

  console.log('cart', productDetails.picture);
  // take the data from productDetails

  const onPressDec = () =>
    setQuantity((prevCount) => (prevCount != 1 ? prevCount - 1 : 1));
  const onPressInc = () => setQuantity((prevCount) => prevCount + 1);

  useEffect(() => {
    setTotal(price * quantity);
  }, [quantity]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <ImageSliderz
            dataSource={[
              {
                url: productDetails.picture,
              },
              {
                url: productDetails.picture,
              },
              {
                url: productDetails.picture,
              },
            ]}
            height={250}
          />
          <View style={styles.text}>
            <Card.FeaturedTitle style={styles.cardName}>
              <Icon name="price-tag" type="entypo" size={26} color="#015A20" />

              {productDetails.name}
            </Card.FeaturedTitle>

            <Card.FeaturedTitle style={styles.cardPrice}>
              {productDetails.price}
            </Card.FeaturedTitle>
          </View>
        </Card>
        <View style={styles.description}>
          <Text h4 h4Style={{fontSize: 15, paddingBottom: 8}}>
            Description :
          </Text>
          <Text>{productDetails.brief}</Text>
        </View>

        <View style={styles.amount}>
          <View style={styles.amount}>
            <TouchableOpacity onPress={onPressDec}>
              <Icon
                name="circle-with-minus"
                type="entypo"
                size={26}
                color="#015A20"
              />
            </TouchableOpacity>

            <Text h4> {quantity} </Text>
            <TouchableOpacity onPress={onPressInc}>
              <Icon
                name="circle-with-plus"
                type="entypo"
                size={26}
                color="#015A20"
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text h4>
              Total:{' '}
              <Text h4 style={styles.total}>
                ${total}
              </Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text h4 style={styles.buttonText}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  cardName: {
    color: 'black',
    fontSize: 16,
    height: 40,
  },
  cardPrice: {
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: 14,
    padding: 10,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 15,
    backgroundColor: '#015A20',
  },
  text: {
    flex: 1,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    margin: 15,
  },
  amount: {
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    paddingTop: 2,
    color: '#015A20',
  },
  buttonContainer: {
    margin: 10,
    elevation: 8,
    backgroundColor: '#013A20',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default CardDetails;
