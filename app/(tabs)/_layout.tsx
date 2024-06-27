import React from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import CustomTabBar from '@/components/CustomTabBar';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="surfing"
        options={{
          title: 'Surfing',
        }}
      />

      <Tabs.Screen
        name="hula"
        options={{
          title: 'Hula',
        }}
      />

      <Tabs.Screen
        name="vulcano"
        options={{
          title: 'Vulcano',
        }}
      />
    </ Tabs>
  );
}
