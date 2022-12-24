import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/ProductsService';
import Product from '../components/Product';

const ProductList = ({navigation}) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts);
  }, [])

  const renderProduct = ({item: product}) => {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate('ProductDetails', {productId: product.id})
        }}
      />
    )
  }

  return (
    <FlatList
      style={styles.ProductList}
      contentContainerStyle={styles.productListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  )
}

export default ProductList

const styles = StyleSheet.create({})