// ***NOTE: This '_layout.tsx' is used to group routes together and display them in a bottom tab bar***

import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    // return (
    //     <Tabs>
    //         <Tabs.Screen name="index" options={{ title: 'Home' }} />
    //         <Tabs.Screen name="about" options={{ title: 'About' }} />
    //     </Tabs>
    // )
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#FFD33D',
                headerStyle: {
                    backgroundColor: '#25292E',
                },
                headerTintColor: "#FFFFFF",
                tabBarStyle: {
                    backgroundColor: '#25292E',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    )
}