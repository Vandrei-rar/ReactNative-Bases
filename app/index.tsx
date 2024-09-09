import { Link } from "expo-router";
import { Text, View } from "react-native";
import TextoDiferente from "../components/TextoDiferente"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Qualquer coisa.</Text>
      <Link href={"/settings"} >Settings (Pode tocar aqui)</Link>
      <Link href={"/cliente/4"}>Pagina de cliente (Pode tocar aqui)</Link>

      <TextoDiferente />
    </View>
  );
}