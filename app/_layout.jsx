import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from 'react-native-toast-message';
import "../global.css";

export default function RootLayout() {
  return(
    <>
    <GestureHandlerRootView style={{ flex: 1 }}>
  <Stack>
    <Stack.Screen name="(Authentication)" options={{ headerShown: false }}/>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
    <Stack.Screen name="(screens)" options={{ headerShown: false }}/>
  </Stack> 
  </GestureHandlerRootView>
    <Toast />
    </>
  );
}
