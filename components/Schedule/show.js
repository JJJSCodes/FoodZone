import { Text, View, StyleSheet, Pressable, FlatList, ImageBackground } from 'react-native';
import Header from '../Header'
import { MaterialCommunityIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { useState, useRef, useEffect } from 'react';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';

const Options = [
    {},
    {
        name: 'Lemon Pepper Steak',
        img: require('../../assets/dishes/pexels-malidate-van-769289.jpg'),
        rating: 4.7,
        time: 45,
        subtitle: 'Alternative Meal',
    },
    {
        name: 'Chicken and Rice',
        img: require('../../assets/dishes/pexels-rajesh-tp-1624487.jpg'),
        rating: 4.9,
        time: 30,
        subtitle: 'Alternative Meal',
    },
    {
        name: 'Salmon and Rice',
        img: require('../../assets/dishes/Image.jpg'),
        rating: 4.5,
        time: 30,
        subtitle: 'Alternative Meal',
    },
];


export default function Show({ navigation, route: { params } }) {
    let [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_400Regular,
        Poppins_600SemiBold
    });
    const { meals, mealIdx } = params;
    // const meal = meals[mealIdx];
    const [meal, setMeal] = useState(meals[mealIdx]);
    const [selectIdx, setSelection] = useState(0);
    const [heartSelected, setHeartSelected] = useState(true);

    if (!fontsLoaded) return;

    const decrement = () => {
        if (selectIdx - 1 == 0) {
            setMeal(meals[mealIdx]);
        } else {
            setMeal({ ...meal, ...Options[selectIdx - 1] })
        }
        setSelection(selectIdx - 1);
        setHeartSelected(true);
    }

    const increment = () => {
        setMeal({ ...meal, ...Options[selectIdx + 1] })
        setSelection(selectIdx + 1);
        setHeartSelected(true);
    }

    const renderItem = ({ item, idx }) => (
        <View key={idx}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, paddingVertical: 16 }}>
                <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 17, color: item.name === "Jasmine" ? '#F3752B' : 'black' }}>{item.name}</Text>
                <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 17, color: '#8E8E93' }}>{item.skill}</Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#F2F2F7' }} />
        </View>
    )

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 0.4, maxHeight: 150 }}>
                <Header heading={meal.meal} subHeading={meal.long_date} back={() => navigation.goBack()} />
            </View>
            {/* <View style={styles.menuTopBar}>
                <Pressable onPress={() => navigation.navigate('Show', { ...params, mealIdx: 0 })}>
                    <Text style={{ ...styles.menuText, borderColor: styles.orange, borderBottomWidth: 1, color: mealIdx == 0 ? styles.orange : styles.default }}>Breakfast</Text>
                    {mealIdx == 0 && <View style={{ bottom: -10, borderColor: styles.orange, borderWidth: 1 }} />}
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Show', { ...params, mealIdx: 1 })}>
                    <Text style={{ ...styles.menuText, color: mealIdx == 1 ? styles.orange : styles.default }}>Lunch</Text>
                    {mealIdx == 1 && <View style={{ bottom: -10, borderColor: styles.orange, borderWidth: 1 }} />}
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Show', { ...params, mealIdx: 2 })}>
                    <Text style={{ ...styles.menuText, color: mealIdx == 2 ? styles.orange : styles.default }}>Dinner</Text>
                    {mealIdx == 2 && <View style={{ bottom: -10, borderColor: styles.orange, borderWidth: 1 }} />}
                </Pressable>
            </View> */}
            <View style={{ flex: 0.5, alignItems: 'center', marginTop: 50 }}>
                <ImageBackground
                    style={styles.dishImage}
                    source={meal.img}
                    imageStyle={{ borderRadius: 16 }}
                >
                    <View style={{ top: -25 }}>
                        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15, color: '#8E8E93' }}>{meal.subtitle ? meal.subtitle : 'Top Reccomendation'}</Text>
                    </View>
                    <View style={styles.timeBox}>
                        <Text style={styles.time}>{meal.time ? meal.time : 40} min</Text>
                    </View>
                    <View style={styles.heartButton}>
                        <Pressable style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: 'rgba(255, 255, 255, 0.1)', alignItems: 'center', justifyContent: 'center' }} onPress={() => setHeartSelected(!heartSelected)}>
                            <MaterialCommunityIcons name="heart" size={15} color={heartSelected ? '#DA0854' : styles.default} />
                        </Pressable>
                    </View>
                    {meal.today && (
                        <>
                            {selectIdx >= 1 && <Pressable style={{ position: 'absolute', left: -40, bottom: '40%' }} onPress={() => decrement()}>
                                <SimpleLineIcons name="arrow-left-circle" size={32} />
                            </Pressable>}
                            {selectIdx <= 2 && <Pressable style={{ position: 'absolute', right: -40, bottom: '40%' }} onPress={() => increment()}>
                                <SimpleLineIcons name="arrow-right-circle" size={32} />
                            </Pressable>}
                        </>
                    )}
                </ImageBackground>
                <View style={{ flex: 1, maxWidth: 300, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 17, flex: 1 }}>{meal.name}</Text>
                    <View style={{ flexDirection: 'row', flex: 0.5, justifyContent: 'flex-end' }}>
                        <AntDesign name="star" size={15} color="#FFCC00" />
                        <Text style={{ fontSize: 13, fontWeight: "700", marginLeft: 2 }}> {meal.rating ? meal.rating : 4.8}</Text>
                    </View>
                </View>
            </View >
            <View style={{ flex: 0.3, marginTop: 40 }}>
                <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 20, marginHorizontal: 48 }}>Cooks</Text>
                <FlatList
                    style={{ marginHorizontal: 25 }}
                    data={meal.assigned}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                <Pressable disabled={!meal.today} style={{ backgroundColor: meal.today ? '#F3752B' : '#8E8E93', borderRadius: 10 }} onPress={() => navigation.navigate('Cook')}>
                    <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Poppins_600SemiBold', paddingHorizontal: 20, paddingVertical: 11 }}>Cook This!</Text>
                </Pressable>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    heartButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    dishImage: {
        maxWidth: 300,
        maxHeight: 184,
        width: '100%',
        height: '100%',
        borderRadius: 16,
        marginTop: 8,
    },
    time: {
        fontFamily: 'Inter_700Bold',
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    timeBox: {
        borderRadius: 400,
        bottom: 10,
        left: 10,
        position: 'absolute',
        backgroundColor: "white",
    },
    orange: '#F3752B',
    default: '#8E8E93',
    menuText: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Inter_700Bold',
    },
    menuTopBar: {
        maxHeight: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 0.1,
        backgroundColor: 'white',
        shadowColor: "rgba(32, 26, 37, 0.12)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
});