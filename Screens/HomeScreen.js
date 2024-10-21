import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {  // Nhận navigation từ props
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>Giá: ${item.price}</Text>
      <Text>Đánh giá: {item.rating}</Text>
      <Text>Số lượng trong kho: {item.stock}</Text>
      <Text>Thời gian giao hàng: {item.shippingInformation}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Đồng bộ" onPress={() => {}} />
        <Button 
          title="Chi tiết" 
          onPress={() => navigation.navigate('Detail', { id: item.id })} // Điều hướng đến DetailScreen
        />
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  productContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
