import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const InformacionScreen = ({ navigation }) => {
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
                Informacion
            </Text>

            <ImageBackground style={styles.headerContent} source={require('../assets/pantalla7.png')}>
                <View style={styles.fondo}>


                    <View style={styles.infoText}>
                        <Text style={styles.infoTextText}>
                            El abono del café Generalmente implica la aplicación de fertilizante orgánicos e inorgánicos al suelo.{'\n'}{'\n'}
                            Los fertilizantes orgánicos pueden incluir compost estiércol restos de cultivos u otros materiales naturales ricos en nutrientes. {'\n'}{'\n'}
                            Los fertilizantes inorgánicos por otro lado Son productos químicos sintéticos que contienen nutrientes específicos como nitrógeno fósforo y potasio.
                        </Text>


                    </View>
                    <View style={styles.buttonContent}>
                        <TouchableOpacity onPress={handleComo} style={styles.button} >
                            <Text style={styles.buttonText}>Como se hace</Text>
                        </TouchableOpacity>
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
        alignItems: "flex-start",
        paddingTop: 100,
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

    infoText: {
        backgroundColor: 'rgba(166, 3, 3, 0.6)',
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 25,
    },

    infoTextText: {
        fontSize: 20,
        color: "white"
    },

})

export default InformacionScreen