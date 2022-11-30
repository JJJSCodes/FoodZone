import { Text, View, StyleSheet, Alert, Image, TextInput, Pressable, ScrollView } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import Header from '../Header';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';
import { EmptyItem } from './defaultPantry';

const Scan_Pantry = [
    {
        img: require('../../assets/pantry/cheddar.png'),
        name: 'Shredded Cheddar',
        unit_measure: 'count',
        amount: 2,
    },
    {
        img: require('../../assets/pantry/milk.png'),
        name: 'Skimmed Milk',
        unit_measure: 'count',
        amount: 1,
    },
]

export default function CamReviewList({ navigation, route: { params } }) {
    const [reviewList, setReviewList] = useState([...Scan_Pantry]);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(true);
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Roboto_500Medium,
    });

    const subtract = (idx) => {
        var copy = [...reviewList];
        if (copy[idx].amount - 1 > 0) {
            copy[idx].amount -= 1;
            setReviewList(copy);
        } else {
            copy.splice(idx, 1)
            setReviewList(copy);
        }
        setHasUnsavedChanges(true);
    }

    const add = (idx) => {
        var copy = [...reviewList];
        copy[idx].amount += 1;
        setReviewList(copy);
        setHasUnsavedChanges(true);
    }

    const addMore = () => {
        var copy = [...reviewList];
        copy.push({...EmptyItem});
        setReviewList(copy);
        setHasUnsavedChanges(true);
    }
    
    const format = (amount) => {
        if (amount > 9) return amount.toString();
        return '0' + amount.toString();
    }

    const check = (back) => {
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
                        back();
                    },
                },
            ]
        );
    }

    const items = reviewList.map((item, idx) => {
        if (!item) return;
        var isCount = item.unit_measure === 'count';
        var isWeight = item.unit_measure === 'lbs';
        var textRef;
        return (
            <View key={idx}  style={{ ...styles.item } }>
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
                                        var copy = [...reviewList];
                                        copy[idx].name = text;
                                        setReviewList(copy);
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
                                var copy = [...reviewList];
                                copy[idx].unit_measure = 'count';
                                setReviewList(copy);
                            }}>
                                <Text style={{ ...styles.unit_measure, fontWeight: isCount ? 'bold' : 'normal' }}>Count</Text>
                            </Pressable>
                            <Text style={{ ...styles.unit_measure, textDecorationLine: 'none' }}> / </Text>
                            <Pressable
                            onPress={() => {
                                setHasUnsavedChanges(true);
                                var copy = [...reviewList];
                                copy[idx].unit_measure = 'lbs';
                                setReviewList(copy);
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
                    <Text style={styles.amount}>{format(item.amount)}</Text>
                    <Pressable style={styles.amountButtonRight} onPress={() => add(idx)}>
                        <AntDesign name="plus" size={18} color= "black" />
                    </Pressable>
                </View>
            </View>
        )
    })

    if (!fontsLoaded) return;

    return (
            <ScrollView style={styles.scrollView}>
            <Header heading={"Pantry"} subHeading={'Review Scanned Items'} back={() => check(() => navigation.navigate('CameraScan'))} />
                <View style={{ flex: 2.5, margin: 19, alignItems: 'center' }}>
                    {items}
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 80}}>
                    <Pressable style={styles.addMore} onPress={() => addMore()}>
                        <Text style={styles.addMoreText}>Add More</Text>
                    </Pressable>
                    <Pressable style={styles.submit} onPress={() => {
                        var copy = [...reviewList];
                        var newCopy = copy.filter((item) => item.amount > 0);
                        newCopy.forEach((item) => {
                            if (item.name === "") {
                                item.name = "Enter Item Name";
                            }
                        })
                        navigation.navigate('Edit', { ...params, concat: newCopy });
                    }}>
                        <Text style={styles.submitText}>Save</Text>
                    </Pressable>
                </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: 'column'
    },  
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
        marginRight: 44,
    },
    submit: {
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
