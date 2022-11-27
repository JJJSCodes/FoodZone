import { Text, View, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

export default function Header({ heading, subHeading, back, isHome }) {
    return (
        <View style={styles.screenContainer}>
            <LinearGradient
                colors={['#F3752B', '#000000']}
                style={styles.gradient}
            >
                <SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: isHome ? 'flex-start' : 'center', justifyContent: 'flex-end' }}>
                        {back && <TouchableOpacity style={styles.button} onPress={() => back()}>
                            <Ionicons name='arrow-back' size={35} color='white' />
                        </TouchableOpacity>}
                        <View style={{ marginHorizontal: 24, textAlign: isHome ? 'left' : 'center', flexDirection: 'column' }}>
                            <Text style={{ ...styles.screenHeading, textAlign: isHome ? 'left' : 'center' }}>{heading}</Text>
                            <Text style={{ ...styles.screenSubHeading, textAlign :isHome ? 'left' : 'center' }}>{subHeading}</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    button: {
        position: 'absolute',
        left: 0,
        width: 35,
        marginLeft: 28,
    },
    screenContainer: {
        flex: 1,
        minHeight: 230,
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