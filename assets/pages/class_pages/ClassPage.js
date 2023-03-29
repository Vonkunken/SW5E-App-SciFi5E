import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ClassPage({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TouchableOpacity style={styles.title} disabled={true}>
                    <Text style={styles.text}>
                        Classes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassDetails', {reference: 0}, { navigation })}>
                    <Text style={styles.text}>
                        Berserker
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassDetails', {reference: 1}, { navigation })}>
                    <Text style={styles.text}>
                        Consular
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassDetails', {reference: 2}, { navigation })}>
                    <Text style={styles.text}>
                        Engineer
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassDetails', {reference: 3}, { navigation })}>
                    <Text style={styles.text}>
                        Fighter
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassDetails', {reference: 4}, { navigation })}>
                    <Text style={styles.text}>
                        Guardian
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassDetails', {reference: 5}, { navigation })}>
                    <Text style={styles.text}>
                        Monk
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassDetails', {reference: 6}, { navigation })}>
                    <Text style={styles.text}>
                        Operative
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassDetails', {reference: 7}, { navigation })}>
                    <Text style={styles.text}>
                        Scholar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassDetails', {reference: 8}, { navigation })}>
                    <Text style={styles.text}>
                        Scout
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassDetails', {reference: 9}, { navigation })}>
                    <Text style={styles.text}>
                        Sentinel
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#252525',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        padding: 4,
        borderBottomWidth: 2,
        borderBottomColor: "#941a1d",
        borderLeftWidth: 2,
        borderLeftColor: "#941a1d",
        margin: Dimensions.get('window').width * 0.01,
        width: Dimensions.get('window').width * 0.98,
    }, 
    title: {
        padding: 4,
        borderWidth: 4,
        borderColor: "#941a1d",
        margin: Dimensions.get('window').width * 0.01,
        width: Dimensions.get('window').width * 0.98,
    }, 
    text: {
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 40,
    }
  });