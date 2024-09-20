import { StyleSheet, Text } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

export default function Settings() {
    return (
        <>
            <Text style={styles.fontText}>É a pagina de Settings</Text>
            <Icon name="airplane" size={64} color="green" />
        </>
    )
}

const styles = StyleSheet.create({
    fontText: {
        fontFamily: 'SofadiOne',
        fontSize: 52
    }
})
