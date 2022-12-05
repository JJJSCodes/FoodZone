import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, Pressable, navigation } from 'react-native';
import Header from './Header';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
    return (
        <View style={styles.screenContainer}>
            <ScrollView style={styles.scrollView}>
                <Header heading='Good Morning' subHeading='Jasmine' />
                <View style={styles.container}>
                    <Text style={styles.heading}>Current Meal</Text>
                    <View style={styles.meal}>
                        <Text style={styles.subText}> Lunch </Text>
                        <Image
                            style={styles.dishImage}
                            source={require('../assets/dishes/lasagna.jpg')}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.screenTextdish}> Lasagna Bolognese </Text>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 10 }}>
                                <AntDesign name="star" size={15} color="#FFCC00" />
                                <Text style={{ fontSize: 13, fontWeight: "700" }}> 4.8</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.textChefOranage}> Jasmine </Text>
                            <Text style={styles.textChef}>, Mike </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 37 }}>
                        <Pressable style={styles.cookButton} onPress={() => console.log('here')}>
                            <Text style={styles.cookButtonText}>Start Cooking!</Text>
                        </Pressable>

                        <Pressable style={styles.availableButton} onPress={() => console.log('here')}>
                            <Text style={styles.availableButtonText}>Edit Avalability</Text>
                        </Pressable>
                    </View>

                    <Text style={styles.headingNext} >Up Next</Text>

                    <View style={styles.mealNext}>
                        <Image
                            source={require('../assets/dishes/burger.png')}
                        />
                        <View style = {{margin: 15}}>
                            <Text style={{fontSize: 15, fontWeight:"600" }}> Vegan Burger </Text>
                            <Text style={{fontSize: 13, color: "grey"}}> Stephanie, Jake </Text>
                            <Text style={{fontSize: 13, fontWeight: '500', marginTop: 10}}> Dinner </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    container: {
        margin: 20,
    },

    heading: {
        fontWeight: '700',
        fontSize: 20,
        textAlign: "center",
        textDecorationLine: 'underline'
    },

    dishImage: {
        width: 316,
        height: 184
    },

    subText: {
        fontSize: 16,
        fontFamily: "Inter_400Regular",
        color: "grey",
        paddingBottom: 10
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
        fontWeight: '700',
        fontSize: 16,
        textAlign: "center",
        textDecorationLine: 'underline'

    },

    mealNext: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30
    },

});