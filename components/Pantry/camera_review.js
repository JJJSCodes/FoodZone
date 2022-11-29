import { Text, View, StyleSheet, Image, Alert, Button, ScrollView, Pressable } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Header from '../Header';
import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect } from 'react';

const Scan_Pantry = [
    {
        img: require('../../assets/pantry/cheddar.png'),
        name: 'Shredded Cheddar',
        unit_measure: 'Count',
        amount: 2,
    },
    {
        img: require('../../assets/pantry/milk.png'),
        name: 'Skimmed Milk',
        unit_measure: 'Count',
        amount: 1,
    },
]

export default function CameraScan({navigation, route}) {
    <Text>This is review</Text>
}




