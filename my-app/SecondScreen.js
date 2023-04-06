import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SecondScreen = ({ route }) => {
  const { playerData } = route.params;

  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Caractéristiques du joueur :</Text>
      {playerData ? (
        <View style={styles.playerInfoContainer}>
          <Text style={styles.playerName}>{playerData.nom}</Text>
          <Text style={styles.playerClub}>Club: {playerData.club}</Text>
          <Text style={styles.playerNumero}>Numéro: {playerData.numero}</Text>
          <Text style={styles.playerPoste}>Poste: {playerData.poste}</Text>
        </View>
      ) : (
        <Text style={styles.noPlayer}>Aucun joueur trouvé</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center',
      },
    playerInfoContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    playerName: {
      color: '#000000',
      fontSize: 24,
      marginBottom: 10,
    },
    playerClub: {
      color: '#000000',
      fontSize: 18,
      marginBottom: 5,
    },
    playerNumero: {
      color: '#000000',
      fontSize: 18,
      marginBottom: 5,
    },
    playerPoste: {
      color: '#000000',
      fontSize: 18,
      marginBottom: 5,
    },
    noPlayer: {
      color: '#FF0000',
      fontSize: 24,
    },
  });

export default SecondScreen;
