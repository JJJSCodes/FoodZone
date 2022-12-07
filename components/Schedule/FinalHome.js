import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, Pressable, navigation, ImageBackground } from 'react-native';
import Header from '../Header';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { AntDesign } from '@expo/vector-icons';
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

export default function FinalHome({ navigation, route: { params } }) {
    return (
        <View style={styles.screenContainer}>
            <ScrollView style={styles.scrollView}>
                <Header heading='Good afternoon' subHeading='Jasmine' />
                <View style={styles.container}>
                    <Text style={styles.heading}>Current Meal</Text>
                    <View style={styles.meal}>
                        <Text style={styles.subText}> Dinner </Text>
                        <ImageBackground
                            style={styles.dishImage}
                            source={require('../../assets/dishes/burger_big.png')}>
                            <View style = {styles.timeBox}>
                            <Text style = {styles.time}>35 min</Text>
                            </View>
                        </ImageBackground>

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.screenTextdish}> Vegan Burger </Text>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 10 }}>
                                <AntDesign name="star" size={15} color="#FFCC00" />
                                <Text style={{ fontSize: 13, fontWeight: "700" }}> 4.6</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.textChef}> Stephanie, Jake </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 37 }}>
                        <Pressable style={styles.cookButton} onPress={() => navigation.navigate('SelectMeal')}>
                            <Text style={styles.cookButtonText}>Start Cooking!</Text>
                        </Pressable>

                        <Pressable style={styles.availableButton} onPress={() => navigation.navigate('Availability')}>
                            <Text style={styles.availableButtonText}>Edit Avalability</Text>
                        </Pressable>
                    </View>

                    <Text style={styles.headingNext} >Up Next</Text>

                    <View style={styles.mealNext}>
                        <Image
                            source={require('../../assets/dishes/baccon.png')}
                        />
                        <View style={{ margin: 15 }}>
                            <Text style={{ fontSize: 15, fontWeight: "600" }}> Bacon and Egg </Text>
                            <Text style={{ fontSize: 13, color: "grey" }}> Mike </Text>
                            <Text style={{ fontSize: 13, fontWeight: '500', marginTop: 10 }}> Breakfast </Text>
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
        height: 184,
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
        backgroundColor: '#E5956D',
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

    time: {
        fontSize: 12,
        fontWeight: "700",
        padding: 3
    },

    timeBox: {
        borderRadius: 800,
        backgroundColor: "white",
        height: 30,
        width: 60,
        position: "absolute",
        bottom: 10,
        left: 10
    }

});