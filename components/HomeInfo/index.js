import { createStackNavigator } from "@react-navigation/stack";
import Home from './Home';
import Availability from './Availability';

const Stack = createStackNavigator();

export default function HomeStack({ navigation, currMealIdx, setCurrMealIdx }) {
    const screenOptionStyle = {
        headerShown: false,
    };

    return (
        <Stack.Navigator initialRouteName={"Home"} screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" children={() => <Home navigation={navigation} currMealIdx={currMealIdx} setCurrMealIdx={setCurrMealIdx} />} />
            <Stack.Screen name="Availability" component={Availability} />
        </Stack.Navigator>
    )
}
