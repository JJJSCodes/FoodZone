import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Alert, Pressable, Modal, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Header from '../Header'
import defaultPantry from './defaultPantry';
import { useState, useRef, useEffect } from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';

export default function List({ navigation, route: { params } }) {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Roboto_500Medium,
    });
    
    const [pantry, setPantry] = useState([...defaultPantry]);
    const [showModal, setShowModal] = useState(false);

    const scrollViewRef = useRef();

    const format = (amount) => {
        if (amount > 9) return amount.toString();
        return '0' + amount.toString();
    }

    const unitType = (type) => {
        switch (type) {
            case 'count':
                return 'Count'
            case 'lbs':
                return 'Weight (lbs)'
        }
    } 

    const items = pantry.map((item, idx) => {
        if (!item) return;
        return (
            <View style={styles.item} key={idx}>
                <View style={{ ...styles.left}}>
                    <Image
                        style={styles.img}
                        source={item.img}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ ...styles.name, fontFamily: 'Inter_400Regular' }}>{item.name}</Text>
                    <Text style={{ ...styles.unit_measure, fontFamily: 'Inter_400Regular' }}>{unitType(item.unit_measure)}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={{ ...styles.amount, fontFamily: 'Roboto_500Medium' }}>{format(item.amount)}</Text>
                </View>
            </View>
        )
    })

    var changes;
    var appendedText;
    if (params?.newItems) {
        if (params.newItems == 0) {
            changes = '';
        } else if (params.newItems > 0 && params.increase) {
            changes = params.newItems.toString();
            appendedText = ' entries added';
        } else {
            changes = params.newItems.toString();
            appendedText = ' entries removed';
        }
    }

    if (!fontsLoaded) return;
    return (
        <>
        <View style={{ flex: 0.3, maxHeight: 150 }}>
            <Header heading={"Pantry"} subHeading={'Inventory'} back={() => navigation.navigate('Home')} />
        </View>
        <ScrollView style={styles.scrollView}
            ref={scrollViewRef}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                  setShowModal(!showModal);
                }}
            >
                <Pressable style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{ ...styles.modalText, marginTop: 9, fontFamily: 'Inter_500Medium' }}>Pantry Updated Successfully!</Text>
                            {changes && appendedText && <View style={{ flexDirection: 'row', marginBottom: 32 }}>
                                <Text style={{ ...styles.count, fontSize: 20, fontFamily: 'Inter_400Regular', textAlign: 'center' }}>{changes}</Text>
                                <Text style={{ ...styles.unit_measure, fontSize: 20, fontFamily: 'Inter_400Regular', textAlign: 'center'}}>{appendedText}</Text>
                            </View>}
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                <Pressable style={styles.homeButton} onPress={() => {
                                    setShowModal(false);
                                    navigation.navigate('Home')
                                }}>
                                    <Text style={styles.homeButtonText}>Go Home</Text>
                                </Pressable>
                                <Pressable style={styles.pantryButton} onPress={() => setShowModal(false)}>
                                    <Text style={styles.pantryButtonText}>View Pantry</Text>
                                </Pressable>
                            </View>
                        </View>
                 </Pressable>
              </Modal>
            <View style={{ flex: 2.5, marginHorizontal: 19, marginVertical: 24 }}>
                {items}
            </View>
        </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.2, justifyContent: 'space-between' }}>
                <Pressable style={{ ...styles.button, marginLeft: 50 }} onPress={() => navigation.navigate("CameraScan", { pantry: pantry, setPantry: (items) => setPantry(items), setShowModal: (bool) => setShowModal(bool) })}>
                    <MaterialCommunityIcons name="camera-plus-outline" size={37} color="white" />
                </Pressable>    
                <Pressable style={{ ...styles.button, marginRight: 50 }} onPress={() => navigation.navigate('Edit', { pantry: pantry, setPantry: (items) => setPantry(items), setShowModal: (bool) => setShowModal(bool) })}>
                    <MaterialCommunityIcons name="pencil" size={37} color="white" />
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 29,
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
    modalText: {
        marginBottom: 23,
        fontSize: 20,
        textAlign: "center",
        color: '#201A25',
    },
    pantryButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F3752B',
        width: 124,
        height: 48,
        borderRadius: 10
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3752B',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    pantryButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17
    },  
    homeButton: {
        borderWidth: 1,
        maxWidth: 120,
        maxHeight: 48,
        marginRight: 38,
        borderColor: '#F3752B',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 13,
        boxSizing: 'border-box',
    },
    homeButtonText: {
        color: '#F3752B',
        fontWeight: 'bold',
        fontSize: 17
    }, 
    scrollButton: {
        width: 40,
        top: -90,
        right: 0,
        position: 'absolute',
    },
    count: {
        color: '#F3752B',
    },
    center: {
        flex: 1,
    },
    img: {
        width: 100,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 24,
    },
    left: {
        flex: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    right: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    amount: {
        color: '#C3C6C9',
        fontSize: 20,
    },
    name: {
        fontSize: 17,
        maxWidth: 125,
    },
    unit_measure: {
        color: '#8E8E93',
        fontSize: 15,
    },
});