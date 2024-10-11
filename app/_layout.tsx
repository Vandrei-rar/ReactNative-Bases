import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { AuthProvider } from "@/contexts/Auth";

export default function RootLayout() {
  useFonts({
    'SofadiOne': require('@/assets/fonts/SofadiOne-Regular.ttf'),
  });

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index"
          options={{
            headerShown: false,
            statusBarColor: "#000"
          }}
        />
        <Stack.Screen
          name="(options)/settings/index" // Caminho para a tela, isso é o roteamento estático.
          options={{
            title: "Settings",
            statusBarColor: "lightblue"
          }}
        />
        <Stack.Screen
          name="(options)/cliente/[id]"
          options={{
            title: "Client page"
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
