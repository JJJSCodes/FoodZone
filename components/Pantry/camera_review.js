import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect } from 'react';

const Scan_Pantry = [
    {
        img: require('../../assets/pantry/cheddar.png'),
        name: 'Shredded Cheddar',
        unit_measure: 'Count',
        amount: 2,
    },
    {
        img: require('../../assets/pantry/milk.png'),
        name: 'Skimmed Milk',
        unit_measure: 'Count',
        amount: 1,
    },
]

export default function CamReview({ navigation, route: { params } }) {
    const { uri } = params;
    console.log(uri);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back' size={35} color='black' />
            </TouchableOpacity>
            <Image style={{ flex: 1, height: '30%',  width: '100%', resizeMode: 'contain', position: 'relative' }} source={{ uri: uri.uri }} />
            <TouchableOpacity style={styles.reviewButton} onPress={() => navigation.goBack()}>
                <Text style={styles.reviewText}>Review</Text>
                <MaterialCommunityIcons name='book' size={25} color='white' />
            </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        flex: 0.2,
        alignSelf: 'flex-start',
        top: '10%',
        width: 35,
        marginLeft: 28,
      
    },
    reviewButton: {
        flex: 0.09,
        marginBottom: 55,
        marginTop: 45,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3752B', 
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    reviewText: {
        color: 'white',
        fontSize: 17,
        marginRight: 10,
    }
  });




