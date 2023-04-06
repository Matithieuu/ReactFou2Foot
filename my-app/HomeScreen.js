import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import axios from 'axios';
import mbappe from './assets/mbappe2.png';
import SecondScreen from './SecondScreen';

const HomeScreen = ({ navigation }) => {
  const [playerName, setPlayerName] = useState('');

  const handleSearch = () => {
    axios
      .get('https://my-json-server.typicode.com/Matithieuu/ReactFou2Foot/db')
      .then(response => {
        const players = response.data.joueurs;
        const playerData = players.filter(player => player.nom === playerName);
        navigation.navigate('Resultat', { playerData: playerData.length > 0 ? playerData[0] : null });
      })
      .catch(error => {
        console.error('Error fetching player data:', error);
      });
  };

  return (
    <ImageBackground source={mbappe} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.label}>Fou2Foot</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.champInput}
            placeholder="Entrez le nom d'un joueur"
            value={playerName}
            onChangeText={setPlayerName}
          />
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Rechercher</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 'center',
    position: 'relative',
  },

  label: {
    color: '#FFFFFF',
    position: 'absolute',
    top: 140,
    fontSize: 40,
    fontWeight: 'bold',
  },

  champInput: {
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    fontSize: 18,
    width: '103%',
    borderWidth: 2,
    borderRadius: 5,
    padding: 7,
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
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    },

form: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
    },
    });
    
    export default HomeScreen;