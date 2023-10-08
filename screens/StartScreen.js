import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

// ...

const StartScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground style={styles.container}  source={require('../assets/Pantalla1.png')}>
   <View style={styles.overlay}>
      <TouchableOpacity onPress={handleNavigateToLogin}>
        <Image style={styles.imgContent} source={require('../assets/logoacplicación.png')}/>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },

    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      paddingTop: 200,
      padding: 3,
      paddingBottom: 200,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%"
    },

    imgContent: {
        width: 250,
        height: 305,
    }
})

export default StartScreen;
