import React from 'react';
import { FlatList, Text, View } from 'react-native';

const PlayerList = ({ players }) => {
  if (!players.length) {
    return null;
  }

  return (
    <FlatList
      data={players}
      keyExtractor={(player) => player.id.toString()}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.nom}</Text>
            <Text>{item.club}</Text>
          </View>
        );
      }}
    />
  );
};

export default PlayerList;