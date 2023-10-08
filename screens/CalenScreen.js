import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import MyCalendar from '../components/MyCalendar';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const CalenScreen = ({ navigation }) => {
    const handleLabor = () => {
        navigation.navigate('Labor');
    };

    const handleCalen = () => {
        navigation.navigate('HomeStack');
    };

    const handleGoBack = () => {
        navigation.goBack();
    };


    const handleHome = () => {
        navigation.navigate('HomeStack');
    };
    return (
        <View style={styles.fondoVerde}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.btnBack} onPress={handleGoBack}>
                    <Ionicons name="chevron-back-circle-outline" size={50} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logout} onPress={handleCalen}>
                    <AntDesign name="calendar" size={50} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Calendario</Text>
            </View>

            <ImageBackground style={styles.headerContent} source={require('../assets/pantalla10.png')}>
                <View style={styles.fondo}>

                    <MyCalendar />

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
    );
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
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        paddingTop: 70,
        height: 170
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 25,
        backgroundColor: "white",
        borderRadius: 999,
    },

    fondo: {
        flex: 1, // Make it take up the entire screen
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 50,
    },


    title: {
        fontSize: 30,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },

    fondoVerde: {
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(166, 3, 3, 3)',
    },

    headerContent: {
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        marginTop: 30,
        justifyContent: "flex-start",
        overflow: "hidden",
    },

    iconsdowm: {
        backgroundColor: 'rgba(166, 3, 3, 0.6)',
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        gap: 50,
        paddingTop: 15,
        paddingBottom: 10,
        borderTopColor: 'white',
        width: '100%', justifyContent: 'space-around'
    },
});

export default CalenScreen;
