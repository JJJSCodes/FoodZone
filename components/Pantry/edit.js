import { Text, View, StyleSheet, Image, Alert, TextInput, TouchableOpacity, Modal, ScrollView, Pressable } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Header from '../Header';
import { useState, useEffect, useRef } from 'react';
import { EmptyItem } from './defaultPantry';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';

export default function Edit({ navigation, route: { params } }) {
    const { pantry, setPantry, setShowModal } = params;
    const [pantryCopy, setPantryCopy] = useState(JSON.parse(JSON.stringify(pantry)));
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [changesModal, setChangesModal] = useState(false);
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Roboto_500Medium,
    });

    const scrollViewRef = useRef();

    const check = (back) => {
        if (!hasUnsavedChanges) {
            back();
            return;
        } else {
            setChangesModal(true);
        }
    }

    const subtract = (idx) => {
        var copy = [...pantryCopy];
        if (copy[idx].amount - 1 > 0) {
            copy[idx].amount -= 1;
            setPantryCopy(copy);
        } else {
            copy.splice(idx, 1)
            setPantryCopy(copy);
        }
        setHasUnsavedChanges(true);
    }

    const add = (idx) => {
        var copy = [...pantryCopy];
        copy[idx].amount += 1;
        setPantryCopy(copy);
        setHasUnsavedChanges(true);
    }

    const addMore = () => {
        var copy = [...pantryCopy];
        copy.push({ ...EmptyItem });
        setPantryCopy(copy);
        setHasUnsavedChanges(true);
        scrollViewRef.current?.scrollToEnd({ animated: true })
    }

    const format = (amount) => {
        if (amount > 9) return amount.toString();
        return '0' + amount.toString();
    }

    const items = pantryCopy.map((item, idx) => {
        if (!item) return;
        var isCount = item.unit_measure === 'count';
        var isWeight = item.unit_measure === 'lbs';
        var textRef;
        return (
            <View key={idx} style={{ ...styles.item }}>
                <View style={{ ...styles.left }}>
                    <Image
                        style={{ ...styles.img }}
                        source={item.img}
                    />
                    <View style={{ marginHorizontal: 10, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                ref={(input) => textRef = input}
                                placeholder={'Enter Item Name'}
                                value={item.name}
                                style={{ ...styles.name, paddingRight: 20, justifyContent: 'center' }}
                                multiline={true}
                                onChangeText={text => {
                                    setHasUnsavedChanges(true);
                                    var copy = [...pantryCopy];
                                    copy[idx].name = text;
                                    setPantryCopy(copy);
                                }}
                            />
                            <View style={{ left: -15, top: 2 }}>
                                <Pressable onPress={() => { textRef.focus() }}>
                                    <MaterialCommunityIcons name="pencil-circle" size={20} color="#F3752B" />
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Pressable onPress={() => {
                                setHasUnsavedChanges(true);
                                var copy = [...pantryCopy];
                                copy[idx].unit_measure = 'count';
                                setPantryCopy(copy);
                            }}>
                                <Text style={{ ...styles.unit_measure, fontWeight: isCount ? 'bold' : 'normal' }}>Count</Text>
                            </Pressable>
                            <Text style={{ ...styles.unit_measure, textDecorationLine: 'none' }}> / </Text>
                            <Pressable
                                onPress={() => {
                                    setHasUnsavedChanges(true);
                                    var copy = [...pantryCopy];
                                    copy[idx].unit_measure = 'lbs';
                                    setPantryCopy(copy);
                                }}>
                                <Text style={{ ...styles.unit_measure, fontWeight: isWeight ? 'bold' : 'normal' }}>Weight (lbs)</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.right}>
                    {item.amount >= 0 ?
                        <Pressable style={styles.amountButtonLeft} onPress={() => subtract(idx)}>
                            {item.amount <= 1 ?
                                <MaterialCommunityIcons name="trash-can-outline" color="black" size={18} /> :
                                <AntDesign name="minus" size={18} color="black" />
                            }
                        </Pressable> : <View style={{ ...styles.amountButtonLeft, backgroundColor: 'transparent' }} />}
                    <TextInput
                        style={styles.amount}
                        onChangeText={val => {
                            setHasUnsavedChanges(true);
                            var copy = [...pantryCopy];
                            copy[idx].amount = parseInt(val);
                            setPantryCopy(copy);
                        }}
                    >
                        {format(item.amount)}
                    </TextInput>
                    <Pressable style={styles.amountButtonRight} onPress={() => add(idx)}>
                        <AntDesign name="plus" size={18} color="black" />
                    </Pressable>
                </View>
            </View>
        )
    })

    if (!fontsLoaded) return;

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={changesModal}
            >
                <Pressable style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ ...styles.modalText, marginTop: 9, fontFamily: 'Inter_500Medium' }}>Warning</Text>
                        <Text style={{ color: '#F3752B', fontSize: 20, fontFamily: 'Inter_400Regular', textAlign: 'center', marginBottom: 15 }}>You are about to lose all of your progress</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Pressable style={styles.cancelButton} onPress={() => {
                                setChangesModal(false);
                            }}>
                                <Text style={{ fontSize: 17, color: '#F3752B' }}>Cancel</Text>
                            </Pressable>
                            <Pressable style={styles.proceedButton} onPress={() => {
                                setChangesModal(false);
                                navigation.goBack();
                            }}>
                                <Text style={{ fontSize: 17, color: 'white' }}>Proceed</Text>
                            </Pressable>
                        </View>
                    </View>
                </Pressable>
            </Modal>
            <View style={{ flex: 0.3, maxHeight: 150 }}>
                <Header heading={"Pantry"} subHeading={'Update Items'} back={() => check(() => navigation.navigate('List'))} />
            </View>
            <ScrollView
                style={styles.scrollView}
                ref={scrollViewRef}
            >
                <View style={{ flex: 2.5, margin: 19, alignItems: 'center' }}>
                    {items}
                </View>
            </ScrollView>
            <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', ...styles.bottomBar }}>
                <Pressable style={styles.addMore} onPress={() => addMore()}>
                    <Text style={styles.addMoreText}>Add More</Text>
                </Pressable>
                <Pressable style={styles.submit} onPress={() => {
                    var copy = [...pantryCopy];
                    var newCopy = copy.filter((item) => item.amount > 0);
                    newCopy.forEach((item) => {
                        if (item.name === "") {
                            item.name = "Enter Item Name";
                        }
                    })
                    setPantry(newCopy);
                    setShowModal(true);
                    navigation.navigate('List', { newItems: newCopy.length - pantry.length, increase: newCopy.length > pantry.length });
                }}>
                    <Text style={styles.submitText}>Save</Text>
                </Pressable>
            </View>
        </>
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
        marginBottom: 16,
        fontSize: 20,
        textAlign: "center",
        color: '#201A25',
    },
    cancelButton: {
        marginRight: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        width: 109,
        height: 48,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F3752B',
    },
    proceedButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F3752B',
        width: 109,
        height: 48,
        borderRadius: 10
    },
    scrollView: {
        flex: 1,
        flexDirection: 'column'
    },
    // bottomBar: {
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    //     elevation: 5,
    // },
    addMoreText: {
        color: '#F3752B',
        fontSize: 17,
        fontWeight: '600',
    },
    addMore: {
        marginLeft: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        width: 120,
        height: 48,
        borderColor: '#F3752B',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 13,
        // backgroundColor: 'white',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    submit: {
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
        marginRight: 44,
        backgroundColor: '#F3752B',
        width: 123,
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitText: {
        fontSize: 17,
        color: 'white',
        fontWeight: '600',
    },
    button: {
        width: 80,
        height: 80,
        marginRight: 44,
        borderRadius: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3752B',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 16,
    },
    amountButtonLeft: {
        flex: 0.33,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#C3C6C9',
    },
    amountButtonRight: {
        flex: 0.33,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#C3C6C9',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 24,
    },
    left: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    right: {
        flex: 0.5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amount: {
        flex: 1,
        textAlign: 'center',
        color: '#C3C6C9',
        fontSize: 20,
    },
    name: {
        fontSize: 17,
        maxWidth: '90%',
    },
    unit_measure: {
        color: '#8E8E93',
        fontSize: 15,
        textDecorationLine: 'underline',
    },
});
