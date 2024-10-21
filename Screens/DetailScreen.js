import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { id } = route.params; // Nhận id từ params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <View><Text>Loading...</Text></View>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>Giá: ${product.price}</Text>
      <Button title="Xóa" onPress={() => handleDelete(product.id)} />
      <Button title="Đồng bộ" onPress={() => handleSync(product.id)} />
    </View>
  );

  function handleDelete(id) {
    // Xử lý xóa
  }

  function handleSync(id) {
    // Xử lý đồng bộ
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default DetailScreen;
