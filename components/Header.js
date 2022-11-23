import { Text, View, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

export default function Header({ heading, subHeading, back }) {
    return (
        <View style={styles.screenContainer}>
            <LinearGradient
                colors={['#F3752B', '#000000']}
                style={styles.gradient}
            >
                <SafeAreaView style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                    <View style={{ bottom: '70%', marginTop: 20 }}>
                        {back && <TouchableOpacity style={styles.button} onPress={() => back()}>
                            <Ionicons name='arrow-back' size={35} color='white' />
                            </TouchableOpacity>}
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.screenHeading}>{heading}</Text>
                        <Text style={styles.screenSubHeading}>{subHeading}</Text>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginLeft: 19,
        marginBottom: 27,
    },
    button: {
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
        textAlign: 'center',
    },
    screenSubHeading: {
        fontSize: 15,
        fontWeight: '400',
        marginTop: 4,
        color: 'white',
        textAlign: 'center',
    },
  });