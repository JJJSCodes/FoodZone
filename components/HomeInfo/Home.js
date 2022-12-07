import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, Pressable, navigation, ImageBackground } from 'react-native';
import Header from '../Header';
import { useState } from 'react';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold, Inter_500Medium } from '@expo-google-fonts/inter';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Meals from '../Schedule/defaultSchedule';

export default function Home({ navigation, route: { params } }) {
    let [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_400Regular,
        Poppins_700Bold,
    });

    const [heartSelected, setHeartSelected] = useState(true);

    if (!fontsLoaded) return;

    return (
        <View style={styles.screenContainer}>
            <ScrollView style={styles.scrollView}>
                <Header heading='Good Morning' subHeading='Jasmine' />
                <View style={styles.container}>
                    <Text style={styles.heading}>Current Meal</Text>
                    <View style={styles.meal}>
                        <Pressable onPress={() => navigation.navigate('Schedule', { screen: 'Main', params: { meals: Meals[1][0].meals, mealIdx: 1 } })}>
                            <ImageBackground
                                style={styles.dishImage}
                                imageStyle={{ borderRadius: 16 }}
                                source={require('../../assets/dishes/lasagna.jpg')}>
                                <Text style={styles.subText}> Lunch </Text>
                                <View style={styles.timeBox}>
                                    <Text style={styles.time}>40 min</Text>
                                </View>
                                <View style={styles.heartButton}>
                                    <Pressable style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: 'rgba(255, 255, 255, 0.1)', alignItems: 'center', justifyContent: 'center' }} onPress={() => setHeartSelected(!heartSelected)}>
                                        <MaterialCommunityIcons name="heart" size={15} color={heartSelected ? '#DA0854' : styles.default} />
                                    </Pressable>
                                </View>
                            </ImageBackground>
                        </Pressable>
                        <View style={{ alignSelf: 'center', marginTop: 8, maxWidth: 300, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 17, flex: 1 }}>Lasagna Bolognese </Text>
                            <View style={{ flexDirection: 'row', flex: 0.5, justifyContent: 'flex-end' }}>
                                <AntDesign name="star" size={15} color="#FFCC00" />
                                <Text style={{ fontSize: 13, fontWeight: "700", marginLeft: 2 }}> 4.8</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignSelf: 'center', width: 300, top: -5, alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Text style={styles.textChefOranage}>Jasmine</Text>
                            <Text style={styles.textChef}>, Mike </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 37 }}>
                        <Pressable style={styles.cookButton} onPress={() => navigation.navigate('Schedule', { screen: 'Main', params: { meals: Meals[1][0].meals, mealIdx: 1 } })}>
                            <Text style={styles.cookButtonText}>Start Cooking!</Text>
                        </Pressable>

                        <Pressable style={styles.availableButton} onPress={() => navigation.navigate('Availability')}>
                            <Text style={styles.availableButtonText}>Edit Avalability</Text>
                        </Pressable>
                    </View>

                    <Text style={styles.headingNext} >Up Next</Text>
                    <View style={styles.mealNext}>
                        <Image
                            source={require('../../assets/dishes/burger.png')}
                        />
                        <Pressable style={{ margin: 15 }} onPress={() => navigation.navigate('Schedule', { screen: 'Main', params: { meals: Meals[1][0].meals, mealIdx: 2 } })}>
                            <Text style={{ flex: 0.5, fontSize: 15, fontFamily: 'Inter_600SemiBold' }}> Vegan Burger </Text>
                            <Text style={{ flex: 0.5, fontSize: 13, color: "grey", fontFamily: 'Inter_400Regular' }}> Stephanie, Jake </Text>
                            <Text style={{ flex: 0.1, fontSize: 13, fontFamily: 'Inter_500Medium' }}> Dinner </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    default: '#8E8E93',
    screenContainer: {
        flex: 1,
    },
    container: {
        margin: 20,
    },

    heading: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        textAlign: "center",
        textDecorationLine: 'underline'
    },

    dishImage: {
        alignSelf: 'center',
        width: 300,
        height: 184,
        borderRadius: 16,
        marginTop: 30,
    },

    subText: {
        top: -25,
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        color: "grey",
        paddingBottom: 10
    },
    timeBox: {
        borderRadius: 400,
        bottom: 10,
        left: 10,
        position: 'absolute',
        backgroundColor: "white",
    },
    heartButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },

    meal: {
        // alignItems: 'center',
        margin: 20,
        justifyContent: "flex-start",
        color: "blue"
    },

    screenTextdish: {
        fontSize: 17,
        fontWeight: "700",
        marginTop: 10
    },

    textChef: {
        fontSize: 15,
        color: 'grey',
        marginTop: 10
    },

    textChefOranage: {
        fontSize: 15,
        color: '#F3752B',
        marginTop: 10
    },


    cookButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F3752B',
        width: 180,
        height: 48,
        borderRadius: 10,
    },

    cookButtonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },

    availableButton: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#F3752B",
        borderWidth: 2,
        width: 180,
        height: 48,
        borderRadius: 10,
    },

    availableButtonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: "#F3752B"
    },

    headingNext: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 16,
        textAlign: "center",
        textDecorationLine: 'underline'

    },

    mealNext: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30
    },

    time: {
        fontFamily: 'Inter_700Bold',
        fontSize: 12,
    },

    timeBox: {
        borderRadius: 800,
        backgroundColor: "white",
        height: 30,
        width: 60,
        position: "absolute",
        bottom: 10,
        left: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }

});