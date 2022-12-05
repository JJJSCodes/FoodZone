import { Text, View, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function Header({ heading, subHeading, back, children }) {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
    });

    if (!fontsLoaded) return;

    return (
        <View style={styles.screenContainer}>
            <LinearGradient
                colors={['#F3752B', '#000000']}
                style={{ flex: 1 }}
            >
                <View style={{ flex: 1, marginVertical: 24, marginHorizontal: 24, alignItems: 'center', justifyContent: 'flex-end' }}>
                    {back && <TouchableOpacity style={styles.button} onPress={() => back()}>
                        <Ionicons name='arrow-back' size={35} color='white' />
                    </TouchableOpacity>}
                    <View style={{ textAlign: 'center', flexDirection: 'column' }}>
                        <Text style={{ ...styles.screenHeading, textAlign: 'center' }}>{heading}</Text>
                        {subHeading ?
                            <Text style={{ ...styles.screenSubHeading, textAlign: 'center' }}>{subHeading}</Text>
                            :
                            children
                        }
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        left: 0,
        width: 35,
    },
    screenContainer: {
        flex: 1,
        minHeight: 150,
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
        color: 'white',
        fontFamily: 'Inter_400Regular',
    },
});