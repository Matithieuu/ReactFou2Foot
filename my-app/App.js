import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, TextInput, View,Button,Alert, ImageBackground} from 'react-native';

import  mbappe  from './assets/mbappe2.png';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SecondScreen from './SecondScreen';



const Stack = createStackNavigator();

 

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={mbappe} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.label}> Fou2Foot</Text>
      <View style={styles.form}>
      <TextInput style={styles.champInput} placeholder="Entrez le nom d'un joueur"/>
      <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Second')}>
            <Text style={styles.buttonText}>Rechercher</Text>
          </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 'center',
    position: 'relative',
  },

  label:{
    color: '#FFFFFF',
    position: 'absolute',
    top: 150,
    fontSize: 40,
    fontWeight: 'bold'

  },

  champInput:{
    borderColor: "#FFFFFF",
    color: '#FFFFFF',
    fontSize: 18,
    width: '103%',
    borderWidth: 2,
    borderRadius: 5,
    padding: 7
    
  },
  button: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  form: {
    alignItems: 'center',
    marginTop: 100,
  },

});


