import { Text, View, StyleSheet, Image, Alert, Button, ScrollView, Pressable } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import Header from '../Header';
import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export default function Edit({ navigation, route: { params } }) {
    const { setPantry, pantry, setShowModal } = params;
    const isFocused = useIsFocused();
    const [pantryCopy, setPantryCopy] = useState(pantry);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    useEffect(() => {
        // navigation.addListener('beforeRemove', (e) => {
        //     if (!hasUnsavedChanges) {
        //       return;
        //     }
        //     e.preventDefault();
        //     Alert.alert(
        //       'Discard changes?',
        //       'You have unsaved changes. Are you sure to discard them and leave the screen?',
        //       [
        //         { text: "Don't leave", style: 'cancel', onPress: () => {} },
        //         {
        //           text: 'Discard',
        //           style: 'destructive',
        //           // If the user confirmed, then we dispatch the action we blocked earlier
        //           // This will continue the action that had triggered the removal of the screen
        //           onPress: () => navigation.dispatch(e.data.action),
        //         },
        //       ]
        //     );
        // })
        
        // if (!isFocused) {
        //     navigation.reset({
        //         index: 0,
        //         routes: [{ name: 'List' }],
        //     })
        // }

    }, [navigation, isFocused, hasUnsavedChanges])

    const check = (back) => {
        console.log(hasUnsavedChanges)
        if (!hasUnsavedChanges) {
            back();
            return;
        }
        Alert.alert(
            'Discard changes?',
            'You have unsaved changes. Are you sure to discard them and leave the screen?',
            [
                { text: "Don't leave", style: 'cancel', onPress: () => { } },
                {
                    text: 'Discard',
                    style: 'destructive',
                    onPress: () => {
                        setPantryCopy(pantry);
                        back();
                    },
                },
            ]
        );
    }

    useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
        return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
      }, [navigation]);

    const subtract = (idx) => {
        var item = pantryCopy[idx];
        var copy = [...pantryCopy];
        setHasUnsavedChanges(true);
        if (item.amount - 1 > 0) {
            item.amount = item.amount - 1;
            copy[idx] = item;
            setPantryCopy(copy);
        } else {
            copy.splice(idx, 1)
            setPantryCopy(copy);
        }
    }

    const add = (idx) => {
        var item = pantryCopy[idx];
        var copy = [...pantryCopy];
        setHasUnsavedChanges(true);
        item.amount = item.amount + 1;
        copy[idx] = item;
        setPantryCopy(copy);
    }
    
    const format = (amount) => {
        if (amount > 9) return amount.toString();
        return '0' + amount.toString();
    }

    const items = pantryCopy.map((item, idx) => {
        return (
            <View style={styles.item}>
                <View style={styles.left}>
                    <Image
                        style={styles.img}
                        source={item.img}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.unit_measure}>{item.unit_measure}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    {item.amount > 0 ? <Pressable style={styles.amountButtonLeft} onPress={() => subtract(idx)}>
                        {item.amount == 1 ? <MaterialCommunityIcons name="trash-can-outline" color="black" size={18} /> : <AntDesign name="minus" size={18} color= "black" />}
                    </Pressable> : <View style={{ ...styles.amountButtonLeft, backgroundColor: 'transparent' }} />}
                    <Text style={styles.amount}>{format(item.amount)}</Text>
                    <Pressable style={styles.amountButtonRight} onPress={() => add(idx)}>
                        <AntDesign name="plus" size={18} color= "black" />
                    </Pressable>
                </View>
            </View>
        )
    })
    return (
        <ScrollView style={styles.scrollView}>
            <Header heading={"Pantry"} subHeading={'Update Items'} back={() => check(() => navigation.goBack())} />
            <View style={{ flex: 2.5, margin: 19, alignItems: 'center' }}>
                {items}
                <Pressable style={styles.addMore} onPress={() => navigation.navigate(() => { })}>
                    <Text style={styles.addMoreText}>Add More</Text>
                </Pressable>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80, marginBottom: 80 }}>
                <Pressable style={styles.submit} onPress={() => {
                    setPantry(pantryCopy);
                    setShowModal(true);
                    navigation.navigate('List');
                }}>
                    <Text style={styles.submitText}>Submit</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate(() => {})}>
                    <MaterialCommunityIcons name="camera-plus-outline" size={50} color="white" />
                </Pressable>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    addMoreText: {
        color: '#F3752B',
        fontSize: 17,
        fontWeight: '600',
    },
    addMore: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        maxWidth: 120,
        maxHeight: 48,
        borderColor: '#F3752B',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 13,
        boxSizing: 'border-box',
    },
    submit: {
        backgroundColor: '#F3752B',
        width: 123,
        height: 48,
        borderRadius: 10,
        position: 'absolute',
        left: 28,
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
        borderRadius: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3752B',
        position: 'absolute',
        right: 26,
    },
    img: {
        width: 100,
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
    },
    unit_measure: {
        color: '#8E8E93',
        fontSize: 15,
    },
});
