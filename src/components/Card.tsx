import React, { useState } from 'react';
import { Dimensions, View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Colors } from '../static/Colors';
interface CardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  onPress: (id: number, Nombre:string) => void;
}

const Card: React.FC<CardProps> = ({ id, title, image, description , onPress}) => {
  const [pressed, setPressed] = useState (false);
  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);

  };
  const cardStyle = [
    styles.cardContainer,
    pressed ? styles.cardPressed : null,
  ];
  return (
    
    <TouchableWithoutFeedback onPress={() => onPress(id, title)} onPressIn={handlePressIn}
    onPressOut={handlePressOut}>
      
      <View style={cardStyle} >
        <View style={styles.card}>
          <Text style={styles.number}>{title}</Text>
          <View style={{flex: 1, height: 2, backgroundColor: Colors.dark}} />
          <Text style={styles.name}>{description}</Text>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '50%',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  card: {
    backgroundColor: Colors.background,
    borderRadius: 8,
    padding: 16,
    elevation: 4,
    
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    padding:5,
    color: Colors.dark,
    
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    color: Colors.dark,
    marginTop:5,
    alignSelf:'center',
    textAlignVertical:'center'
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardPressed: {
    
    width: '49%',
    paddingHorizontal: 8,
    marginBottom: 0,
    
  },
});


export default Card;
