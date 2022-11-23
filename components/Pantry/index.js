import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import List from './list';
import Edit from './edit';

const Stack = createStackNavigator();

export default function Pantry() {
    const screenOptionStyle = {
        headerShown: false,
    };
    
    return (
        <Stack.Navigator initialRouteName={"List"} screenOptions={screenOptionStyle}>
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
    )
}