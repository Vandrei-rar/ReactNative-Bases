import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useContext } from "react";

export default function Index() {

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Dashboard</Text>
            <Link href={"/settings"} >Settings (Pode tocar aqui)</Link>
            <Link href={"/cliente/4"}>Pagina de cliente (Pode tocar aqui)</Link>

        </View>
    );
}