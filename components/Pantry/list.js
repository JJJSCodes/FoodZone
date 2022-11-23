import { Text, View, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Header from '../Header'
import defaultPantry from './defaultPantry';
import { useState } from 'react';

export default function List({ navigation }) {
    const [pantry, setPantry] = useState(defaultPantry);
    const items = pantry.map((item) => {
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
                    <Text style={styles.amount}>{item.amount}</Text>
                </View>
            </View>
        )
    })

    return (
        <ScrollView style={styles.scrollView}>
            <Header heading={"Pantry"} subHeading={'Inventory'} />
            <View style={{ flex: 2.5, margin: 19 }}>
                {items}
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginBottom: 80 }}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Edit', { setPantry: (items) => setPantry(items), pantry: pantry })}>
                    <AntDesign name="pluscircle" size={80} color="#F3752B" />
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
    },
    unit_measure: {
        color: '#8E8E93',
        fontSize: 15,
    },
});