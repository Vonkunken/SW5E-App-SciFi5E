import { StyleSheet, Text, View } from 'react-native';
import weapons from '../../json/items_json/weapons.json'

export default function WeaponPage({ navigation }) {
    var weaponsArray = weapons.weapon.map(Object.values)
    console.log(weaponsArray)
    return (
        <View style={styles.container}>
            <Text>
                Weapons
            </Text>
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
  });