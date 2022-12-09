import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, Pressable, navigation } from 'react-native';
import Header from '../Header';
import { Entypo } from '@expo/vector-icons';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold, Inter_500Medium } from '@expo-google-fonts/inter';
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function Availability({ navigation, route: { params } }) {
    let [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_400Regular,
        Poppins_700Bold,
        Poppins_600SemiBold
    });
    return (
        <View style={styles.screenContainer}>
            <Header heading='Shift View' subHeading='My Shift' back={() => navigation.goBack()} />
            <ScrollView style={styles.scrollView}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Entypo name="arrow-bold-left" size={24} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: "700", paddingHorizontal: 10 }}> Nov 13 - Nov 20</Text>
                    <Entypo name="arrow-bold-right" size={24} color="black" />
                </View>

                <View style={styles.shift}>
                    <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
                        <Entypo name="circle" size={24} color="black" />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={styles.meal}>Eggs and Sausage</Text>
                            <Text style={styles.time}>Breakfast</Text>
                        </View>
                    </View>
                    <Text style={styles.day}>Nov 14</Text>
                </View>
                <View style={{ borderBottomWidth: 1, width: '100%', borderBottomColor: '#F2F2F7' }} />
                <View style={styles.shift}>
                    <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
                        <Entypo name="circle" size={24} color="black" />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={styles.meal}>Three Bean Soup</Text>
                            <Text style={styles.time}>Lunch</Text>
                        </View>
                    </View>
                    <Text style={styles.day}>Nov 14</Text>
                </View>
                <View style={{ borderBottomWidth: 1, width: '100%', borderBottomColor: '#F2F2F7' }} />
                <View style={styles.shift}>
                    <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
                        <Entypo name="circle" size={24} color="black" />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={styles.meal}>Steak and Potatoes</Text>
                            <Text style={styles.time}>Dinner</Text>
                        </View>
                    </View>
                    <Text style={styles.day}>Nov 16</Text>
                </View>
                <View style={{ borderBottomWidth: 1, width: '100%', borderBottomColor: '#F2F2F7' }} />

                <View style={styles.shift}>
                    <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
                        <Entypo name="circle" size={24} color="black" />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={styles.meal}>Fish and Chips</Text>
                            <Text style={styles.time}>Lunch</Text>
                        </View>
                    </View>
                    <Text style={styles.day}>Nov 17</Text>
                </View>
                <View style={{ borderBottomWidth: 1, width: '100%', borderBottomColor: '#F2F2F7' }} />
                <View style={styles.shift}>
                    <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
                        <Entypo name="circle" size={24} color="black" />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={styles.meal}>Pancakes</Text>
                            <Text style={styles.time}>Breakfast</Text>
                        </View>
                    </View>
                    <Text style={styles.day}>Nov 19</Text>
                </View>
                <View style={{ borderBottomWidth: 1, width: '100%', borderBottomColor: '#F2F2F7' }} />

                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <View style={{ backgroundColor: '#F3752B', borderRadius: 10, marginBottom: 15 }}>
                        <Text style={{ paddingVertical: 13, paddingHorizontal: 20, color: 'white', fontFamily: 'Poppins_600SemiBold', fontSize: 17 }}>Unassign Shift</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#F3752B', borderRadius: 10 }}>
                        <Text style={{ paddingVertical: 13, paddingHorizontal: 20, color: '#F3752B', fontFamily: 'Poppins_600SemiBold', fontSize: 17 }}>Message Partner</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 30,
        marginBottom: 30,
    },
    screenContainer: {
        flex: 1,
        backgroundColor: 'white',
    },

    shift: {
        flexDirection: "row",
        margin: 20,
        justifyContent: "space-between"
    },

    meal: {
        fontSize: 18,
        fontWeight: "600",
    },

    time: {
        fontSize: 17,
        fontWeight: "400"
    },

    day: {
        color: "grey",
        fontSize: 17,
        alignSelf: "center",
        marginHorizontal: 30
    }
})