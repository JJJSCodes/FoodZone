import { Text, View, StyleSheet, Pressable, ScrollView, FlatList, Modal } from 'react-native';
import Checkbox from 'expo-checkbox';
import ScheduleHeader from './scheduleHeader';
import { MaterialCommunityIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { useState, useRef, useEffect } from 'react';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Avatar } from 'react-native-paper';
import Intructions from './intruction';
import FinalHome from './FinalHome';


export default function Cook({ navigation, route: { params } }) {
    let [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_400Regular,
        Poppins_400Regular,
        Poppins_600SemiBold
    });

    const [tab, setTab] = useState('ingredients');
    const [changesModal, setChangesModal] = useState(false);
    const [fullIntruction, setFullIntruction] = useState(true);
    const [intructions, setIntructions] = useState(Intructions);

    if (!fontsLoaded) return;

    const changeTab = (str) => {
        setTab(str)
    }

    const toggleState = () => {
        if (fullIntruction) {
            setFullIntruction(false);
        } else {
            setFullIntruction(true);
        }
    }

    const renderMyIntructions = ({ item, index }) => {
        if (item.name !== 'J' && !fullIntruction) return;
        return (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 17 }}>
                <View style={{ flex: 0.15 }}>
                    <Checkbox
                        value={item.completed}
                        disabled={item.completed}
                        onValueChange={() => {
                            var intructionCopy = [...intructions];
                            var idx = intructionCopy.findIndex((intruction) => intruction.id === item.id)
                            intructionCopy[idx].completed = true;
                            setIntructions(intructionCopy);
                        }}
                        style={{ marginRight: 17 }}
                    />
                </View>
                <View style={{ flex: 0.15 }}>
                    <Avatar.Text
                        size={24}
                        label={item.name}
                        style={{ backgroundColor: item.name === 'M' ? (item.completed ? 'rgba(0, 48, 73, 0.6)' : '#003049') : (item.completed ? 'rgba(154, 3, 30, 0.6)' : '#9A031E') }}
                    />
                </View>
                <View style={{ flex: 0.8 }}>
                    <Text style={{ ...styles.intructionText, color: item.completed ? 'rgba(32, 26, 37, 0.6)' : '#201A25' }}>{item.intruction}</Text>
                </View>
            </View >
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={changesModal}
            >
                <Pressable style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ ...styles.modalText, marginTop: 9, fontFamily: 'Inter_500Medium' }}>Cooking Complete!</Text>
                        <Pressable style={styles.proceedButton} onPress={() => {
                            setChangesModal(false);
                            navigation.navigate('FinalHome');
                        }}>
                            <Text style={{ fontSize: 17, color: 'white' }}>Go Home</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </Modal>
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
                <View style={{ display: tab === 'ingredients' ? 'flex' : 'none', marginHorizontal: 32, marginVertical: 25 }}>
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
                <View style={{ display: tab === 'intructions' ? 'flex' : 'none', marginLeft: 14, marginRight: 33, marginVertical: 25 }}>
                    {/* <FlatList
                        style={{ marginHorizontal: 25, display: fullIntruction ? 'flex' : 'none' }}
                        data={intructions}
                        renderItem={renderMyIntructions}
                        keyExtractor={item => item.id}
                    />
                    <FlatList
                        style={{ marginHorizontal: 25, display: fullIntruction ? 'none' : 'flex' }}
                        data={intructions}
                        renderItem={renderMyIntructions}
                        keyExtractor={item => item.id}
                    /> */}
                    <FlatList
                        nestedScrollEnabled
                        style={{ marginHorizontal: 25 }}
                        data={intructions}
                        renderItem={renderMyIntructions}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 21 }}>
                    {tab === 'intructions' ? (
                        <>
                            <Pressable style={{ borderRadius: 10, backgroundColor: 'white', borderWidth: 1, borderColor: '#F3752B', marginRight: 17 }} onPress={() => toggleState()}>
                                <Text style={{ color: '#F3752B', paddingHorizontal: 20, paddingVertical: 13, fontFamily: 'Poppins_600SemiBold' }}>{fullIntruction ? 'My Intructions' : 'Full Recipe'}</Text>
                            </Pressable>
                            <Pressable onPress={() => setChangesModal(true)} style={{ borderRadius: 10, backgroundColor: '#F3752B' }}>
                                <Text style={{ color: 'white', paddingHorizontal: 20, paddingVertical: 13, fontFamily: 'Poppins_600SemiBold' }}>Finish Cooking</Text>
                            </Pressable>
                        </>
                    ) : (
                        <Pressable onPress={() => setTab('intructions')} style={{ borderRadius: 10, backgroundColor: '#F3752B' }}>
                            <Text style={{ color: 'white', paddingHorizontal: 41, paddingVertical: 9, fontFamily: 'Poppins_600SemiBold' }}>Next</Text>
                        </Pressable>
                    )}
                </View>
            </ScrollView>

        </View >
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        minWidth: 351,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 47,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    proceedButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F3752B',
        width: 109,
        height: 48,
        borderRadius: 10
    },
    modalText: {
        marginBottom: 25,
        fontSize: 20,
        textAlign: "center",
        color: '#201A25',
    },
    intructionText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
    },
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