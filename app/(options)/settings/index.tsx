import { Button, SafeAreaView, StyleSheet, Text, useColorScheme } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function Settings() {
    const [theme, setTheme] = useState("light")

    function handleTheme() {
        if (theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <SafeAreaView style={theme == "light" ? styles.lightTheme : styles.darkTheme}>
            <Text style={theme == "light" ? styles.lightThemeText : styles.darkThemeText}>É a pagina de Settings</Text>
            <Icon name="airplane" size={64} color="green" />
            <Button title="MUDA DE TEMA" onPress={handleTheme} />
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    fontText: {
        fontFamily: 'SofadiOne',
        fontSize: 52,
    },
    darkTheme: {
        backgroundColor: "#000",
    },
    lightTheme: {
        backgroundColor: "#FFF",
    },
    darkThemeText: {
        color: "#FFF",
        fontFamily: 'SofadiOne',
        fontSize: 52,
    },
    lightThemeText: {
        color: "#000",
        fontFamily: 'SofadiOne',
        fontSize: 52,
    }
})
