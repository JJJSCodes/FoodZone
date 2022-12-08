import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Header from '../Header'
import { useState, useRef, useEffect } from 'react';
import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Poppins_200ExtraLight_Italic, Poppins_300Light, Poppins_400Regular } from '@expo-google-fonts/poppins';
import defaultSchedule from './defaultSchedule';

export default function Main({ navigation, route: { params } }) {
    useEffect(() => {
        if (!params) return;
        const { meals, goHome = false } = params;
        if (goHome) {
            navigation.navigate('Home')
        }
        if (meals) {
            navigation.navigate('Show', params)
        }
    }, [params])

    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_400Regular
    });

    const [scheduleIdx, setScheduleIdx] = useState(1);

    if (!fontsLoaded) return;

    var breakfastItems = [];
    var lunchItems = [];
    var dinnerItems = [];

    defaultSchedule[scheduleIdx].forEach((day, idx) => {
        const [breakfast, lunch, dinner] = day.meals;

        breakfastItems.push(
            <Pressable key={idx} style={{ ...styles.sectionCard, backgroundColor: day.today ? 'rgba(243, 117, 43, 0.1)' : 'white' }} onPress={() => navigation.navigate('Show', { meals: day.meals, mealIdx: 0 })}>
                <Text style={{ ...styles.cardName, fontFamily: breakfast.passed ? 'Poppins_200ExtraLight_Italic' : day.today ? 'Poppins_400Regular' : 'Poppins_300Light' }}>{breakfast.name}</Text>
                <View style={styles.cardAssigned}>
                    {
                        breakfast.assigned.map((assignee, idx) => {
                            return <Text key={idx} style={{ ...styles.assigneeName, fontFamily: breakfast.passed ? 'Poppins_200ExtraLight_Italic' : day.today ? 'Poppins_400Regular' : 'Poppins_300Light', color: assignee.isMe ? '#F3752B' : '#201A25' }}>{assignee.name}{idx !== breakfast.assigned.length - 1 && ', '}</Text>
                        })
                    }
                </View>
            </Pressable>
        );
        lunchItems.push(
            <Pressable key={idx} style={{ ...styles.sectionCard, backgroundColor: day.today ? 'rgba(243, 117, 43, 0.1)' : 'white' }} onPress={() => navigation.navigate('Show', { meals: day.meals, mealIdx: 1 })}>
                <Text style={{ ...styles.cardName, fontFamily: lunch.passed ? 'Poppins_200ExtraLight_Italic' : day.today ? 'Poppins_400Regular' : 'Poppins_300Light' }}>{lunch.name}</Text>
                <View style={styles.cardAssigned}>
                    {
                        lunch.assigned.map((assignee, idx) => {
                            return <Text key={idx} style={{ ...styles.assigneeName, fontFamily: lunch.passed ? 'Poppins_200ExtraLight_Italic' : day.today ? 'Poppins_400Regular' : 'Poppins_300Light', color: assignee.isMe ? '#F3752B' : '#201A25' }}>{assignee.name}{idx !== lunch.assigned.length - 1 && ', '}</Text>
                        })
                    }
                </View>
            </Pressable>
        );
        dinnerItems.push(
            <Pressable key={idx} style={{ ...styles.sectionCard, backgroundColor: day.today ? 'rgba(243, 117, 43, 0.1)' : 'white' }} onPress={() => navigation.navigate('Show', { meals: day.meals, mealIdx: 2 })}>
                <Text style={{ ...styles.cardName, fontFamily: dinner.passed ? 'Poppins_200ExtraLight_Italic' : day.today ? 'Poppins_400Regular' : 'Poppins_300Light' }}>{dinner.name}</Text>
                <View style={styles.cardAssigned}>
                    {
                        dinner.assigned.map((assignee, idx) => {
                            return <Text key={idx} style={{ ...styles.assigneeName, fontFamily: dinner.passed ? 'Poppins_200ExtraLight_Italic' : day.today ? 'Poppins_400Regular' : 'Poppins_300Light', color: assignee.isMe ? '#F3752B' : '#201A25' }}>{assignee.name}{idx !== dinner.assigned.length - 1 && ', '}</Text>
                        })
                    }
                </View>
            </Pressable>
        );
    });

    const decrement = () => {
        if (scheduleIdx > 0) {
            setScheduleIdx(scheduleIdx - 1)
        }
    }
    const increment = () => {
        if (scheduleIdx < 2) {
            setScheduleIdx(scheduleIdx + 1)
        }
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ flex: 0.3, maxHeight: 150 }}>
                <Header heading={"Schedule"} back={() => navigation.goBack()}>
                    <View style={{ flexDirection: "row", marginTop: 4 }}>
                        <Pressable display={scheduleIdx != 0 ? 'flex' : 'none'} onPress={() => decrement()}>
                            <Text style={{ ...styles.timeText }}>{"< "}</Text>
                        </Pressable>
                        <Text style={{ ...styles.timeText }}>
                            {defaultSchedule[scheduleIdx][0].calendar_date + ' - ' + defaultSchedule[scheduleIdx][2].calendar_date}
                        </Text>
                        <Pressable display={scheduleIdx != 2 ? 'flex' : 'none'} onPress={() => increment()}>
                            <Text style={{ ...styles.timeText }} >{' >'}</Text>
                        </Pressable>
                    </View>
                </Header>
            </View>
            <View style={{ flexDirection: 'row', fontFamily: 'Inter_400Regular', flex: 0.1, ...styles.topBar }}>
                <Text style={{ ...styles.screenText, backgroundColor: defaultSchedule[scheduleIdx][0].today ? 'rgba(243, 117, 43, 0.1)' : 'white', color: defaultSchedule[scheduleIdx][0].today ? '#201A25' : '#666666' }}>{defaultSchedule[scheduleIdx][0]['short_date']}</Text>
                <Text style={{ ...styles.screenText, color: defaultSchedule[scheduleIdx][1].today ? '#201A25' : '#666666' }}>{defaultSchedule[scheduleIdx][1]['short_date']}</Text>
                <Text style={{ ...styles.screenText, color: defaultSchedule[scheduleIdx][2].today ? '#201A25' : '#666666' }}>{defaultSchedule[scheduleIdx][2]['short_date']}</Text>
            </View>
            <View style={{ marginVertical: 25, flex: 1, flexDirection: 'column' }}>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Breakfast</Text>
                    <View style={styles.divider} />
                    <View style={styles.sectionRow}>
                        {breakfastItems}
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Lunch</Text>
                    <View style={styles.divider} />
                    <View style={styles.sectionRow}>
                        {lunchItems}
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeading}>Dinner</Text>
                    <View style={styles.divider} />
                    <View style={styles.sectionRow}>
                        {dinnerItems}
                    </View>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    timeText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Inter_400Regular',
        flexWrap: 'nowrap',
    },
    sectionCard: {
        flex: 0.33,
        flexDirection: 'column',
        minHeight: 120,
        maxWidth: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "rgba(32, 26, 37, 0.12)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
    cardAssigned: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    assigneeName: {
        flexDirection: 'row',
        fontSize: 16,
    },
    cardName: {
        flex: 2,
        flexWrap: 'wrap',
        marginTop: 15,
        textAlign: 'center',
        fontSize: 16,
        marginHorizontal: 10,
    },
    sectionRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 10,
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionHeading: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 20,
        marginLeft: 15,
    },
    section: {
        flex: 1,
        flexDirection: 'column',
    },
    screenText: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
    },
    divider: {
        borderBottomColor: '#F08F5F',
        borderBottomWidth: 2,
    },
    topBar: {
        width: '100%',
        maxHeight: 40,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
});