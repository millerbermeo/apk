import React,  { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [finca, setFinca] = useState('');
    const [focusedInput, setFocusedInput] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const mostrarAlerta = () => {
      Alert.alert(
        'Recuperar Contraseña',
        'A tu numero te llegara los pasos para recuperar tu cuenta',
        [
          {
            text: 'OK',
            onPress: () => console.log('Botón OK presionado')
          },
          // Puedes agregar más botones aquí
        ],
        { cancelable: false }
      );
    };

    const handleLogin = () => {
        navigation.navigate('HomeStack');
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const register = () => {
        navigation.navigate('Register');
    }

    return (
        <ImageBackground style={styles.container} source={require('../assets/pantalla2.png')}>
           <View style={styles.fondo}>
                <Image source={require('../assets/logoacplicación.png')} style={styles.logoImage} />


                <View style={[styles.inputContainer, { backgroundColor: focusedInput === 'email' ? 'rgba(0,0,0, 0.2)' : 'transparent' }]}>
                    <Icon name="user" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Usuario"
                        placeholderTextColor="white"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput(null)}
                    />
                </View>

                <View style={[styles.inputContainer, { backgroundColor: focusedInput === 'password' ? 'rgba(0,0,0, 0.2)' : 'transparent' }]}>
                    <Icon name="lock" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Documento"
                        placeholderTextColor="white"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={!showPassword}
                        onFocus={() => setFocusedInput('password')}
                        onBlur={() => setFocusedInput(null)}
                    />
                    <TouchableOpacity
                        onPress={toggleShowPassword}
                        style={styles.showPasswordButton}
                    >     
                    </TouchableOpacity>
                </View>

                <View style={[styles.inputContainer, { backgroundColor: focusedInput === 'finca' ? 'rgba(0,0,0, 0.2)' : 'transparent' }]}>
                    <Icon name="user" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Finca"
                        placeholderTextColor="white"
                        onChangeText={(text) => setFinca(text)}
                        value={finca}
                        onFocus={() => setFocusedInput('finca')}
                        onBlur={() => setFocusedInput(null)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={register}>
                        <Text style={styles.footerTextUno}>Crear Cuenta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={mostrarAlerta}>
                        <Text style={styles.footerText}>
                            Olvidaste tu Contraseña?
                        </Text>
                    </TouchableOpacity>
                </View>
           </View>
        </ImageBackground>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex: 1,
      resizeMode: "cover",
    },
  
    fondo:{
      backgroundColor: 'rgba(0,0,0,0.6)',
      padding: 20,
      paddingTop: 160,
      paddingBottom: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  
    containerRegister: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 20,
      paddingTop: 100,
      paddingBottom: 100,
      flex: 1,
      resizeMode: "cover",
    },
    
  
    logoImage: {
      width: 150, // Ajusta el ancho de la imagen según tus necesidades
      height: 180, // Ajusta el alto de la imagen según tus necesidades
      marginBottom: 20, // Agrega margen inferior para separar la imagen de los botones
  },
  
  
    // image: {
    //   width: 225,
    //   height: 210,
    //   marginBottom: 30,
    // },
  
  
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 25,
      paddingHorizontal: 15,
      width: '100%',
    },
    icon: {
      fontSize: 35,
      color: '#ccc',
    },
  
  
    input: {
      flex: 1,
      fontSize: 18,
      height: 55,
      marginLeft: 10,
      color: "white",
    },
  
    showPasswordIcon: {
      fontSize: 30,
      color: "white"
    },
  
  
    loginButton: {
      backgroundColor: '#730202',
      borderRadius: 25,
      paddingVertical: 15,
      paddingHorizontal: 40,
      marginTop: 0,
      width: 210,
  
    },
    loginButtonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    footer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 20,
      gap: 10,
      alignItems: "center",
      
      
    },
    footerTextUno: {
      fontSize: 20,
      color: 'white',
      borderBottomWidth: 1,
      marginTop: 50,
      fontWeight: "bold",
      borderColor: "white"
    },
  
    footerText: {
      fontSize: 18,
      color: '#730202',
      borderBottomWidth: 1,
      borderColor: "#730202",
      fontWeight: "bold"
    },
  
  });
