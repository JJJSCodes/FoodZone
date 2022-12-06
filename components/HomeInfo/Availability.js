import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, Pressable, navigation } from 'react-native';
import Header from '../Header';
import { Entypo } from '@expo/vector-icons';

export default function Availability({ navigation, route: { params } }) {
    return (
        <View style={styles.screenContainer}>
            <ScrollView style={styles.scrollView}>
                <Header heading='Shift View' subHeading='My Shift' />
            </ScrollView>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Entypo name="arrow-bold-left" size={24} color="black" />
                <Text style={{ fontSize: 20, fontWeight: "700", paddingHorizontal: 10 }}> Nov 13 - Nov 20</Text>
                <Entypo name="arrow-bold-right" size={24} color="black" />
            </View>

            <View style={styles.shift}>
                <View style={{ margin: 10 }}>
                    <Entypo name="circle" size={24} color="black" /> 
                </View> 
                <View>
                    <Text style={styles.meal}>Eggs and Sausage</Text>
                    <Text style={styles.time}> Breakfast</Text>
                </View>
                
                <Text style={styles.day}> Nov 14</Text>
            </View>
            
            <View style={styles.shift}>
                <View style={{ margin: 10 }}>
                    <Entypo name="circle" size={24} color="black" />
                </View>
                <View>
                    <Text style={styles.meal}>Three Bean Soup</Text>
                    <Text style={styles.time}> Lunch</Text>
                </View>
                <Text style={styles.day}> Nov 14</Text>
            </View>

            <View style={styles.shift}>
                <View style={{ margin: 10 }}>
                    <Entypo name="circle" size={24} color="black" />
                </View>
                <View>
                    <Text style={styles.meal}>Steak and Potatoes</Text>
                    <Text style={styles.time}> Dinner</Text>
                </View>
                <Text style={styles.day}> Nov 16</Text>
            </View>

            <View style={styles.shift}>
                <View style={{ margin: 10 }}>
                    <Entypo name="circle" size={24} color="black" />
                </View>
                <View>
                    <Text style={styles.meal}>Fish and Chips</Text>
                    <Text style={styles.time}> Lunch</Text>
                </View>
                <Text style={styles.day}> Nov 17</Text>
            </View>

            <View style={styles.shift}>
                <View style={{ margin: 10 }}>
                    <Entypo name="circle" size={24} color="black" />
                </View>
                <View>
                    <Text style={styles.meal}>Ham and Cheese Sandwich</Text>
                    <Text style={styles.time}> Breakfast</Text>
                </View>
                <Text style={styles.day}> Nov 19</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
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
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        marginHorizontal: 30
    }
})