import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const Tarject = ({ title, imageSource, infoText }) => {
  const navigation = useNavigation(); // Use useNavigation to access the navigation object

  const Abonar = () => {
    navigation.navigate('Abonar');
  };

  return (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.cardContent}>
      <Icon style={styles.icon} name={imageSource} type="font-awesome" size={30} color="#fff" />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={Abonar}>
          <Icon style={styles.icon} name="check" type="font-awesome" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    borderRadius: 50,
    paddingLeft: 50,
    paddingRight: 50,
    width: 365,
    height: 110,
    backgroundColor: 'rgba(20, 38, 1, 0.7)',
    borderWidth: 0,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    width: "100%",
    gap: 150,
    padding: 20
    
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 25,
    backgroundColor: "white",
    borderRadius: 999,  
  },
  title: {
    width: 150,
    height: 90,
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: "wrap",
    padding: 10,
    paddingTop: 20,
    textAlign: "center",
    color: "white",
  },

  icon: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 999,
    width: 45,
    height: 45,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Tarject;
