import Main from './main';
import Show from './show';
import Cook from './cook';
import FinalHome from './FinalHome';

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function Schedule({ navigation, currMealIdx, setCurrMealIdx }) {
    return (
        <Stack.Navigator initialRouteName={"Main"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Show" component={Show} />
            <Stack.Screen name="Cook" children={() => <Cook navigation={navigation} setCurrMealIdx={setCurrMealIdx} />} />
            <Stack.Screen name="FinalHome" component={FinalHome} />

        </Stack.Navigator>
    )
}