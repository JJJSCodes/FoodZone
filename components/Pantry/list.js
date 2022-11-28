import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Alert, Pressable, Modal, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Header from '../Header'
import defaultPantry from './defaultPantry';
import { useState, useRef } from 'react';

export default function List({ navigation }) {
    const [pantry, setPantry] = useState(defaultPantry);
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

    const items = pantry.map((item) => {
        return (
            <View style={styles.item}>
                <View style={{ ...styles.left}}>
                    <Image
                        style={styles.img}
                        source={item.img}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.unit_measure}>{unitType(item.unit_measure)}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.amount}>{format(item.amount)}</Text>
                </View>
            </View>
        )
    })

    return (
        <ScrollView style={styles.scrollView}
            ref={scrollViewRef}
            onContentSizeChange={scrollViewRef.current?.scrollToEnd({ animated: true })}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setShowModal(!showModal);
                }}
            >
                <TouchableOpacity style={styles.centeredView} onPressOut={() => setShowModal(false)}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Pantry Updated Successfully!</Text>
                            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
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
                 </TouchableOpacity>
              </Modal>
            <Header heading={"Pantry"} subHeading={'Inventory'} back={() => navigation.navigate('Home')} />
            <View style={{ flex: 2.5, margin: 19 }}>
                {/* <Pressable style={styles.scrollButton} onPress={() => scrollViewRef.current?.scrollToEnd({animated: true})}>
                    <Feather name="chevrons-down" size={40} color="white" />
                </Pressable> */}
                {items}
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginBottom: 80 }}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Edit', { setPantry: (items) => setPantry(items), setShowModal: (bool) => setShowModal(bool), pantry: pantry })}>
                    <MaterialCommunityIcons name="pencil-circle" size={80} color="#F3752B" />
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 29,
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
        fontWeight: '600',
        textAlign: "center",
        color: '#201A25',
    },
    pantryButton: {
        position: 'relative',
        left: '35%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F3752B',
        width: 124,
        height: 48,
        borderRadius: 10
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
    button: {
        position: 'absolute',
        right: 19,
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