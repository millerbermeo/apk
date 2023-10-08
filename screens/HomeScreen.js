import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'; 
import {Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const handleCalen = () => {
    navigation.navigate('Calen');
  };

  const handleLabor = () => {
    navigation.navigate('Labor');
  };

  const handleHome = () => {
    navigation.navigate('HomeStack');
  };

  const handleFin = () => {
    navigation.navigate('Fin');
  };

  const handleNoti = () => {
    navigation.navigate('Noti');
  };

  

  return (
    <ImageBackground style={styles.container} source={require('../assets/Pantalla3.png')}>
      <StatusBar
        backgroundColor="transparent" // Fondo transparente para que se adapte al fondo de la pantalla
        barStyle="light-content" // Cambia el color de los iconos y texto de la StatusBar a claro
        translucent // Hace que la StatusBar sea translúcida para que se adapte al fondo
      />
      <View style={styles.overlay}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              source={require('../assets/perfil.png')}
              style={styles.imagePerfil}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Hola Miller!</Text>
              <View style={styles.location}>
                <EvilIcons name="location" size={18} color="white" />
                <Text style={styles.locationText}>Pitalito</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.logout} onPress={handleCalen}>
              <AntDesign name="calendar" size={50} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.farmName}>Finca VILLA ESPERANZA</Text>
        </View>
        <Text style={styles.title}>Bienvenido a la Pantalla de Inicio</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLabor} style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Labores Agronómicas</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={handleFin} style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Finanzas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconsdowm}>
      {/* <TouchableOpacity onPress={goReels}> */}

        <TouchableOpacity onPress={handleLabor}>
        <Entypo name="network" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHome}>
          <Icon name="home" size={35} color="rgba(255, 255, 255, 0.8)" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFin} >
        <MaterialCommunityIcons name="finance" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNoti}>
        <Feather name="bell" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingTop: 0,
    paddingBottom: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  
  header: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 220,
    backgroundColor: 'rgba(20, 38, 1, 0.8)',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 80,
    paddingBottom: 5,
  },
  headerContent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imagePerfil: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    flex: 1,
    marginLeft: 20,
  },
  userName: {
    fontSize: 22,
    color: "white",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  logout: {
    paddingLeft: 10,
  },
  farmName: {
    color: "#730202",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
  },
  title: {
    paddingTop: 50,
    padding: 30,
    fontSize: 30,
    textAlign: "center",
    fontWeight: 'bold',
    marginTop: 30,
    color: "white",
  },
  buttonContainer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(20, 38, 1, 0.9)',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginVertical: 15,
    borderRadius: 25,
    width: 280,
    alignItems: "center",
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  iconsdowm:{
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

export default HomeScreen;
