import { Text, View, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

export default function Header({ heading, subHeading, back, isHome }) {
    return (
        <View style={styles.screenContainer}>
            <LinearGradient
                colors={['#F3752B', '#000000']}
                style={{ flex: 1 }}
            >
                <View style={{ flex: 1, margin: 24, alignItems: isHome ? 'flex-start' : 'center', justifyContent: 'flex-end' }}>
                    {back && <TouchableOpacity style={styles.button} onPress={() => back()}>
                        <Ionicons name='arrow-back' size={35} color='white' />
                    </TouchableOpacity>}
                    <View style={{ textAlign: isHome ? 'left' : 'center', flexDirection: 'column' }}>
                        <Text style={{ ...styles.screenHeading, textAlign: isHome ? 'left' : 'center' }}>{heading}</Text>
                        <Text style={{ ...styles.screenSubHeading, textAlign :isHome ? 'left' : 'center' }}>{subHeading}</Text>
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
        marginLeft: 28,
    },
    screenContainer: {
        flex: 1,
        minHeight: 150,
    },
    screenHeading: {
        fontSize: 22,
        fontWeight: '700',
        color: 'white',
    },
    screenSubHeading: {
        fontSize: 15,
        fontWeight: '400',
        marginTop: 4,
        color: 'white',
    },
  });