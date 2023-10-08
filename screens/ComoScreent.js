import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { Entypo, MaterialCommunityIcons, Foundation, Feather, Ionicons } from '@expo/vector-icons';

const ComoScreen = ({ navigation }) => {
    const handleRegistro = () => {
        navigation.navigate('Login');
    };

    const handleLabor = () => {
        navigation.navigate('Labor');
    };

    const handleGoBack = () => {
        navigation.goBack();
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
        <ImageBackground style={styles.container} source={require('../assets/pantalla8.png')}>
          
            <View style={styles.overlay}>
            <TouchableOpacity style={styles.btnBack} onPress={handleGoBack}>
                            <Ionicons name="chevron-back-circle-outline" size={50} color="white" />
                        </TouchableOpacity>
                <View style={styles.header}>


                    <View style={styles.headerContent}>

              
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>¿Como se hace?</Text>
                        </View>
                    </View>


                    <Text style={styles.farmName}>Aqui encontraras los pasos generales que se siguen para abonar el cafe</Text>
                </View>


                <View style={styles.buttonContainer}>
                    <View style={styles.containerPasos}>
                        <View style={styles.iconContainer}>
                            <Foundation name="mountains" size={35} color="white" />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>1. Analisis del suelo: Realiza un analisis del suelo para determinar su pH, nivel de nutrientes.</Text>
                        </View>
                    </View>

                    <View style={styles.containerPasos}>

                        <View style={styles.textContainer}>
                            <Text style={styles.text}>2. Eleccion del fertilizante: Los fertilizantes para el cafe suelen contener nitrogeno (N), fosforo (P) y potasio (K)</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Foundation name="mountains" size={35} color="white" />
                        </View>
                    </View>

                    <View style={styles.containerPasos}>
                        <View style={styles.iconContainer}>
                            <Foundation name="mountains" size={35} color="white" />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>3. Distribucion del abono</Text>
                        </View>
                    </View>

                    <View style={styles.containerPasos}>

                        <View style={styles.textContainer}>
                            <Text style={styles.text}>4. Cantidad de abono</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Foundation name="mountains" size={35} color="white" />
                        </View>
                    </View>
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
                <TouchableOpacity onPress={handleFin}>
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

    btnBack: {
        position: "absolute",
        top: 40,
        left: 10,
        zIndex: 40
    },

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingTop: 0,
        paddingBottom: 0,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
    },

    userInfo: {
        flex: 1,
        justifyContent: "center"
    },

    header: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 220,
        backgroundColor: 'rgba(20, 38, 1, 0.8)',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingTop: 40,
        paddingBottom: 5,
    },
    headerContent: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    userName: {
        fontSize: 35,
        color: "white",
        textAlign: "center",
    },

    farmName: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 10,
        padding: 10

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
        paddingVertical: 15,
        paddingHorizontal: 25,
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

    containerPasos: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(166, 3, 3, 0.6)',
        borderRadius: 25,
        padding: 10,
        margin: 10,
    },
    iconContainer: {
        marginRight: 10,
        height: 70,
        padding: 20
    },
    icon: {
        width: 40,
        height: 40,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        color: "#fff",
        paddingLeft: 10
    },

});

export default ComoScreen;
