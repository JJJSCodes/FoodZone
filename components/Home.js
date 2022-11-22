import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, Pressable, navigation } from 'react-native';
import { Header } from './index';

export default function Home() {
    return (
        <View style={styles.screenContainer}>
            {/* <Header heading='Good Morning' subHeading='Jasmine' back={true} />
            <View style={{ flex: 2.5 }} /> */}

            <ScrollView style={styles.scrollView}>
                <Header heading='Good Morning' subHeading='Jasmine' />
                <View style={styles.container}>
                    <Text style={styles.heading}>Today's Meals</Text>
                    <View style={styles.meal}>
                        <Image
                            style={styles.dishImage}
                            //source={{uri: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}
                            source={require('../assets/dishes/burrito.png')}
                        />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={styles.screenTextdish}> Burrito </Text>
                            <Text style={styles.textChef}> Jasmine, Luke </Text>
                            <Text style={styles.boldText}> Breakfast </Text>
                        </View>
                    </View>

                    <View style={styles.meal}>
                        <Image
                            style={styles.dishImage}
                            source={require('../assets/dishes/lasagne.png')}
                        />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={styles.screenTextdish}> Lasagne Bolognese </Text>
                            <Text style={styles.textChef}> Luke </Text>
                            <Text style={styles.boldTextPink}> Lunch - Coming up </Text>
                        </View>
                    </View>

                    <View style={styles.meal}>
                        <Image
                            style={styles.dishImage}
                            source={require('../assets/dishes/burger.png')}
                        />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={styles.screenTextdish}> Vegan Burger </Text>
                            <Text style={styles.textChef}> Stephanie, Jake </Text>
                            <Text style={styles.boldText}> Dinner </Text>
                        </View>
                    </View>
                </View>

                {/* <Pressable onPress={navigation.navigate('Pantry') }> */}

                <View style={styles.cookButton}>
                    <Text style={styles.cookButtonText}>Cook Now</Text>
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
        fontSize: '20',
    },

    dishImage: {
        width: 100,
        height: 100
    },

    screenTextdish: {
        fontSize: 17,
        //margin: 5
    },
    textChef: {
        fontSize: 15,
        color: 'grey',
        // margin: 5
    },

    boldText: {
        fontWeight: 'bold',
        marginTop: 10
    },

    boldTextPink: {
        fontWeight: 'bold',
        marginTop: 10,
        color: '#F532F9'
    },

    meal: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },

    cookButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F3752B',
        width: 124,
        height: 48,
        borderRadius: 10
    },

    cookButtonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    }
});