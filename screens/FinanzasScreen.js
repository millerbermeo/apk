import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


const FinanzasScreen = ({ navigation }) => {
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

    const handleFin = () => {
        navigation.navigate('Fin');
      };

    return (
        <View style={styles.container}>
            
            <ImageBackground style={styles.headerContent} source={require('../assets/pantalla10.png')}>
                <View style={styles.overlayy}>
                    <View style={styles.overlay}>
                    <TouchableOpacity style={styles.btnBack} onPress={handleGoBack}>
                <Ionicons name="chevron-back-circle-outline" size={50} color="white" />
            </TouchableOpacity>
                        <TouchableOpacity style={styles.logout} onPress={handleCalen}>
                            <MaterialCommunityIcons name="finance" size={45} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Finanzas</Text>
                    </View>

                    <View style={styles.tableContainer}>
                        <View style={styles.tableHeader}>
                            <Text style={styles.headerText}>Ingresos</Text>
                            <Text style={styles.headerText}>Categorias</Text>
                            <Text style={styles.headerText}>Abono</Text>
                            <Text style={styles.headerText}>Control Arvences</Text>
                            <Text style={styles.headerText}>Fumiga</Text>

                        </View>

                        <View style={styles.row}>
                            <Text style={styles.cell}>14</Text>
                            <Text style={styles.cell}>Venta de productos</Text>
                            <Text style={styles.cell}>$500</Text>
                            <Text style={styles.cell}>$50</Text>
                            <Text style={styles.cell}>$25</Text>

                        </View>

                        {/* Fila 2 */}
                        <View style={styles.row}>
                            <Text style={styles.cell}>45</Text>
                            <Text style={styles.cell}>Servicios de consultoría</Text>
                            <Text style={styles.cell}>$300</Text>
                            <Text style={styles.cell}>$30</Text>
                            <Text style={styles.cell}>$15</Text>

                        </View>

                        {/* Fila 3 */}
                        <View style={styles.row}>
                            <Text style={styles.cell}>34</Text>
                            <Text style={styles.cell}>Alquiler de equipo</Text>
                            <Text style={styles.cell}>$200</Text>
                            <Text style={styles.cell}>$20</Text>
                            <Text style={styles.cell}>$10</Text>

                        </View>

                        {/* Fila 4 */}
                        <View style={styles.row}>
                            <Text style={styles.cell}>41</Text>
                            <Text style={styles.cell}>Publicidad en línea</Text>
                            <Text style={styles.cell}>$150</Text>
                            <Text style={styles.cell}>$15</Text>
                            <Text style={styles.cell}>$7.5</Text>

                        </View>

                        {/* Fila 5 */}
                        <View style={styles.row}>
                            <Text style={styles.cell}>15</Text>
                            <Text style={styles.cell}>Gastos de oficina</Text>
                            <Text style={styles.cell}>$100</Text>
                            <Text style={styles.cell}>$10</Text>
                            <Text style={styles.cell}>$5</Text>

                        </View>
                    </View>

                    <View style={styles.iconsDown}>
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


                    <View style={styles.final}>
                        <View>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>4.500.000</Text>
                            </TouchableOpacity>
                            <Text style={styles.title2}>Gastos Totales</Text>
                        </View>

                        <View>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>4.500.000</Text>
                            </TouchableOpacity>
                            <Text style={styles.title2}>Ingresos Totales</Text>
                        </View>
                    </View>
                </View>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },

    btnBack: {
        position: "absolute",
        top: 40,
        left: 10,
    },

    headerContent: {
        flex: 1,
        justifyContent: 'flex-start',
        overflow: 'hidden',
    },

    overlayy: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },


    overlay: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 70,
        height: 170,
        backgroundColor: "gray"
    },
    logout: {
        marginRight: 20,
    },
    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },

    title2: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        textAlign: "center"
    },
    tableContainer: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        margin: 20,
        marginRight: 20,
        marginTop: 70
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        paddingVertical: 5,
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingVertical: 5,
    },
    cell: {
        flex: 1,
        textAlign: 'center',
    },
    iconsDown: {
        backgroundColor: 'rgba(166, 3, 3, 0.6)',
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderTopColor: 'white',
        width: "100%"
    },

    button: {
        width: 110, // Ancho del botón cuadrado
        height: 60, // Altura del botón cuadrado
        backgroundColor: 'rgba(166, 3, 3, 0.6)',// Color de fondo del botón
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, // Radio de borde para hacerlo cuadrado
        marginLeft: 28
    },
    buttonText: {
        color: 'white', // Color del texto del botón
        fontSize: 18,
    },
    final: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        gap: 20,
        paddingTop: 30
    }
});

export default FinanzasScreen;
