import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Header } from './index';

export default function Home() {
    return (
        // <View style={styles.screenContainer}>
        //     <Header heading='Good Morning' subHeading='Jasmine' back={true} />
        //     {/* <View style={{ flex: 2.5 }} /> */}
        // </View>
        <ScrollView style={styles.scrollView}>
            <Header heading='Good Morning' subHeading='Jasmine' />
            <View style={styles.container}>
                <Text style={styles.heading}>Today's Meals</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
    },
    container: {
        margin: 20,
    },
    heading: {
        fontWeight: '700',
        fontSize: '20',
    },
    screenText: {
      fontSize: 32,
    },
  });