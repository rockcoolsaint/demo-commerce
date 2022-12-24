import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { getProduct } from '../services/ProductsService'
import { CartContext } from '../CartContext';

const ProductDetails = ({route: {params}}) => {
  const {productId} = params;
  const [product, setProduct] = useState({});

  const {addItemToCart} = useContext(CartContext)

  useEffect(() => {
    setProduct(getProduct(productId));
  }, []);

  const onAddToCart = () => {
    addItemToCart(product.id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>${product.description}</Text>
          <Button onPress={onAddToCart} title="Add to Cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  infoContainer: {
    padding: 16
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
})