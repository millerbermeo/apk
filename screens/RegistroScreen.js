import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const RegistroScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNombreFocused, setIsNombreFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const handleRegistro = () => {

    navigation.navigate('Login'); 
  };

  return (
    <ImageBackground style={styles.containerRegister} source={require('../assets/pantalla2.png')}>
              <View style={styles.fondo}>
      <Text style={styles.titleRegister}>Registrar</Text>

      <View style={[styles.inputContainer, { backgroundColor: isNombreFocused ? 'rgba(0,0,0,0.2)' : 'transparent' }]}>
        <Icon name="user" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="white"
          onChangeText={(text) => setNombre(text)}
          value={nombre}
          onFocus={() => setIsNombreFocused(true)}
          onBlur={() => setIsNombreFocused(false)}
        />
      </View>

      <View style={[styles.inputContainer, { backgroundColor: isEmailFocused ? 'rgba(0,0,0,0.2)' : 'transparent' }]}>
        <Icon name="envelope" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="white"
          onChangeText={(text) => setEmail(text)}
          value={email}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />
      </View>

      <View style={[styles.inputContainer, { backgroundColor: isPasswordFocused ? 'rgba(0,0,0,0.2)' : 'transparent' }]}>
        <Icon name="lock" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="white"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
      </View>

      <View style={[styles.inputContainer, { backgroundColor: isConfirmPasswordFocused ? 'rgba(0,0,0,0.2)' : 'transparent' }]}>
        <Icon name="lock" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          placeholderTextColor="white"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry
          onFocus={() => setIsConfirmPasswordFocused(true)}
          onBlur={() => setIsConfirmPasswordFocused(false)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleRegistro}
      >
        <Text style={styles.loginButtonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.footerText}>¿Ya tienes una cuenta? Inicia sesión</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RegistroScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      resizeMode: "cover",
    },
  
    fondo: {
        flex: 1, // Make it take up the entire screen
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingTop: 120,
    },
  
    containerRegister: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'white',
    //   padding: 20,
    //   paddingTop: 100,
    //   paddingBottom: 100,
      flex: 1,
      resizeMode: "cover",
    },
    
    title: {
      fontSize: 55,
      fontWeight: 'bold',
      color: 'white',
      textAlign: "center"
    },
  
    titleRegister: {
      fontSize: 55,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 50
      
    },
  
    sub: {
      fontSize: 35,
      fontWeight: '700',
      color: '#730202',
      marginBottom: 70,
      textAlign: "center",
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
      marginTop: 20,
      width: 200,
      marginBottom: 20,
  
    },
    loginButtonText: {
      color: 'white',
      fontSize: 18,
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
      fontSize: 16,
      color: '#730202',
      borderBottomWidth: 1,
      borderColor: "#730202",
    },
  
  });
