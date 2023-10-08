import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { Entypo, MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import CustomCard2 from '../components/CustomCard2';

const AddScreen = ({ navigation }) => {
    const handleRegistro = () => {
        navigation.navigate('Login');
    };

    const handleGoBack = () => {
        navigation.goBack();
    };
      

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);

    const toggleCheckbox1 = () => {
        setIsChecked1(!isChecked1);
    };

    const toggleCheckbox2 = () => {
        setIsChecked2(!isChecked2);
    };

    const toggleCheckbox3 = () => {
        setIsChecked3(!isChecked3);
    };

    const toggleCheckbox4 = () => {
        setIsChecked4(!isChecked4);
    };

    const handleLabor = () => {
        navigation.navigate('Labor');
    };

    const handleHome = () => {
        navigation.navigate('HomeStack');
    };

    const handleCancel = () => {
        // Lógica para manejar la acción de Cancelar
        console.log('Cancelado');
    };

    const handleOK = () => {
        // Lógica para manejar la acción de OK
        console.log('OK');
    };

    const handleFin = () => {
        navigation.navigate('Fin');
      };

      const handleNoti = () => {
        navigation.navigate('Noti');
      };

    return (
        <ImageBackground style={styles.container} source={require('../assets/Pantalla3.png')}>
 
            <View style={styles.overlay}>

            <TouchableOpacity style={styles.btnBack} onPress={handleGoBack}>
          <Ionicons name="chevron-back-circle-outline" size={50} color="white" />
        </TouchableOpacity>

                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>Seleccionar para añadir una labor</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.checkboxAndCard}>
                        <CustomCard2 title="Siembra" imageSource={require('../assets/r5.png')} />
                        <TouchableOpacity onPress={toggleCheckbox1}>
                            <View
                                style={[
                                    styles.checkboxContainer,
                                    isChecked1 ? styles.checked : styles.unchecked,
                                ]}
                            >
                                {isChecked1 && <View style={styles.checkmark} />}
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.checkboxAndCard}>
                        <CustomCard2 title="Control de enfermedades" imageSource={require('../assets/r6.png')} />
                        <TouchableOpacity onPress={toggleCheckbox2}>
                            <View
                                style={[
                                    styles.checkboxContainer,
                                    isChecked2 ? styles.checked : styles.unchecked,
                                ]}
                            >
                                {isChecked2 && <View style={styles.checkmark} />}
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.checkboxAndCard}>
                        <CustomCard2 title="Riego" imageSource={require('../assets/r7.png')} />
                        <TouchableOpacity onPress={toggleCheckbox3}>
                            <View
                                style={[
                                    styles.checkboxContainer,
                                    isChecked3 ? styles.checked : styles.unchecked,
                                ]}
                            >
                                {isChecked3 && <View style={styles.checkmark} />}
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.checkboxAndCard}>
                        <CustomCard2 title="Otro" imageSource={require('../assets/r3.png')} />
                        <TouchableOpacity onPress={toggleCheckbox4}>
                            <View
                                style={[
                                    styles.checkboxContainer,
                                    isChecked4 ? styles.checked : styles.unchecked,
                                ]}
                            >
                                {isChecked4 && <View style={styles.checkmark} />}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.button} onPress={handleGoBack}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleGoBack}>
                        <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        zIndex: 40,
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
        justifyContent: "center",
        padding: 20
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
        fontSize: 30,
        color: "white",
        textAlign: "center",
    },

    buttonContainer: {
        paddingTop: 30,
        alignItems: 'center',
    },

    checkboxAndCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        gap: 20
    },

    checkboxContainer: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: '#333',
    },
    unchecked: {
        backgroundColor: 'transparent',
    },
    checkmark: {
        width: 12,
        height: 12,
        backgroundColor: 'white',
        borderRadius: 2,
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
        width: '100%',
        justifyContent: 'space-around',
    },
    containerBtn: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        position: "absolute",
        bottom: 70
    },
    button: {
        backgroundColor: 'rgba(20, 38, 1, 0.8)',
        marginVertical: 10,
        height: 50,
        borderRadius: 25,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AddScreen;
