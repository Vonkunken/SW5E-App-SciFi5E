import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ItemPage({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Items
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Weapon', { navigation })}>
                <Text>
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
                <Text>
                    Armor
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdventuringGear', { navigation })}>
                <Text>
                    Adventuring Gear
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EnhancedEquipment', { navigation })}>
                <Text>
                    Enhanced Equipment
                </Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 5,
        backgroundColor: '#aaaaaa',
        borderColor: '#ffffff',
        borderWidth: 10,
        borderRadius: 15,
        alightItems: 'center',
        justifyContent: 'center',
    }
  });