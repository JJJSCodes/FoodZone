import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, Pressable, navigation } from 'react-native';
import Home from '../Home';
import { createStackNavigator } from "@react-navigation/stack";
import  selectMeal from './selectMeal';
import Home from '../Home';


const Stack = createStackNavigator();

export default function Home({ navigation }) {
    useEffect(() => {
        if (navigation) {
            navigation.setOptions({ tabBarStyle: { display: 'none' } })
        }
    });

    const screenOptionStyle = {
        headerShown: false,
    };
    
    return (
        <Stack.Navigator initialRouteName={"Home"} screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="selectMeal" component={selectMeal} />           
        </Stack.Navigator>
    )
}
