import { Stack } from "expo-router";
import Toast from 'react-native-toast-message';
import "../global.css";

export default function RootLayout() {
  return(
    <>
  <Stack>
    <Stack.Screen name="(Authentication)" options={{ headerShown: false }}/>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
    <Stack.Screen name="(screens)" options={{ headerShown: false }}/>
  </Stack> 
    <Toast />
    </>
  );
}
