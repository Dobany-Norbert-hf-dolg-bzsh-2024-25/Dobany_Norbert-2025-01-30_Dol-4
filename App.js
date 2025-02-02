import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native';

export default function App() {
  const [radius, setRadius] = useState("");
  const [height, setHeight] = useState("");
  const [surfaceArea, setSurfaceArea] = useState("");

  const calculateSurfaceArea = () => {
    const surfaceArea = 2 * Math.PI * radius * (radius+height);
    setSurfaceArea(surfaceArea.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Kör alapú henger felszín kalkulátor</Text>

      <Text style={styles.text}>Sugár:</Text>
      <TextInput
        style={styles.input}
        placeholder='Sugár'
        onChangeText={(radius) => setRadius(radius)}/>

      <Text style={styles.text}>Magasság:</Text>
      <TextInput
        style={styles.input} 
        placeholder='Magasság'
        onChangeText={(height) => setHeight(height)}/>

      <Button title="Számít" onPress={calculateSurfaceArea}/> 

      <Text style={styles.result}>Felszín: {surfaceArea}</Text>

      <Text style={styles.info}>Dobány Norbert Szoft II/1/N</Text>   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    margin: 10,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    backgroundColor:'white',
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10, 
    width: 220,
  },
  result: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  info: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  }
});
