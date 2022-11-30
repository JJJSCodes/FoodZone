import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

export default function CamReview({ navigation, route: { params } }) {
    const { uri, ...rest } = params;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back' size={35} color='black' />
            </TouchableOpacity>
            <Image style={{ flex: 1, height: '30%',  width: '100%', resizeMode: 'contain', position: 'relative' }} source={{ uri: uri.uri }} />
            <TouchableOpacity style={styles.reviewButton} onPress={() => navigation.navigate('CamReviewList', rest)}>
                <Text style={styles.reviewText}>Review</Text>
                <MaterialCommunityIcons name='book' size={25} color='white' />
            </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        flex: 0.2,
        alignSelf: 'flex-start',
        top: '10%',
        width: 35,
        marginLeft: 28,
      
    },
    reviewButton: {
        flex: 0.09,
        marginBottom: 55,
        marginTop: 45,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3752B', 
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    reviewText: {
        color: 'white',
        fontSize: 17,
        marginRight: 10,
    }
  });




