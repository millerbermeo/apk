import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import CustomCard from '../components/CustomCard';
import { Icon } from 'react-native-elements';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


const LaborScreen = ({ navigation }) => {

  const handleLabor = () => {
    navigation.navigate('Labor');
  };

  const handleHome = () => {
    navigation.navigate('HomeStack');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  
  const handleFin = () => {
    navigation.navigate('Fin');
  };

  const handleAdd = () => {
    navigation.navigate('Add');
  };

  return (
    <View style={styles.container}>

      <ImageBackground style={styles.fondoVerde}>

        <TouchableOpacity style={styles.btnBack} onPress={handleGoBack}>
          <Ionicons name="chevron-back-circle-outline" size={50} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Labores Agronómicas</Text>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>AÑADIR +</Text>
        </TouchableOpacity>

        <ImageBackground style={styles.content} source={require('../assets/pantalla4.png')}>
        <View style={styles.overlay}>
          <CustomCard title="Control de Plagas" imageSource={require('../assets/r1.png')} />
          <CustomCard title="Abonar" imageSource={require('../assets/r2.png')} />
          <CustomCard title="Guadañar" imageSource={require('../assets/r3.png')} />
          </View>
        </ImageBackground>

        <View style={styles.iconsdowm}>
          <TouchableOpacity onPress={handleLabor}>
            <Entypo name="network" size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHome}>
            <Icon name="home" size={35} color="rgba(255, 255, 255, 0.8)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFin}>
            <MaterialCommunityIcons name="finance" size={35} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingTop: 100,
    paddingBottom: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  btnBack: {
    position: "absolute",
    top: 40,
    left: 10,
  },

  button: {
    position: 'absolute',
    top: 130,
    right: 40,
    backgroundColor: 'rgba(166, 3, 3, 3)',
    marginVertical: 10,
    height: 45,
    borderRadius: 45,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    position: 'absolute',
    top: 90,
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  fondoVerde: {
    flex: 1,
    backgroundColor: '#142601',
  },
  content: {
    height: "100%",
    marginTop: 210,
    borderTopRightRadius: 200,
    marginBottom: 50,
    overflow: "hidden"
  },
  iconsdowm: {
    backgroundColor: 'rgba(166, 3, 3, 0.6)',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    gap: 50,
    paddingTop: 15,
    paddingBottom: 10,
    borderTopColor: 'white',
    width: '100%', justifyContent: 'space-around'
  },
});

export default LaborScreen;
