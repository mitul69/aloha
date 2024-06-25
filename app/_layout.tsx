import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isFontsLoaded] = useFonts({
    "IBMPlexMono": require('./../assets/fonts/IBMPlexMono.ttf'),
    "IBMPlexMono-Bold": require('./../assets/fonts/IBMPlexMono-Bold.ttf'),
    "IBMPlexMono-Light": require('./../assets/fonts/IBMPlexMono-Light.ttf'),
    "IBMPlexMono-Medium": require('./../assets/fonts/IBMPlexMono-Medium.ttf'),
    "IBMPlexMono-SemiBold": require('./../assets/fonts/IBMPlexMono-SemiBold.ttf')
  });

  useEffect(() => {
    if (isFontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isFontsLoaded]);

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
