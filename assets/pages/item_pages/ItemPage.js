import { TouchableOpacity, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ItemPage({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TouchableOpacity style={styles.title} disabled={true}>
                    <Text style={styles.text}>
                        Items
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Weapon', { navigation })}>
                    <Text style={styles.text}>
                        Weapons
                    </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WeaponProperties')}>
                    <Text>
                        Weapon Properties
                    </Text>
                </TouchableOpacity> */}
                {/*this button is unneeded for SW5E, its here as I'm working on idea for my own personal version, ignore this for the time being*/}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Armor', { navigation })}>
                    <Text style={styles.text}>
                        Armor
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdventuringGear', { navigation })}>
                    <Text style={styles.text}>
                        Adventuring Gear
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EnhancedEquipment', { navigation })}>
                    <Text style={styles.text}>
                        Enhanced Equipment
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