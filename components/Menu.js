import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Home from './Home';
import Pantry from './Pantry';
import Schedule from './Schedule';
import Profile from './Profile';
import Learning from './Learning';

const Tab = createBottomTabNavigator();

export default function Menu() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: styles.selected,
                    tabBarInactiveTintColor: styles.default,
                    tabBarLabelStyle: {
                        fontSize: 14,
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

                        return <MaterialCommunityIcons name={iconName} size={28} color={color} />;
                    }
                    })}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Pantry" component={Pantry}/>
                <Tab.Screen name="Schedule" component={Schedule} />
                <Tab.Screen name="Profile" component={Profile} listeners={{
                    tabPress: (e) => {
                    e.preventDefault();
                    },
                }}/>
                <Tab.Screen name="Learning" component={Learning} listeners={{
                    tabPress: (e) => {
                    e.preventDefault();
                    },
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    selected: '#F3752B',
    default: '#999999',
});