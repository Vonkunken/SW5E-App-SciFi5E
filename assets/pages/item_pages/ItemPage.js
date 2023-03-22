import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function ItemPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                Items
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Weapon')}>
                <Text>
                    Weapons
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WeaponProperties')}>
                <Text>
                    Weapon Properties
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Armor')}>
                <Text>
                    Armor
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdventuringGear')}>
                <Text>
                    Adventuring Gear
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EnhancedEquipment')}>
                <Text>
                    Enhanced Equipment
                </Text>
            </TouchableOpacity>
            
        </View>
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