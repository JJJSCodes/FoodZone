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
                <SafeAreaView>
                    {back && <TouchableOpacity style={styles.button} onPress={() => console.log('bai')}>
                        <Ionicons name='arrow-back' size={35} color='white' />
                    </TouchableOpacity>}
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
        justifyContent: 'flex-end',
    },
    text: {
        alignItems: 'flex-start',
        top: '50%',
        flexDirection: 'column',
        marginLeft: 19,
        marginBottom: 20,
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