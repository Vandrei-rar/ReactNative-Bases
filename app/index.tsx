import { Link } from "expo-router";
import { Text, View } from "react-native";
import Butao from "../components/Botao"

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
      <Link href={"/settings"} >Settings</Link>
      <Link href={"/cliente/4"}>Pagina de cliente</Link>

      <Butao />
    </View>
  );
}