import React from 'react';
import { Tabs } from 'expo-router';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Image } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Image source={require("./../../assets/icons/home.png")} />
          ),
        }}
      />
      <Tabs.Screen
        name="surfing"
        options={{
          title: 'Surfing',
          tabBarIcon: ({ color, focused }) => (
            <Image source={require("./../../assets/icons/surfing.png")} />
          ),
        }}
      />

      <Tabs.Screen
        name="hula"
        options={{
          title: 'Hula',
          tabBarIcon: ({ color, focused }) => (
            <Image source={require("./../../assets/icons/hula.png")} />
          ),
        }}
      />

      <Tabs.Screen
        name="vulcano"
        options={{
          title: 'Vulcano',
          tabBarIcon: ({ color, focused }) => (
            <Image source={require("./../../assets/icons/vulcano.png")} />
          ),
        }}
      />
    </Tabs>
  );
}
