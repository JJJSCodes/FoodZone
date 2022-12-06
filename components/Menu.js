import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStack from './HomeInfo';
import Pantry from './Pantry';
import Schedule from './Schedule';
import Profile from './Profile';
import Learning from './Learning';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

const Tab = createBottomTabNavigator();

export default function Menu() {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    if (!fontsLoaded) return;

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: styles.selected,
                    tabBarInactiveTintColor: styles.default,
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontFamily: 'Poppins_500Medium',
                    },
                    tabBarStyle: {
                        // paddingHorizontal: 22,
                        // minHeight: 90,
                        // paddingTop: 5,
                        // backgroundColor: 'white',
                        // shadowColor: "rgba(32, 26, 37, 0.12)",
                        // shadowOffset: {
                        //     width: 0,
                        //     height: -1,
                        // },
                        // shadowOpacity: 1,
                        // shadowRadius: 3,
                        // elevation: 5,
                    },
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'home-outline';
                        } else if (route.name === 'Pantry') {
                            iconName = 'shopping-outline';
                        } else if (route.name === 'Schedule') {
                            iconName = 'calendar-range-outline';
                        } else if (route.name === 'Profile') {
                            iconName = 'account-circle-outline';
                        } else if (route.name === 'Learning') {
                            iconName = 'school-outline';
                        }
                        let color = focused ? styles.selected : styles.default;

                        return <MaterialCommunityIcons name={iconName} size={30} color={color} />;
                    }
                })}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Pantry" component={Pantry} />
                <Tab.Screen name="Schedule" component={Schedule} />
                <Tab.Screen name="Profile" component={Profile} listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                    },
                }} />
                <Tab.Screen name="Learning" component={Learning} listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                    },
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    selected: '#F3752B',
    default: '#7C7C7C',
});