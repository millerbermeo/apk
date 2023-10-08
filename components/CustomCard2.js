import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const CustomCard2 = ({ title, imageSource }) => {
  const navigation = useNavigation(); // Use useNavigation to access the navigation object

  const Abonar = () => {
    navigation.navigate('Abonar');
  };

  const info = () => {
    navigation.navigate('Info');
  };

  return (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.cardContent}>
        <TouchableOpacity onPress={Abonar}>
          <Image source={imageSource} style={styles.image} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity onPress={Abonar}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={info}>
        <AntDesign name="questioncircleo" size={40} color="#fff" />
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
    width: 270,
    height: 90,
    backgroundColor: 'rgba(166, 3, 3, 0.6)',
    borderWidth: 0,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    width: "100%",
    gap: 150,
    padding:10
  },
  image: {
    width: 70,
    height: 70,
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
    padding: 20,
    textAlign: "center", // Center text horizontally
    alignSelf: 'center', // Center text vertically
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

export default CustomCard2;
