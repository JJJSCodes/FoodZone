import { createStackNavigator } from "@react-navigation/stack";
import Home from './Home';
import Availability from './Availability';

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {

    const screenOptionStyle = {
        headerShown: false,
    };

    return (
        <Stack.Navigator initialRouteName={"Home"} screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Availability" component={Availability} />
        </Stack.Navigator>
    )
}
