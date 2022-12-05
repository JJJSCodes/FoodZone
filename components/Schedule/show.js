import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Header from '../Header'
import { useState, useRef, useEffect } from 'react';
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';
import defaultSchedule from './defaultSchedule';
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';


export default function Show({ navigation, route: { params } }) {
    let [fontsLoaded] = useFonts({
        Inter_700Bold
    });
    const { meals, mealIdx } = params;
    const meal = meals[mealIdx];

    if (!fontsLoaded) return;

    return (
        <>
            <View style={{ flex: 0.3, maxHeight: 150 }}>
                <Header heading={meal.meal} subHeading={meal.long_date} back={() => navigation.goBack()} />
            </View>
            <View style={styles.menuTopBar}>
                <Pressable onPress={() => navigation.navigate('Show', { ...params, mealIdx: 0 })}>
                    <Text style={{ ...styles.menuText, borderColor: styles.orange, borderBottomWidth: 1, color: mealIdx == 0 ? styles.orange : styles.default }}>Breakfast</Text>
                    {mealIdx == 0 && <View style={{ bottom: -10, borderColor: styles.orange, borderWidth: 1 }} />}
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Show', { ...params, mealIdx: 1 })}>
                    <Text style={{ ...styles.menuText, color: mealIdx == 1 ? styles.orange : styles.default }}>Lunch</Text>
                    {mealIdx == 1 && <View style={{ bottom: -10, borderColor: styles.orange, borderWidth: 1 }} />}
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Show', { ...params, mealIdx: 2 })}>
                    <Text style={{ ...styles.menuText, color: mealIdx == 2 ? styles.orange : styles.default }}>Dinner</Text>
                    {mealIdx == 2 && <View style={{ bottom: -10, borderColor: styles.orange, borderWidth: 1 }} />}
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    orange: '#F3752B',
    default: '#8E8E93',
    menuText: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Inter_700Bold',
    },
    menuTopBar: {
        maxHeight: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 0.1,
        backgroundColor: 'white',
        shadowColor: "rgba(32, 26, 37, 0.12)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
});