import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function Header({ heading, subHeading, back, children }) {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
    });

    if (!fontsLoaded) return;

    return (
        <View style={styles.screenContainer}>
            <ImageBackground
                style={{ height: 234, flex: 1 }}
                source={require('../../assets/dishes/pexels-rajesh-tp-1624487.jpg')}
            >
                <View style={{ height: 234, smarginVertical: 24, marginHorizontal: 24, alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                    {back && <TouchableOpacity style={styles.button} onPress={() => back()}>
                        <Ionicons name='arrow-back' size={35} color='white' />
                    </TouchableOpacity>}
                    <View style={{ flexDirection: 'column', bottom: 27 }}>
                        <Text style={{ ...styles.screenHeading, textAlign: 'center' }}>Chicken and Rice</Text>
                        <Text style={{ ...styles.screenSubHeading }}>Recipe</Text>

                    </View>
                </View>
            </ImageBackground >
        </View >
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        left: 0,
        top: 70,
        width: 35,
    },
    screenContainer: {
        flex: 1,
    },
    screenHeading: {
        fontSize: 22,
        fontWeight: '700',
        color: 'white',
        fontFamily: 'Inter_700Bold',
    },
    screenSubHeading: {
        fontSize: 15,
        fontWeight: '400',
        marginTop: 4,
        marginBottom: 30,
        color: 'white',
        fontFamily: 'Inter_400Regular',
    },
});