import { Alert, Button, Text, TextInput, View } from "react-native";
import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { AuthContext } from "@/contexts/Auth";
import { router } from "expo-router";

export default function Index() {
  const { userData, signIn } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    signIn(email, password);

    if (userData) {
      router.push("/dashboard")
    } else {
      Alert.alert("Atenção", "Credenciais inválidas")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
      />
      <Text style={styles.label}>Digite sua senha</Text>
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});