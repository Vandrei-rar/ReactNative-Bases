import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Notifications from 'expo-notifications'

export default function SettingsPage() {

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false
        })
    })

    function sendPushNotification() {
        Notifications.requestPermissionsAsync()
        Notifications.scheduleNotificationAsync({
            content: { title: "Notificaçãozinha", body: "Vai GARAI" },
            trigger: null
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerInfo}>
                <Text style={styles.title}>
                    Veja como está o tempo ao redor do mundo 🌍️
                </Text>
                <Text style={styles.subtitle}>
                    Comece agora gratuitamente
                </Text>

                <TouchableOpacity style={styles.buttonContainer} onPress={sendPushNotification}>
                    <Text style={styles.buttonText}>
                        Vamos lá
                    </Text>
                </TouchableOpacity>
                <Text>
                    Já tem uma conta ? <Text style={{ fontWeight: 'bold', color: '#6151c3' }}> Log in </Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6151c3",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    containerInfo: {
        backgroundColor: "#fff",
        width: 350,
        height: 361,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: "center",
        marginHorizontal: 20
    },
    subtitle: {
        marginTop: 15,
        fontSize: 14,
        color: "#6B6A71",
        textAlign: "center"
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6151c3",
        width: 264,
        height: 60,
        borderRadius: 30,
        padding: 15,
        marginTop: 60,
        marginBottom: 10
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    }
})