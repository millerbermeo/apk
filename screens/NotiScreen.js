import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const NotiScreen = ({ navigation }) => {
  const handleLabor = () => {
    navigation.navigate('Labor');
  };

  const handleHome = () => {
    navigation.navigate('HomeStack');
  };


  const handleGoBack = () => {
    navigation.goBack();
  };


  const handleComo = () => {
    navigation.navigate('Como');
  };

  return (

    <View style={styles.fondoVerde}>

      <TouchableOpacity style={styles.btnBack} onPress={handleGoBack}>
        <Ionicons name="chevron-back-circle-outline" size={50} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>
        Notificaciones
      </Text>

      <ImageBackground style={styles.headerContent} source={require('../assets/pantalla7.png')}>
        <View style={styles.fondo}>

          <View style={styles.contentNoti}>
            <Text style={styles.contentNotiText}>
              La producción de café es un proceso fascinante que comienza con la cosecha de los frutos del cafeto.
            </Text>
          </View>

          <View style={styles.contentNoti}>
            <Text style={styles.contentNotiText}>
              El café es una fuente de sustento para millones de personas en todo el mundo y es apreciado.
            </Text>
          </View>

          <View style={styles.contentNoti}>
            <Text style={styles.contentNotiText}>
              la producción de café es una verdadera obra de arte que une a personas de diferentes culturas.
            </Text>
          </View>

          <View style={styles.contentNoti}>
            <Text style={styles.contentNotiText}>
              Desde los campos de cultivo hasta la taza, el café pasa por un viaje lleno de cuidado y atención</Text>
          </View>

        </View>

      </ImageBackground>
      <View style={styles.iconsdowm}>
        <TouchableOpacity onPress={handleLabor}>
          <Entypo name="network" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHome}>
          <Icon name="home" size={35} color="rgba(255, 255, 255, 0.8)" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="finance" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 0,
  },


  btnBack: {
    position: "absolute",
    top: 40,
    left: 10,
  },

  buttonContent: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: 100,
    alignItems: "center"
  },

  button: {
    backgroundColor: "#142601",
    marginVertical: 10,
    height: 50,
    borderRadius: 45,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  fondo: {
    flex: 1, // Make it take up the entire screen
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 140,
    gap: 35
  },


  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

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

  title: {
    position: "absolute",
    top: 80,
    width: "100%",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },

  fondoVerde: {
    width: "100%",
    height: "100%",
    backgroundColor: "#142601"
  },

  headerContent: {
    width: "100%",
    height: "100%",
    marginTop: 150,
    borderTopRightRadius: 200,
    justifyContent: "flex-start",
    paddingTop: 0,
    overflow: "hidden"
  },

  contentNoti: {
    width: "85%",
    height: 85,
    backgroundColor: 'rgba(166, 3, 3, 0.6)',
    borderRadius: 18,
    padding: 10
  },

  contentNotiText: {
    color: "#ccc",
    fontSize: 16,
  }

})


export default NotiScreen