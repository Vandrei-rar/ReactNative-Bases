import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function Cliente() {
    const { id } = useLocalSearchParams()

    return (
        <Text>O id enviado foi {id}</Text>
    )
}