import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '/amuhome/y21218666/2Année/Dev\ Application/fou2foot/my-app/src/SearchBar';
import PlayerList from '/amuhome/y21218666/2Année/Dev\ Application/fou2foot/my-app/src/PlayerList';

const DisplayNameWebSite = () => {
  return (
    <Text style={styles.NameWebSite}> Fou2Foot</Text>
  );
}

const App = () => {
  const [players, setPlayers] = useState([]);

  const searchPlayers = async (term) => {
    const response = await axios.get('https://my-json-server.typicode.com/Matithieuu/ReactFou2Foot/db');
    const allPlayers = response.data.joueurs;
    const filteredPlayers = allPlayers.filter((player) => {
      return player.nom.toLowerCase().includes(term.toLowerCase());
    });
    setPlayers(filteredPlayers);
  };

  return (
    <View>
      <DisplayNameWebSite/>
      <SearchBar search={searchPlayers} />
      <PlayerList players={players} />
    </View>
  );
};

const styles = StyleSheet.create({
  NameWebSite: 
  {
    //color: '#FFFFFF',
    top: 150,
    fontSize: 40,
    fontWeight: 'bold'
  }

});






export default App;
