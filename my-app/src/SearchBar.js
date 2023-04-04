import React, { useState } from 'react';
import { TextInput } from 'react-native';

const SearchBar = ({ search }) => {
  const [term, setTerm] = useState('');

  const onTermChange = (newTerm) => {
    setTerm(newTerm);
    search(newTerm);
  };

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      placeholder="Rechercher un joueur..."
      value={term}
      onChangeText={onTermChange}
    />
  );
};

export default SearchBar;