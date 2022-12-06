import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import ScheduleHeader from './scheduleHeader';
import { MaterialCommunityIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { useState, useRef, useEffect } from 'react';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';


export default function Cook({ navigation, route: { params } }) {
    let [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_400Regular,
        Poppins_400Regular,
        Poppins_600SemiBold
    });

    const [tab, setTab] = useState('ingredients');

    if (!fontsLoaded) return;

    const renderItem = ({ item }) => (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, paddingVertical: 16 }}>
                <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 17, color: item.name === "Jasmine" ? '#F3752B' : 'black' }}>{item.name}</Text>
                <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 17, color: '#8E8E93' }}>{item.skill}</Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#F2F2F7' }} />
        </>
    )

    const changeTab = (str) => {
        setTab(str)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 0.4 }}>
                <ScheduleHeader heading={'hi'} subHeading={'hi'} back={() => navigation.goBack()} />
            </View>
            <View style={styles.menuTopBar}>
                <Pressable onPress={() => changeTab('ingredients')}>
                    <Text style={{ ...styles.menuText, borderColor: styles.orange, borderBottomWidth: 1, color: tab === 'ingredients' ? styles.orange : styles.default }}>Ingredients</Text>
                    {tab === 'ingredients' && <View style={{ bottom: -10, borderColor: styles.orange, borderWidth: 1 }} />}
                </Pressable>
                <Pressable onPress={() => changeTab('intructions')}>
                    <Text style={{ ...styles.menuText, color: tab === 'intructions' ? styles.orange : styles.default }}>Intructions</Text>
                    {tab === 'intructions' && <View style={{ bottom: -10, borderColor: styles.orange, borderWidth: 1 }} />}
                </Pressable>
            </View>
            <ScrollView style={{ flex: 0.5 }}>
                {tab === 'ingredients' && (
                    <View style={{ marginHorizontal: 32, marginVertical: 25 }}>
                        <View style={styles.ingredientRow}>
                            <View style={styles.number}>
                                <Text style={styles.ingredientText}>1</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.ingredientText}>2 tsp paprika</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientRow}>
                            <View style={styles.number}>
                                <Text style={styles.ingredientText}>2</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.ingredientText}>1 tsp dried oregano</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientRow}>
                            <View style={styles.number}>
                                <Text style={styles.ingredientText}>3</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.ingredientText}>1/2 tsp garlic powder</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientRow}>
                            <View style={styles.number}>
                                <Text style={styles.ingredientText}>4</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.ingredientText}>1/2 tsp onion powder</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientRow}>
                            <View style={styles.number}>
                                <Text style={styles.ingredientText}>5</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.ingredientText}>1/4 tsp salt</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientRow}>
                            <View style={styles.number}>
                                <Text style={styles.ingredientText}>6</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.ingredientText}>1.25 Ibs. bonless, chicken thighs (4-5 thighs)</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientRow}>
                            <View style={styles.number}>
                                <Text style={styles.ingredientText}>7</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.ingredientText}>2 tbsp cooking oil, divided</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientRow}>
                            <View style={styles.number}>
                                <Text style={styles.ingredientText}>8</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.ingredientText}>1 yellow onion, diced</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientRow}>
                            <View style={styles.number}>
                                <Text style={styles.ingredientText}>9</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.ingredientText}>1 cup long-grain white rice (uncooked)</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientRow}>
                            <View style={styles.number}>
                                <Text style={styles.ingredientText}>10</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.ingredientText}>1.75 cups vegetable broth</Text>
                            </View>
                        </View>
                        <View style={styles.ingredientRow}>
                            <View style={styles.number}>
                                <Text style={styles.ingredientText}>11</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.ingredientText}>1 tbsp chopped parsley</Text>
                            </View>
                        </View>
                    </View>
                )}
            </ScrollView>

        </View >
    )
}

const styles = StyleSheet.create({
    ingredientRow: {
        flexDirection: 'row',
        marginBottom: 27
    },
    number: {
        marginRight: 10,
        // backgroundColor: '#C4C4C4',
        backgroundColor: 'rgba(196, 196, 196, 0.4)',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ingredientText: {
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular',
        fontSize: 12
    },
    orange: '#F3752B',
    default: '#8E8E93',
    menuText: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Inter_700Bold',
    },
    menuTopBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: 65,
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