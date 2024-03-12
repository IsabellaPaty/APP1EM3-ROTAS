import * as React from 'react';
import { useState } from 'react'; // Importando o useState separadamente
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; // Adicionando importação do TextInput
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container5}>
  <Text style={styles.container6}>SITE MULTIFUNÇOES</Text>
  <Button
  title="Calcular Área de um quadrado"
  onPress={() => navigation.navigate('AreaScreen')} />
  <Button
  title="Descubra com velho vc é"
  onPress={() => navigation.navigate('IdadeScreen')} />
  <Button
  title="Calcular a Área de um Triângulo"
  onPress={() => navigation.navigate('TrianguloScreen')} />

  </View>
   );
  }

function IdadeScreen({ navigation }) {
  // Removendo o 'return' desnecessário
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckAge = () => {
    const ageInt = parseInt(age);
    if (isNaN(ageInt)) {
      setMessage('Por favor, insira uma idade válida.');
    } else {
      if (ageInt >= 0 && ageInt <= 12) {
        setMessage('Você é uma criança.');
      } else if (ageInt >= 13 && ageInt <= 17) {
        setMessage('Você é um adolescente.');
      } else if (ageInt >= 18 && ageInt <= 20) {
        setMessage('Você é um jovem adulto.');
      } else if (ageInt >= 21 && ageInt <= 60) {
        setMessage('Você é um adulto.');
      } else {
        setMessage('Você é um idoso.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={(text) => setAge(text)}
        value={age}
        keyboardType="numeric"
      />
      <Button title="Verificar Idade" onPress={handleCheckAge} />
      <Text style={styles.message}>{message}</Text>
      <Button
title="Sair"
onPress={() => navigation.navigate('Home')} />
    </View>
  );
}


function AreaScreen({ navigation }) { 
  const [side, setSide] = useState('');
  const [result, setResult] = useState(null);

  const handleArea = () => {
    const area = parseFloat(side) ** 2;
    setResult(area);
  };

  return (
    <View style={styles.container1}>
      <Text style={styles.title1}>Calculadora de Área de Quadrado </Text>
      <TextInput
        style={styles.input1}
        placeholder="Digite o lado do quadrado"
        onChangeText={(text) => setSide(text)}
        keyboardType="numeric"
        value={side}
      />
      <Button title="Calcular Área" onPress={handleArea} />
      {result !== null && <Text style={styles.result1}>Área: {result}</Text>}
      <Button
title="Sair"
onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

function TrianguloScreen({ navigation }) { 
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const handleArea = () => {
    const area = (parseFloat(base) * parseFloat(height)) / 2;
    setResult(area);
  };

  return (
    <View style={styles.container3}>
      <Text style={styles.title3}>Calculadora de Área de Triângulo em React Native</Text>
      <TextInput
        style={styles.input3}
        placeholder="Digite a base do triângulo"
        onChangeText={(text) => setBase(text)}
        keyboardType="numeric"
        value={base}
      />
      <TextInput
        style={styles.input3}
        placeholder="Digite a altura do triângulo"
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
        value={height}
      />
      <Button title="Calcular Área" onPress={handleArea} />
      {result !== null && <Text style={styles.result3}>Área: {result}</Text>}
      <Button
title="Sair"
onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input1: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result1: {
    marginTop: 20,
    fontSize: 18,
  },
  container5: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  container6:{
    fontSize: 80,
    },
    container3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title3: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input3: {
      width: 200,
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    result3: {
      marginTop: 20,
      fontSize: 18,
    },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AreaScreen" component={AreaScreen} />
        <Stack.Screen name="IdadeScreen" component={IdadeScreen} />
        <Stack.Screen name="TrianguloScreen" component={TrianguloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

