import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, Pressable, navigation } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import  SelectMeal from './SelectMeal';
import Home from '../Home';
import Availability from './Availability';
import { useEffect } from 'react';

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
    useEffect(() => {
        if (navigation) {
            navigation.setOptions({ tabBasrStyle: { display: 'none' } })
        }
    });

    const screenOptionStyle = {
        headerShown: false,
    };
    
    return (
        <Stack.Navigator initialRouteName={"Home"} screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SelectMeal" component={SelectMeal} />    
            <Stack.Screen name="Availability" component={Availability} />      
        </Stack.Navigator>
    )
}
