import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Header } from './index';

export default function Pantry() {
    return (
        <ScrollView style={styles.scrollView}>
            <Header heading={"Pantry"} subHeading={'Inventory'} />
            <View style={{ flex: 2.5 }}>
                <Text style={styles.screenText}>Pantry!</Text>
            </View>
            <Pressable style={styles.button} onPress={() => console.log('bai')}>
                <AntDesign name="pluscircle" size={80} color="#F3752B" />
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    button: {
        position: 'fixed',
        bottom: 0,
        right: 0,
    },
    screenText: {
        fontSize: 32,
    },
  });