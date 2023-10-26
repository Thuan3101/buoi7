import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

function Detail({ route }) {
  const { name, price, des, image } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Pressable
        style={styles.goBackButton}
        onPress={() => {
          navigation.navigate('Screen2'); // Quay lại màn hình danh sách sản phẩm
        }}
      >
        <Text style={styles.goBackText}>Go Back</Text>
      </Pressable>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.D1}>Pina Mountain</Text>
      <View style={styles.d3}>
      <Text style={styles.D2}>15% OFF I 350$</Text>
      <Text style={styles.D3}>449$</Text>
      </View>
      <Text style={styles.D4}>Description</Text>
      <Text style={styles.D5}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
      <View style={styles.addToCartContainer}>
  <FontAwesome name="heart" size={24} color="white" style={styles.heartIcon} />
  <Pressable
    style={styles.addToCartButton}
    onPress={() => {
      // Thêm sản phẩm vào giỏ hàng tại đây
    }}
  >
    <Text style={styles.buttonText}>Add to Cart</Text>
  </Pressable>
</View>
   
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
   // alignItems: 'center',
   // justifyContent: 'center',
    
  },
  goBackText:{
    fontSize:20,
    color:'red',
  },

  image: {
    width: 297,
    height: 340,
    marginBottom: 10,
  },
  D1:{
    fontWeight:'bold',
    fontSize:35,
   // marginTop: 20,
   // marginLeft: 20,
  },
  d3:{
    flexDirection: 'row',
 // marginTop: 5,
 // marginLeft: 20,
  },
  D2:{
    fontSize:20,
    color:'grey',
    marginLeft: 50,
    marginTop: 5,
    marginLeft: 50,
    textDecorationLine: 'line-through',
  },
  D3:{
    fontWeight:'bold',
    fontSize:20,
   marginTop: 5,
    marginLeft: 20,
  },
  D4:{
    fontWeight:'bold',
    fontSize:20,
    //marginTop: 20,
   // marginLeft: 20,
  },
  D5:{
    fontSize:15,
  },
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red', // Màu nền của nút "Add to Cart"
    padding: 1,
    borderRadius: 5,
    marginTop: 70,
  },
  heartIcon: {
    marginRight: 10, // Khoảng cách giữa biểu tượng trái tim và nút "Add to Cart"
  },
  addToCartButton: {
    flex: 1, // Mở rộng nút "Add to Cart" để điền hết phần còn lại
    padding: 1, // Điều chỉnh kích thước nút
    marginLeft: 50, // Khoảng cách giữa nút "Add to Cart" và biểu tượng trái tim
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  
  
  
  
  
};

export default Detail;
