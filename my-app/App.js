import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, TextInput, View,Button,Alert} from 'react-native';


export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.label}> Fou2Foot</Text>
      <TextInput
      style={styles.champInput}
        placeholder="Entrez le nom d'un joueur"
      />
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
        <Text style={styles.buttonText}>Rechercher</Text>
      </TouchableOpacity>
    </View>
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
    width: '70%',

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
});