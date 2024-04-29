import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#007bff',
    color: '#fff',
  },
});

const LoginScreen = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Usuário:', nome);
    console.log('Senha:', senha);
    alert('Login efetuado com sucesso!');
  };

  const handleCadastro = () => {
    alert('Cadastro em breve!');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" style={styles.button} onPress={handleLogin} />

      <Button title="Cadastrar" style={styles.button} onPress={handleCadastro} />
    </View>
  );
};

export default LoginScreen;
