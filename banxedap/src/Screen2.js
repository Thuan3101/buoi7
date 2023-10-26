import React, { useState } from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();
  const initialProducts = [
    {
      image: require('../image/xedaphome.png'),
      name: 'Pinarello',
      price: 1800,
      des: 'Show something',
      type: 'mountain',
    },
    {
      image: require('../image/xedap2.png'),
      name: 'Pina Mountain',
      price: 1700,
      des: 'Show something',
      type: 'mountain',
    },
    {
      image: require('../image/xedap3.png'),
      name: 'Pina Bike',
      price: 1500,
      des: 'Show something',
      type: 'roadbike',
    },
    {
      image: require('../image/xedap4.png'),
      name: 'Pinarello',
      price: 1900,
      des: 'Show something',
      type: 'roadbike',
    },
    {
      image: require('../image/xedap3.png'),
      name: 'Pinarello',
      price: 2700,
      des: 'Show something',
      type: 'roadbike',
    },
    {
      image: require('../image/xedap2.png'),
      name: 'Pinarello',
      price: 1350,
      des: 'Show something',
      type: 'mountain',
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterData = (type) => {
    setSelectedCategory(type);

    if (type === 'All') {
      setProducts(initialProducts);
    } else {
      const filteredProducts = initialProducts.filter((product) => product.type === type);
      setProducts(filteredProducts);
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.productItem}
      onPress={() => {
        navigation.navigate('Detail', item);
      }}
    >
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
        <Pressable
        style={styles.goBackButton}
        onPress={() => {
          navigation.navigate('Screen1'); // Quay lại màn hình danh sách sản phẩm
        }}
      >
        <Text style={styles.goBackText}>Go Back</Text>
      </Pressable>
      <View style={styles.filterContainer}>
        <Pressable
          style={[
            styles.filterButton,
            selectedCategory === 'All' && styles.selectedButton,
          ]}
          title="All"
          onPress={() => filterData('All')}
        >
          <Text style={styles.buttonText}>All</Text>
        </Pressable>
        <Pressable
          style={[
            styles.filterButton,
            selectedCategory === 'mountain' && styles.selectedButton,
          ]}
          title="Mountain"
          onPress={() => filterData('mountain')}
        >
          <Text style={styles.buttonText}>Mountain</Text>
        </Pressable>
        <Pressable
          style={[
            styles.filterButton,
            selectedCategory === 'roadbike' && styles.selectedButton,
          ]}
          title="Roadbike"
          onPress={() => filterData('roadbike')}
        >
          <Text style={styles.buttonText}>Roadbike</Text>
        </Pressable>
      </View>

      <FlatList
        numColumns={2}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  goBackText:{
    fontSize:20,
    color:'red',
  },
  filterButton: {
    padding: 8,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 16,
  },
  productItem: {
    alignItems: 'center',
    height: 150,
    width: '45%',
    borderRadius: 10,
    backgroundColor: 'pink',
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    margin: 5,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
  },
};

export default Screen2;
