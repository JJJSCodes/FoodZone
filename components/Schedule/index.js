import Main from './main';
import Show from './show';
import Cook from './cook';

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function Schedule({ navigation }) {
    return (
        <Stack.Navigator initialRouteName={"Main"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Show" component={Show} />
            <Stack.Screen name="Cook" component={Cook} />
        </Stack.Navigator>
    )
}