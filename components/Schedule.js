import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header'

export default function Schedule() {
    const subHeading = 'Dec 13th - Dec 15th';
    return (
        <ScrollView style={styles.scrollView}>
            <Header heading={"3 Day View"} subHeading={'< ' + subHeading + ' >'} />
            <View style={{ flex: 2.5 }}>
                <Text style={styles.screenText}>Schedule!</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    screenText: {
      fontSize: 32,
    },
  });